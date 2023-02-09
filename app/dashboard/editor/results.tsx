import { consoleOutput } from "@/lib/store/lessons";
import { useRecoilValue } from "recoil";

export default function Results() {
    const output = useRecoilValue(consoleOutput);

    return (
        <div className="bg-base-300">
            <div className="p-2 flex flex-col">
                <div className="p-2 bg-neutral rounded-xl">Console</div>
                <pre className="h-64 overflow-y-scroll">
                    <code>{output}</code>
                </pre>
            </div>
        </div>
    );
}
