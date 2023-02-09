import { atom, selector } from "recoil";
import { Lesson } from "../models/lesson";

export const showLessonSelector = atom({
    key: "showLessonSelector",
    default: false,
});

export const selectedLessonId = atom({
    key: "selectedLessonId",
    default: "",
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
                title: "",
                description: "",
                code: "",
                hints: [],
            };
        }

        const lesson: Lesson = (await response.json()).data;

        return lesson;
    },
});
