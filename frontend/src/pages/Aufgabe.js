import {Link, Outlet, useParams} from "react-router-dom";
import TeX from "@matejmazur/react-katex";
import {useState} from "react";
import WrongAnswer from "./WrongAnswer";
import RightAnswer from "./RightAnswer";

export default function Aufgabe(props) {
    const {themeList} = props;
    const {themeName, subtopic} = useParams();
    const findTheme = themeList.find((mathTheme) => {
        return mathTheme.themeName === themeName;
    })
    const findHomework = findTheme.homeworkList.find((mathHomework) => {
        return mathHomework.subtopic === subtopic;
    })

    const [buttonClick, setButtonClick] = useState(undefined);

    function WahrButton() {
        setButtonClick(true);
    }

    function WrongButton() {
        setButtonClick(false);
    }

    let answer;
    if (buttonClick === undefined) {
        answer = <p>Versuchen Sie die Aufgabe selbst zu lösen!</p>
    } else if (findHomework.result === buttonClick) {
        answer = <RightAnswer/>;
    } else {
        answer = <WrongAnswer/>;
    }

    return (
        <div>
            <br/>
            <br/>
            <TeX>{findHomework.topic}</TeX>
            <br/>
            <br/>
            <button onClick={WahrButton}>wahr</button>
            <button onClick={WrongButton}>falsch</button>
            <br/>
            <br/>
            {answer}
            <Link to="ergebnis">Erklärung</Link>
            <Outlet/>
        </div>

    )
}