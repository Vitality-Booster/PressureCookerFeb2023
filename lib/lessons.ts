import { Lesson } from "./models/lesson";

type LessonID = string;

export const Courses: Map<string, LessonID[]> = new Map([
    ["Python Loops Course", ["python-1", "python-2"]],
]);

export const LessonDefinitions: Map<LessonID, Lesson> = new Map([
    [
        "python-1",
        {
            id: "python-1",
            title: "Python Loops",
            description: "Learn about loops in Python",
            code: "from time import sleep\nfor i in range(10):\n  print(i)\nsleep(1)",
            locked: true,
            completed: false,
            hints: [],
        },
    ],
    [
        "python-2",
        {
            id: "python-2",
            title: "Python Second",
            description: "Learn about a second thing!",
            code: "print('hello world')",
            locked: true,
            completed: false,
            hints: [],
        },
    ],
]);
