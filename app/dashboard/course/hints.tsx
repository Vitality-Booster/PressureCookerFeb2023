import { selectedLesson } from "@/lib/store/lessons";
import { useRecoilValue } from "recoil";
import MonacoEditor from "@monaco-editor/react";
import * as Monaco from "monaco-editor";
import {useRef} from "react";
import Loader from "@components/loading";

interface HintData {
    index: number,
    text: string,
    code?: string,
}

function Hint({index, text, code}: HintData) {
    return (
        <div className="grid gap-2 py-3 h-full overflow-y-hidden">
                <h2 className="pl-5 text-xl font-semibold">
                    Hint {index}
                </h2>
            <p>
                {text}
            </p>
            {code && Code(code)}
        </div>
    )
}

function Code(code: string) {
    const editorRef = useRef<null | Monaco.editor.IStandaloneCodeEditor>(null);

    function handleEditorDidMount(
        _editor: Monaco.editor.IStandaloneCodeEditor
    ) {
        const editor = _editor;
        editorRef.current = editor;

        editor.updateOptions({
            fontSize: 16,
            automaticLayout: true,
            minimap: {
                enabled: false,
            },
            scrollBeyondLastLine: false,
            readOnly: true,
        });

        editor.getModel()?.setValue(code);
    }

    return (
            <MonacoEditor
                height="200px"
                onMount={handleEditorDidMount}
                theme="vs-dark"
                defaultLanguage="python"
                loading={<Loader />}

            />
    )
}

export default function HintsTab() {
    const lesson = useRecoilValue(selectedLesson);

    return (
        <div className="grid gap-5">
            {lesson.hints.map(function(object, i){
                    return <Hint index={object.index} text={object.text} code={object.code} key={i} />;
                })}
        </div>
    )
}
