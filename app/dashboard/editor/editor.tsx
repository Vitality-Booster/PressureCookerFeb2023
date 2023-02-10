"use client";

import {
    baselineExecutionTime,
    consoleOutput,
    lastExecutionTime,
    selectedLesson,
} from "@/lib/store/lessons";
import Loader from "@components/loading";
import MonacoEditor from "@monaco-editor/react";
import * as Monaco from "monaco-editor";
import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Results from "./results";

export const debounce = <F extends (...args: any[]) => any>(
    func: F,
    waitFor: number
) => {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    const debounced = (...args: Parameters<F>) => {
        if (timeout !== null) {
            clearTimeout(timeout);
            timeout = null;
        }
        timeout = setTimeout(() => func(...args), waitFor);
    };

    return debounced as (...args: Parameters<F>) => ReturnType<F>;
};

export default function Editor() {
    const editorRef = useRef<null | Monaco.editor.IStandaloneCodeEditor>(null);

    const lesson = useRecoilValue(selectedLesson);
    const [executing, setExecuting] = useState(false);
    const [_a, setConsoleOutput] = useRecoilState(consoleOutput);
    const [firstExecution, setFirstExecution] = useState(true);
    const [lastExecution, setLastExecution] = useRecoilState(lastExecutionTime);
    const [baseLine, setBaseline] = useRecoilState(baselineExecutionTime);

    useEffect(() => {
        if (!editorRef.current) return;

        setFirstExecution(true);
        editorRef.current.getModel()?.setValue(lesson.code);
        runCode();
    }, [lesson]);

    function resetCode() {
        if (!editorRef.current) return;

        setFirstExecution(true);
        editorRef.current.getModel()?.setValue(lesson.code);
        runCode();
    }

    const runCodeInternal = debounce(async (code: string) => {
        const result = await fetch("/api/execute", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                code,
            }),
        }).catch((err) => {
            console.error(err);
            setExecuting(false);
        });

        let executionResult = result?.ok ? await result.json() : null;

        setExecuting(false);

        if (!executionResult) return;

        const parsedResult: {
            ok: boolean;
            execution_time?: number;
        } = executionResult;

        if (!parsedResult.ok) return;

        if (parsedResult.execution_time) {
            let compared = "| first execution";

            if (!firstExecution) {
                let faster = parsedResult.execution_time < lastExecution;

                // Set compared to how much faster/slower the execution time is
                // than the baseline in times, like 2x faster or 0.5x slower
                compared = `| ${(
                    baseLine / parsedResult.execution_time
                ).toFixed(2)}x ${faster ? "more energy used" : "less energy used"} than baseline`;

                setConsoleOutput((prev) => {
                    return `${prev}\nPower consumption: ${parsedResult.execution_time} Joules ${compared}`;
                });
            } else {
                setBaseline(parsedResult.execution_time);
                setFirstExecution(false);
                setConsoleOutput(
                    `Power consumption: ${parsedResult.execution_time} Joules ${compared}`
                );
            }

            setLastExecution(parsedResult.execution_time);
        }
    }, 500);

    async function runCode() {
        if (!editorRef.current) return;

        const code = editorRef.current.getModel()?.getValue();

        setExecuting(true);
        await runCodeInternal(code ?? "");
    }

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
        });

        editor.getModel()?.setValue(lesson.code);
        runCode();
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
                    <button
                        disabled={executing}
                        onClick={resetCode}
                        className="btn btn-secondary gap-2"
                    >
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
                    <button
                        disabled={executing}
                        onClick={runCode}
                        className="btn btn-success gap-2"
                    >
                        {executing && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 animate-spin"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                                />
                            </svg>
                        )}
                        {!executing && (
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
                        )}
                        Execute
                    </button>
                </div>
            </div>
        </div>
    );
}
