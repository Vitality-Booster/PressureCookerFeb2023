export default function Results() {
    let code = "";

    for (let i = 0; i < 100; i++) {
        code += "line " + i + "\n";
    }

    return (
        <div className="bg-base-300">
            <div className="p-2 flex flex-col">
                <div className="p-2 bg-neutral rounded-xl">Console</div>
                <pre className="h-64 overflow-y-scroll">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    );
}
