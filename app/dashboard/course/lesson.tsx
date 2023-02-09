import { selectedLesson } from "@/lib/store/lessons";
import { useRecoilValue } from "recoil";

export default function LessonTab() {
    const lesson = useRecoilValue(selectedLesson);
    return (
        <div>
            <div>
                <div className="text-sm opacity-70">Course Name</div>
                <div className="text-xl font-bold">{lesson.title}</div>
            </div>
        </div>
    );
}
