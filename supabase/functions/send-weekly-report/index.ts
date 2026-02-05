import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SessionData {
  id: string;
  topic: string;
  subject: string | null;
  created_at: string;
  understanding_level: string | null;
  time_spent: number | null;
  improvement_score: number | null;
  weak_areas: string[] | null;
  strong_areas: string[] | null;
  ai_summary: string | null;
}

interface QuizData {
  id: string;
  created_at: string;
  accuracy_percentage: number | null;
  correct_count: number;
  total_questions: number;
}

interface DetailedReport {
  studentId: string;
  studentName: string;
  studentClass: string;
  schoolName: string;
  parentWhatsapp: string;
  totalSessions: number;
  totalMinutes: number;
  totalQuizzes: number;
  avgAccuracy: number;
  avgScore: number;
  studyConsistency: number;
  daysStudied: number;
  sessions: SessionData[];
  quizzes: QuizData[];
  topicsCovered: { topic: string; sessions: number; avgScore: number }[];
  weakAreas: string[];
  strongAreas: string[];
  subjectsStudied: string[];
  dailyBreakdown: { day: string; date: string; sessions: number; timeSpent: number; quizzes: number }[];
  grade: string;
  gradeLabel: string;
  trend: "improving" | "declining" | "stable";
  currentStreak: number;
  recommendations: string[];
  parentTips: string[];
}

const calculateGrade = (avgScore: number, avgAccuracy: number, sessionCount: number): { grade: string; label: string } => {
  const score = (avgScore * 0.4) + (avgAccuracy * 0.3) + (sessionCount * 5 * 0.3);
  if (score >= 85) return { grade: "A+", label: "Excellent" };
  if (score >= 75) return { grade: "A", label: "Very Good" };
  if (score >= 65) return { grade: "B+", label: "Good" };
  if (score >= 55) return { grade: "B", label: "Above Average" };
  if (score >= 45) return { grade: "C", label: "Average" };
  return { grade: "D", label: "Needs Improvement" };
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    let body: { studentId?: string } = {};
    try {
      body = await req.json();
    } catch {
      // No body provided
    }

    console.log("Starting report generation (Preview Only)...");

    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
    
    let studentsQuery = supabase.from("students").select("*, schools(name, district, state)");
    if (body.studentId) {
      studentsQuery = studentsQuery.eq("id", body.studentId);
    }

    const { data: students, error: studentsError } = await studentsQuery;

    if (studentsError) {
      console.error("Error fetching students:", studentsError);
      throw studentsError;
    }

    console.log(`Found ${students?.length || 0} students`);

    const reports: { studentName: string; reportData: DetailedReport }[] = [];

    for (const student of students || []) {
      const { data: sessions } = await supabase
        .from("study_sessions")
        .select("*")
        .eq("student_id", student.id)
        .gte("created_at", sevenDaysAgo)
        .order("created_at", { ascending: false });

      const { data: quizzes } = await supabase
        .from("quiz_attempts")
        .select("*")
        .eq("student_id", student.id)
        .gte("created_at", sevenDaysAgo)
        .order("created_at", { ascending: false });

      const sessionList: SessionData[] = (sessions || []) as SessionData[];
      const quizList: QuizData[] = (quizzes || []) as QuizData[];
      
      const totalSessions = sessionList.length;
      const totalMinutes = sessionList.reduce((acc, s) => acc + (s.time_spent || 0), 0);
      const totalQuizzes = quizList.length;
      const avgAccuracy = totalQuizzes > 0 
        ? Math.round(quizList.reduce((acc, q) => acc + (q.accuracy_percentage || 0), 0) / totalQuizzes)
        : 0;
      const avgScore = totalSessions > 0 
        ? Math.round(sessionList.reduce((acc, s) => acc + (s.improvement_score || 50), 0) / totalSessions)
        : 0;
      
      const studyDates = new Set(sessionList.map(s => new Date(s.created_at).toDateString()));
      const daysStudied = studyDates.size;
      const studyConsistency = Math.round((daysStudied / 7) * 100);
      
      const topicData: Record<string, { sessions: number; totalScore: number }> = {};
      sessionList.forEach(s => {
        const topic = s.topic || "General Study";
        if (!topicData[topic]) {
          topicData[topic] = { sessions: 0, totalScore: 0 };
        }
        topicData[topic].sessions++;
        topicData[topic].totalScore += s.improvement_score || 50;
      });
      
      const topicsCovered = Object.entries(topicData)
        .map(([topic, data]) => ({
          topic,
          sessions: data.sessions,
          avgScore: Math.round(data.totalScore / data.sessions),
        }))
        .sort((a, b) => b.sessions - a.sessions);
      
      const weakAreas = [...new Set(sessionList.flatMap(s => s.weak_areas || []))];
      const strongAreas = [...new Set(sessionList.flatMap(s => s.strong_areas || []))];
      const subjectsStudied = [...new Set(sessionList.map(s => s.subject).filter(Boolean))] as string[];
      
      const dailyBreakdown: { day: string; date: string; sessions: number; timeSpent: number; quizzes: number }[] = [];
      for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dayStr = date.toLocaleDateString("hi-IN", { weekday: "short" });
        const dateStr = date.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
        
        const daySessions = sessionList.filter(s => new Date(s.created_at).toDateString() === date.toDateString());
        const dayQuizzes = quizList.filter(q => new Date(q.created_at).toDateString() === date.toDateString());
        
        dailyBreakdown.push({
          day: dayStr,
          date: dateStr,
          sessions: daySessions.length,
          timeSpent: daySessions.reduce((acc, s) => acc + (s.time_spent || 0), 0),
          quizzes: dayQuizzes.length,
        });
      }
      
      let currentStreak = 0;
      for (let i = 0; i <= 6; i++) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const hasSession = sessionList.some(s => new Date(s.created_at).toDateString() === date.toDateString());
        if (hasSession) {
          currentStreak++;
        } else if (i === 0) {
          currentStreak = 0;
          break;
        } else {
          break;
        }
      }
      
      let trend: "improving" | "declining" | "stable" = "stable";
      if (sessionList.length >= 2) {
        const mid = Math.floor(sessionList.length / 2);
        const recentAvg = sessionList.slice(0, mid).reduce((acc, s) => acc + (s.improvement_score || 50), 0) / mid;
        const olderAvg = sessionList.slice(mid).reduce((acc, s) => acc + (s.improvement_score || 50), 0) / (sessionList.length - mid);
        if (recentAvg > olderAvg + 5) trend = "improving";
        else if (recentAvg < olderAvg - 5) trend = "declining";
      }
      
      const gradeInfo = calculateGrade(avgScore, avgAccuracy, totalSessions);
      
      const recommendations: string[] = [];
      if (currentStreak === 0) {
        recommendations.push("🎯 आज से पढ़ाई शुरू करें!");
      } else if (currentStreak >= 3) {
        recommendations.push("🏆 शानदार streak! जारी रखें!");
      }
      
      if (avgAccuracy < 50 && totalQuizzes > 0) {
        recommendations.push("📖 Quiz के लिए topics दोबारा पढ़ें।");
      } else if (avgAccuracy >= 70) {
        recommendations.push("⭐ Quiz performance excellent!");
      }
      
      if (weakAreas.length > 0) {
        recommendations.push(`⚠️ Focus: ${weakAreas.slice(0, 2).join(", ")}`);
      }
      
      if (totalMinutes < 60) {
        recommendations.push("⏰ Daily 30+ min study करें।");
      }
      
      const parentTips = [
        "👨‍👩‍👧 रोज़ 10 min बच्चे से बात करें",
        "🌟 छोटी उपलब्धियों की तारीफ़ करें",
        "📱 Screen time balance करें",
        "🏠 शांत जगह दें पढ़ाई के लिए",
      ];
      
      const schoolInfo = student.schools as { name: string; district: string | null; state: string | null } | null;
      
      const report: DetailedReport = {
        studentId: student.id,
        studentName: student.full_name,
        studentClass: student.class,
        schoolName: schoolInfo?.name || "N/A",
        parentWhatsapp: student.parent_whatsapp,
        totalSessions,
        totalMinutes,
        totalQuizzes,
        avgAccuracy,
        avgScore,
        studyConsistency,
        daysStudied,
        sessions: sessionList,
        quizzes: quizList,
        topicsCovered,
        weakAreas,
        strongAreas,
        subjectsStudied,
        dailyBreakdown,
        grade: gradeInfo.grade,
        gradeLabel: gradeInfo.label,
        trend,
        currentStreak,
        recommendations,
        parentTips,
      };
      
      reports.push({ studentName: student.full_name, reportData: report });
    }

    console.log("Report generation completed:", reports.map(r => r.studentName));

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Generated ${reports.length} reports`,
        reports,
        reportData: reports[0]?.reportData || null,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Report generation error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});