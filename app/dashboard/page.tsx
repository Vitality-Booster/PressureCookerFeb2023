"use client";

import { RecoilRoot } from "recoil";
import Course from "./course/course";
import Editor from "./editor/editor";
import Progress from "./editor/progress";
import Sidebar from "./sidebar";

export default function Dashboard() {
    return (
        <RecoilRoot>
            <div data-theme="business" className="flex h-screen">
                <div>
                    <Sidebar />
                </div>
                <div className="flex-1">
                    <Course />
                </div>
                <div className="h-full flex-1">
                    <Editor />
                </div>
                <div className="h-full">
                    <Progress />
                </div>
            </div>
        </RecoilRoot>
    );
}
