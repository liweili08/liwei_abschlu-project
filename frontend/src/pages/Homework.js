import {Outlet, useParams} from "react-router-dom";
import TeX from "@matejmazur/react-katex";
import {useEffect, useState} from "react";
import WrongAnswer from "../components/WrongAnswer";
import RightAnswer from "../components/RightAnswer";
import NoAnswer from "../components/NoAnswer";
import "../styles/Aufgabe.css";

function AufgabeContent(props) {
    const {findHomework} = props;
    const [buttonClick, setButtonClick] = useState(undefined);
    //notwendig: React erkennt nicht dass buttonClick zurückgesetzt werden muss.
    useEffect(() => setButtonClick(undefined), [findHomework]);

    function WahrButton() {
        setButtonClick(true);
    }

    function WrongButton() {
        setButtonClick(false);
    }

    let answer;
    if (buttonClick === undefined) {
        answer = <NoAnswer/>
    } else if (findHomework.result === buttonClick) {
        answer = <RightAnswer/>
    } else {
        answer = <WrongAnswer/>
    }

    return (
        <div className="aufgabecontent">
            <div className="topic"><TeX>{findHomework.topic}</TeX></div>
            <button onClick={WahrButton}>wahr</button>
            <button onClick={WrongButton}>falsch</button>
            {answer}
            <Outlet/>
        </div>)
}

export default function Homework(props) {
    const {themeList} = props;
    const {themeName, subtopic} = useParams();
    const findTheme = themeList.find((mathTheme) => {
        return mathTheme.themeName === themeName;
    })
    const findHomework = findTheme.homeworkList.find((mathHomework) => {
        return mathHomework.subtopic === subtopic;
    })

    return (
        <div>
            <AufgabeContent findHomework={findHomework}/>
        </div>

    )
}