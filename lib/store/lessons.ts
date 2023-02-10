import { atom, selector } from "recoil";
import { Lesson } from "../models/lesson";

export const consoleOutput = atom({
    key: "consoleOutput",
    default: "",
});

export const baselineExecutionTime = atom({
    key: "baselineExecutionTime",
    default: 10,
});

export const lastExecutionTime = atom({
    key: "lastExecutionTime",
    default: 20,
});

export const showLessonSelector = atom({
    key: "showLessonSelector",
    default: false,
});

export const selectedLessonId = atom({
    key: "selectedLessonId",
    default: "python-1",
});

export const selectedLesson = selector({
    key: "selectedLesson",
    get: async ({ get }) => {
        let lessonId = get(selectedLessonId);

        if (lessonId === "") {
            lessonId = "3";
        }

        const response = await fetch(`/api/lessons/${lessonId}`);

        if (!response.ok) {
            return {
                id: "",
                course: "",
                title: "",
                description: "",
                code: "",
                hints: [],
                researchMaterial: null
            };
        }

        const lesson: Lesson = (await response.json()).data;

        return lesson;
    },
});
