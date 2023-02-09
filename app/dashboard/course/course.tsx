import Task from "./task";

export default function Course() {
    return (
        <div className="flex flex-col bg-neutral h-full">
            <div className="flex-1 p-2">
                <Task />
            </div>
            <div className="flex-1 p-2 border-collapse border-dashed border-t-1">
                <div className="text-2xl p-2 rounded-xl bg-base-300">
                    Research Material
                </div>

                <div></div>
            </div>
        </div>
    );
}
