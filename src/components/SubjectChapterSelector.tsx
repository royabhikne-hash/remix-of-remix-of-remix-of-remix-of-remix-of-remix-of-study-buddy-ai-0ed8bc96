import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Layers } from "lucide-react";
 import { getSubjects, getChapters, BoardType } from "@/data/syllabusData";

interface SubjectChapterSelectorProps {
  studentClass?: string;
  studentBoard?: BoardType;
  onSubjectChange: (subject: string) => void;
  onChapterChange: (chapter: string) => void;
  selectedSubject: string;
  selectedChapter: string;
}

const SubjectChapterSelector = ({
  studentClass = "10",
  studentBoard = "CBSE",
  onSubjectChange,
  onChapterChange,
  selectedSubject,
  selectedChapter,
}: SubjectChapterSelectorProps) => {
  const [subjects, setSubjects] = useState<string[]>([]);
  const [chapters, setChapters] = useState<string[]>([]);

  // Get subjects for the selected class and board
  useEffect(() => {
    const subjectList = getSubjects(studentBoard, studentClass);
    setSubjects(subjectList);
  }, [studentClass, studentBoard]);

  // Get chapters for the selected subject based on board
  useEffect(() => {
    if (selectedSubject) {
      const chapterList = getChapters(studentBoard, studentClass, selectedSubject);
      setChapters(chapterList);
    } else {
      setChapters([]);
    }
  }, [studentClass, studentBoard, selectedSubject]);

  return (
    <div className="flex flex-col sm:flex-row gap-2 w-full">
      {/* Subject Selector */}
      <div className="flex-1 min-w-0">
        <Select value={selectedSubject} onValueChange={onSubjectChange}>
          <SelectTrigger className="h-9 text-xs sm:text-sm">
            <BookOpen className="w-3 h-3 mr-1 flex-shrink-0" />
            <SelectValue placeholder="Subject चुनें" />
          </SelectTrigger>
          <SelectContent>
            {subjects.map((subject) => (
              <SelectItem key={subject} value={subject} className="text-xs sm:text-sm">
                {subject}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Chapter Selector */}
      <div className="flex-1 min-w-0">
        <Select 
          value={selectedChapter} 
          onValueChange={onChapterChange}
          disabled={!selectedSubject}
        >
          <SelectTrigger className="h-9 text-xs sm:text-sm">
            <Layers className="w-3 h-3 mr-1 flex-shrink-0" />
            <SelectValue placeholder={selectedSubject ? "Chapter चुनें" : "Pehle Subject चुनें"} />
          </SelectTrigger>
          <SelectContent>
            {chapters.map((chapter, index) => (
              <SelectItem key={index} value={chapter} className="text-xs sm:text-sm">
                {index + 1}. {chapter}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SubjectChapterSelector;
