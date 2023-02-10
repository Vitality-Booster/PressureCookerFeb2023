import { selectedLesson } from "@/lib/store/lessons";
import { useRecoilValue } from "recoil";

export default function LessonTab() {
  const lesson = useRecoilValue(selectedLesson);
  return (
    <div>
      <div>
        <div className="text-sm opacity-70 py-1">
          {lesson.course}
        </div>
        <div className="text-xl font-bold pb-2 pl-5">
          {lesson.title}
        </div>

        <div className="mt-2">
          {lesson.description}
        </div>
      </div>
    </div>
  );
}
