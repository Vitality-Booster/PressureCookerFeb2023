"use client";

import ProgressSVG from "./leaf";

export default function Progress() {
    return (
        <div className="bg-neutral relative w-24 h-full">
            <div className="absolute bg-neutral w-24 left-0 h-[0%]"></div>

            <ProgressSVG />
        </div>
    );
}
