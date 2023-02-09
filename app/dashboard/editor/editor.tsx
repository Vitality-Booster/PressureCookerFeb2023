"use client";

import Loader from "@components/loading";
import MonacoEditor from "@monaco-editor/react";
import * as Monaco from "monaco-editor";
import Results from "./results";

export default function Editor() {
    function handleEditorDidMount(editor: Monaco.editor.IStandaloneCodeEditor) {
        editor.updateOptions({
            fontSize: 16,
            automaticLayout: true,
            minimap: {
                enabled: false,
            },
            scrollBeyondLastLine: false,
        });
    }

    return (
        <div className="flex flex-col h-full overflow-y-hidden">
            <div className="bg-base-300 p-2 flex flex-col">
                <div className="p-2 bg-neutral rounded-xl">Code Editor</div>
            </div>

            <div className="flex-1">
                <MonacoEditor
                    onMount={handleEditorDidMount}
                    theme="vs-dark"
                    defaultLanguage="python"
                    loading={<Loader />}
                />
            </div>

            <div>
                <Results />
            </div>

            <div className="flex justify-between items-center p-2">
                <div>
                    <button className="btn btn-secondary gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
                            />
                        </svg>
                        Reset Code
                    </button>
                </div>
                <div>
                    <button className="btn btn-success gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                            />
                        </svg>
                        Execute
                    </button>
                </div>
            </div>
        </div>
    );
}
