import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Clock,
  TrendingUp,
  Calendar,
  LogOut,
  Play,
  CheckCircle,
  User,
} from "lucide-react";
import StudyChat from "@/components/StudyChat";
import { useToast } from "@/hooks/use-toast";
import type { ChatMessage } from "@/types";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isStudying, setIsStudying] = useState(false);
  const [userName, setUserName] = useState("Student");
  
  // Mock data for dashboard
  const [stats, setStats] = useState({
    todayStudied: false,
    totalSessions: 12,
    totalMinutes: 540,
    improvementScore: 78,
    streak: 5,
  });

  const [recentSessions] = useState([
    { id: 1, topic: "Physics - Motion", date: "Today", duration: 45, score: 85 },
    { id: 2, topic: "Chemistry - Atoms", date: "Yesterday", duration: 30, score: 72 },
    { id: 3, topic: "Maths - Algebra", date: "2 days ago", duration: 60, score: 90 },
  ]);

  useEffect(() => {
    const name = localStorage.getItem("userName");
    if (name) setUserName(name);
  }, []);

  const handleStartStudy = () => {
    setIsStudying(true);
    toast({
      title: "Study Session Started! 📚",
      description: "Your AI buddy is ready to help.",
    });
  };

  const handleEndStudy = (summary: { topic: string; timeSpent: number; messages: ChatMessage[] }) => {
    setIsStudying(false);
    setStats((prev) => ({
      ...prev,
      todayStudied: true,
      totalSessions: prev.totalSessions + 1,
      totalMinutes: prev.totalMinutes + summary.timeSpent,
    }));
    toast({
      title: "Study Session Complete! 🎉",
      description: `You studied ${summary.topic} for ${summary.timeSpent} minutes.`,
    });
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  if (isStudying) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="container mx-auto max-w-4xl">
          <StudyChat onEndStudy={handleEndStudy} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <span className="font-bold text-lg">EduImprove AI</span>
                <p className="text-xs text-muted-foreground">Student Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                <span className="font-medium hidden sm:block">{userName}</span>
              </div>
              <Button variant="ghost" size="icon" onClick={handleLogout}>
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome & Start Study */}
        <div className="mb-8">
          <div className="edu-card p-6 md:p-8 text-center bg-gradient-to-br from-primary/10 to-accent/10">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Namaste, {userName}! 👋
            </h1>
            <p className="text-muted-foreground mb-6">
              {stats.todayStudied
                ? "Great job studying today! Ready for more?"
                : "Aaj kya padhna hai? Chal start karte hain!"}
            </p>
            <Button variant="hero" size="xl" onClick={handleStartStudy}>
              <Play className="w-5 h-5" />
              Start Studying
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={<CheckCircle className="w-5 h-5" />}
            label="Today"
            value={stats.todayStudied ? "Studied ✓" : "Not Yet"}
            color={stats.todayStudied ? "accent" : "muted"}
          />
          <StatCard
            icon={<Calendar className="w-5 h-5" />}
            label="Total Sessions"
            value={stats.totalSessions.toString()}
            color="primary"
          />
          <StatCard
            icon={<Clock className="w-5 h-5" />}
            label="Total Time"
            value={`${Math.round(stats.totalMinutes / 60)}h ${stats.totalMinutes % 60}m`}
            color="primary"
          />
          <StatCard
            icon={<TrendingUp className="w-5 h-5" />}
            label="Improvement"
            value={`${stats.improvementScore}%`}
            color="accent"
          />
        </div>

        {/* Recent Sessions */}
        <div className="edu-card p-6">
          <h2 className="text-lg font-bold mb-4">Recent Study Sessions</h2>
          <div className="space-y-3">
            {recentSessions.map((session) => (
              <div
                key={session.id}
                className="flex items-center justify-between p-4 bg-secondary/30 rounded-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{session.topic}</p>
                    <p className="text-sm text-muted-foreground">{session.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{session.duration} min</p>
                  <p className="text-sm text-accent font-medium">Score: {session.score}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

const StatCard = ({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: "primary" | "accent" | "muted";
}) => {
  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/10 text-accent",
    muted: "bg-muted text-muted-foreground",
  };

  return (
    <div className="edu-card p-4">
      <div className={`w-10 h-10 rounded-lg ${colorClasses[color]} flex items-center justify-center mb-3`}>
        {icon}
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
};

export default StudentDashboard;
