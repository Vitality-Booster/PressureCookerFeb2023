import { selectedLesson } from "@/lib/store/lessons";
import { useRecoilValue } from "recoil";
import {ResearchData} from "@lib/models/research_data";

function ShowResearch(data: null | ResearchData) {
    return (
        <div className="pb-3">
            {data && (
                <div className="py-2">
                    <p className="pb-2">
                    {data.intro}
                    </p>
                    <ul className="pl-9 list-disc">
                        {data.listNames.map(function(object, i){
                            return <li> <a className="text-sky-600 visited:text-purple-700" href={data?.listLinks[i]}> {object} </a> </li>;
                        })}
                    </ul>
                </div>
        )}
        </div>
    )
}

export default function Research() {
    const lesson = useRecoilValue(selectedLesson);

    return (
        ShowResearch(lesson.researchMaterial)
    )
}