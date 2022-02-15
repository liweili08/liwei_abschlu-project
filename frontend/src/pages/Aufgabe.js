import {Link, Outlet, useParams} from "react-router-dom";
import TeX from "@matejmazur/react-katex";


export default function Aufgabe(props) {
    const {themeList}=props;
    const {themeName, subtopic} = useParams();
    const findTheme = themeList.find((mathTheme) => {
        return mathTheme.themeName === themeName;
    })
    const findHomework = findTheme.homeworkList.find((mathHomework) => {
        return mathHomework.subtopic === subtopic;
    })

    return (
        <div>
            <br/>
            {findHomework.topic};
            <br/>
            <Link to="ergebnis" className="btn btn-success btn-xs" role="button">wahr</Link> {" "}
            <Link to="ergebnis" className="btn btn-danger btn-xs" role="button" >falsch</Link>

            <Outlet/>
        </div>

        /*<div>
            <br/>
            <h6>Aufgabe 1: Gegeben seien die falsche Aussage <TeX>{"A"}</TeX> und die wahre Aussage <TeX>{"B"}</TeX>.
                 Beurteilen Sie den Wahrheitsgehalt der Aussage <TeX>{"A\\vee(\\neg B)"}</TeX>. </h6>
            <br/>
            <Link to="ergebnis" className="btn btn-success btn-xs" role="button">wahr</Link> {" "}
            <Link to="ergebnis" className="btn btn-danger btn-xs" role="button" >falsch</Link>
            <Outlet/>
            <br/>


        </div>*/
    )
}