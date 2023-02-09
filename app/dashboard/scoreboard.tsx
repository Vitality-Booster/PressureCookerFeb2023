import { showScoreboard } from "@/lib/store/scoreboard";
import { useRecoilState } from "recoil";

interface PersonScoreProps {
    name: string;
    place: number;
    score: number;
    topName: string;
    // topPlace: number;
    topScore: number;
    nextName: string;
    // nextPlace: number;
    nextScore: number;
}

interface ScoreProps {
    name: string;
    place: string;
    score: string;
    isUser: boolean;
}

// function Scoreboard({ name, place, score, topName, topScore, nextName, nextScore }: PersonScoreProps) {
//     // const [_lessonId, setLessonId] = useRecoilState(selectedLessonId);
//     // const [_showScoreboard, setShowScoreboard] =
//     //     useRecoilState(showScoreboard);
//
//     return (
//         <div className="p-2 flex gap-2 items-center">
//                 <div className="w-8">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         className="w-6 h-6"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
//                         />
//                         {place}
//                         {name}:
//                         {score}
//                     </svg>
//
//                 </div>
//                 <div className="w-8">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         className="w-6 h-6"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
//                         />
//                     </svg>
//                 </div>
//                 <div className="w-8">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         className="w-6 h-6"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
//                         />
//                     </svg>
//                 </div>
//         </div>
//     );
// }

function Score({name, place, score, isUser}: ScoreProps) {
    return (
    // <div className={`flex flex-wrap content-between grid-cols-2 gap-1`}>
    //     <div >
    //     <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         strokeWidth={1.5}
    //         stroke="currentColor"
    //         className="w-6 h-6"
    //     >
    //         <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    //         />
    //     </svg>
    // </div>
    //     <div>
    //         {name}, place: {place}, score: {score}
    //     </div>
    //     </div>
    <tr className={`${isUser && "active"}`}>
        <th>{place}</th>
        <td>{name}</td>
        <td>{score}</td>
    </tr>
    )
}

export default function ScoreboardClicked() {
    const [open, setOpen] = useRecoilState(showScoreboard);
    return (
    // <div
    //     className={`fixed w-96 p-2 rounded-md min-h-[16rem] bg-base-300 shadow-xl z-50 left-20 top-2
    //     ${!open && "hidden"}`}
    // >
    //     <div className="grid grid-cols-1 justify-items-center gap-3">
    //         <Score name={"Best_User"} place={1} score={100000} />
    //         <div>                   ... </div>
    //         <Score name={"Better_User"} place={50} score={5000} />
    //         <Score name={"You_User"} place={51} score={4657} />
    //         <Score name={"Worse_User"} place={52} score={4000} />
    //         <div>                   ... </div>
    //         <Score name={"Worst_User"} place={50} score={5000} />
    //
    //
    //         {/*<Scoreboard name={"You"} place={51} score={1078} topName={"Sigma"} topScore={4444} nextName={"RivalG"} nextScore={1101} />*/}
    //     </div>
    // </div>
        <div
                className={`fixed w-96 p-2 rounded-md min-h-[16rem] bg-base-300 shadow-xl z-50 left-20 top-2
                ${!open && "hidden"}`}
            >
    <div className="overflow-x-auto">
        <table className="table w-full">
            <thead>
                {/*<th></th>*/}
                <Score name={"Name"} place={"Place"} score={"Score"} isUser={false} />
            </thead>
            <tbody>
                <Score name={"Best_User"} place={"1"} score={"100000"} isUser={false} />
                <Score name={"..."} place={"..."} score={"..."} isUser={false} />
                <Score name={"Better_User"} place={"50"} score={"5000"} isUser={false} />
                <Score name={"You_User"} place={"51"} score={"4657"} isUser={true} />
                <Score name={"Worse_User"} place={"52"} score={"4000"} isUser={false} />
                <Score name={"..."} place={"..."} score={"..."} isUser={false} />
                <Score name={"Worst_User"} place={"100"} score={"300"} isUser={false} />
            </tbody>

        </table>
    </div>
        </div>
    )
}
