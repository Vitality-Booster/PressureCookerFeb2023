"use client";

import { baselineExecutionTime, lastExecutionTime } from "@/lib/store/lessons";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import ProgressSVG from "./leaf";

export default function Progress() {
    let baseline = useRecoilValue(baselineExecutionTime);
    let lastTime = useRecoilValue(lastExecutionTime);

    // let baseline = 10;
    // let lastTime = 10;

    let [progress, setProgress] = useState((50 / lastTime) * baseline);

    useEffect(() => {
        let newProgress = (50 / lastTime) * baseline;

        if (newProgress > 98) {
            newProgress = 98;
        }

        if (newProgress < 5) {
            newProgress = 5;
        }

        setProgress(newProgress);
    }, [lastTime, baseline]);

    return (
        <div className="bg-neutral relative w-24 h-full">
            <div
                style={{
                    height: `${progress}%`,
                }}
                className={`overflow-hidden duration-700 transition-all absolute right-4 bottom-0`}
            >
                <ProgressSVG />
            </div>
        </div>
    );
}
