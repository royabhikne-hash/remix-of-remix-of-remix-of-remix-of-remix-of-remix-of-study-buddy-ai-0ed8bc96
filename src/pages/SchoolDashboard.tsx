import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Users,
  TrendingUp,
  TrendingDown,
  Minus,
  LogOut,
  Search,
  Filter,
  BookOpen,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";

interface StudentData {
  id: string;
  photo: string;
  name: string;
  class: string;
  todayStudied: boolean;
  topicStudied: string;
  improvementTrend: "up" | "down" | "stable";
  totalSessions: number;
}

const SchoolDashboard = () => {
  const navigate = useNavigate();
  const [schoolName, setSchoolName] = useState("School");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState("all");

  // Mock student data
  const [students] = useState<StudentData[]>([
    {
      id: "1",
      photo: "",
      name: "Rahul Kumar",
      class: "Class 10",
      todayStudied: true,
      topicStudied: "Physics - Motion",
      improvementTrend: "up",
      totalSessions: 24,
    },
    {
      id: "2",
      photo: "",
      name: "Priya Singh",
      class: "Class 10",
      todayStudied: true,
      topicStudied: "Chemistry - Atoms",
      improvementTrend: "up",
      totalSessions: 32,
    },
    {
      id: "3",
      photo: "",
      name: "Amit Sharma",
      class: "Class 9",
      todayStudied: false,
      topicStudied: "-",
      improvementTrend: "stable",
      totalSessions: 18,
    },
    {
      id: "4",
      photo: "",
      name: "Sneha Patel",
      class: "Class 10",
      todayStudied: true,
      topicStudied: "Maths - Algebra",
      improvementTrend: "down",
      totalSessions: 15,
    },
    {
      id: "5",
      photo: "",
      name: "Vikram Yadav",
      class: "Class 9",
      todayStudied: false,
      topicStudied: "-",
      improvementTrend: "stable",
      totalSessions: 20,
    },
    {
      id: "6",
      photo: "",
      name: "Anita Kumari",
      class: "Class 11",
      todayStudied: true,
      topicStudied: "Biology - Cell",
      improvementTrend: "up",
      totalSessions: 28,
    },
  ]);

  useEffect(() => {
    const name = localStorage.getItem("schoolName");
    if (name) setSchoolName(name);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesClass = selectedClass === "all" || student.class === selectedClass;
    return matchesSearch && matchesClass;
  });

  const uniqueClasses = [...new Set(students.map((s) => s.class))];

  const stats = {
    totalStudents: students.length,
    studiedToday: students.filter((s) => s.todayStudied).length,
    improving: students.filter((s) => s.improvementTrend === "up").length,
  };

  const getTrendIcon = (trend: "up" | "down" | "stable") => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-accent" />;
      case "down":
        return <TrendingDown className="w-4 h-4 text-destructive" />;
      default:
        return <Minus className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getTrendLabel = (trend: "up" | "down" | "stable") => {
    switch (trend) {
      case "up":
        return <span className="text-accent font-medium">Improving ↑</span>;
      case "down":
        return <span className="text-destructive font-medium">Declining ↓</span>;
      default:
        return <span className="text-muted-foreground font-medium">Stable →</span>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <Building2 className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <span className="font-bold text-lg">{schoolName}</span>
                <p className="text-xs text-muted-foreground">School Dashboard</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="edu-card p-4 text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <p className="text-2xl font-bold">{stats.totalStudents}</p>
            <p className="text-sm text-muted-foreground">Total Students</p>
          </div>
          <div className="edu-card p-4 text-center">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-2">
              <BookOpen className="w-6 h-6 text-accent" />
            </div>
            <p className="text-2xl font-bold">{stats.studiedToday}</p>
            <p className="text-sm text-muted-foreground">Studied Today</p>
          </div>
          <div className="edu-card p-4 text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <p className="text-2xl font-bold">{stats.improving}</p>
            <p className="text-sm text-muted-foreground">Improving</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search students..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            className="flex h-12 rounded-xl border border-input bg-background px-4 py-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="all">All Classes</option>
            {uniqueClasses.map((cls) => (
              <option key={cls} value={cls}>
                {cls}
              </option>
            ))}
          </select>
        </div>

        {/* Student List */}
        <div className="edu-card overflow-hidden">
          <div className="p-4 border-b border-border bg-secondary/30">
            <h2 className="font-bold">Student Activity</h2>
          </div>
          
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-semibold">Student</th>
                  <th className="text-left p-4 font-semibold">Class</th>
                  <th className="text-left p-4 font-semibold">Today</th>
                  <th className="text-left p-4 font-semibold">Topic Studied</th>
                  <th className="text-left p-4 font-semibold">Trend</th>
                  <th className="text-left p-4 font-semibold">Sessions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="border-t border-border hover:bg-muted/30">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-lg font-bold">
                          {student.name.charAt(0)}
                        </div>
                        <span className="font-medium">{student.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-muted-foreground">{student.class}</td>
                    <td className="p-4">
                      {student.todayStudied ? (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-accent/10 text-accent text-sm">
                          <CheckCircle className="w-4 h-4" /> Yes
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                          <XCircle className="w-4 h-4" /> No
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-muted-foreground">{student.topicStudied}</td>
                    <td className="p-4">{getTrendLabel(student.improvementTrend)}</td>
                    <td className="p-4 font-medium">{student.totalSessions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden divide-y divide-border">
            {filteredStudents.map((student) => (
              <div key={student.id} className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-lg font-bold">
                      {student.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{student.name}</p>
                      <p className="text-sm text-muted-foreground">{student.class}</p>
                    </div>
                  </div>
                  {student.todayStudied ? (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-accent/10 text-accent text-xs">
                      <CheckCircle className="w-3 h-3" /> Studied
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs">
                      <XCircle className="w-3 h-3" /> Not Yet
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Topic: </span>
                    {student.topicStudied}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Trend: </span>
                    {getTrendLabel(student.improvementTrend)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SchoolDashboard;
