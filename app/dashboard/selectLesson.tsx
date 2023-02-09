import { Courses, LessonDefinitions } from "@/lib/lessons";
import { selectedLessonId, showLessonSelector } from "@/lib/store/lessons";
import { useState } from "react";
import { useRecoilState } from "recoil";

interface LessonProps {
    id: string;
}

function Lesson({ id }: LessonProps) {
    const [locked, setLocked] = useState(false);
    const [completed, setCompleted] = useState(false);

    const [_lessonId, setLessonId] = useRecoilState(selectedLessonId);
    const [_showLessonSelector, setShowLessonSelector] =
        useRecoilState(showLessonSelector);

    const name = LessonDefinitions.get(id)?.title;

    return (
        <div className="p-2 flex gap-2 items-center">
            {locked && !completed && (
                <div className="w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-error"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        />
                    </svg>
                </div>
            )}
            {!locked && !completed && (
                <div className="w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        />
                    </svg>
                </div>
            )}
            {completed && (
                <div className="w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-success"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                    </svg>
                </div>
            )}

            <a
                onClick={() => {
                    setLessonId(id);
                    setShowLessonSelector(false);
                }}
                className="hover:underline cursor-pointer"
            >
                {name}
            </a>
        </div>
    );
}

export default function SelectLesson() {
    const [open, setOpen] = useRecoilState(showLessonSelector);

    return (
        <div
            className={`fixed w-96 p-2 rounded-md min-h-[16rem] bg-base-300 shadow-xl z-50 left-20 top-2
            ${!open && "hidden"}`}
        >
            {Array.from(Courses).map(([course, lessons]) => (
                <div key={course}>
                    <div className="divider">{course}</div>

                    <div className="grid grid-cols-2">
                        {lessons.map((lesson) => (
                            <Lesson id={lesson} key={lesson} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
