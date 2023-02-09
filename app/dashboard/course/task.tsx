"use client";

import { selectedLesson } from "@/lib/store/lessons";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import HintsTab from "./hints";
import LessonTab from "./lesson";

export default function Task() {
    let [activeTab, setActiveTab] = useState(0);
    const lesson = useRecoilValue(selectedLesson);

    return (
        <div>
            <div className="tabs">
                <a
                    className={`tab tab-bordered ${
                        activeTab == 0 && "tab-active"
                    }`}
                    onClick={() => {
                        setActiveTab(0);
                    }}
                >
                    Lesson
                </a>
                <a
                    className={`tab tab-bordered ${
                        activeTab == 1 && "tab-active"
                    }`}
                    onClick={() => {
                        setActiveTab(1);
                    }}
                >
                    Hints
                </a>
            </div>

            <div className="p-2">
                {activeTab == 0 && <LessonTab />}
                {activeTab == 1 && <HintsTab />}
            </div>
        </div>
    );
}
