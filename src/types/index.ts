export interface Student {
  id: string;
  photo: string;
  fullName: string;
  phone: string;
  parentWhatsapp: string;
  class: string;
  age: number;
  board: 'CBSE' | 'ICSE' | 'Bihar Board' | 'Other';
  schoolId: string;
  schoolName: string;
  district: string;
  state: string;
  email: string;
  createdAt: Date;
}

export interface StudySession {
  id: string;
  studentId: string;
  startTime: Date;
  endTime?: Date;
  topic: string;
  subject: string;
  timeSpent: number; // in minutes
  understandingLevel: 'weak' | 'average' | 'good' | 'excellent';
  weakAreas: string[];
  strongAreas: string[];
  improvementScore: number;
  aiSummary: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  imageUrl?: string;
}

export interface School {
  id: string;
  name: string;
  schoolId: string;
}

export interface StudentDashboardData {
  student: Student;
  todayStudied: boolean;
  topicStudied: string;
  totalSessions: number;
  totalTimeSpent: number;
  improvementTrend: 'up' | 'down' | 'stable';
  recentSessions: StudySession[];
}
