import TeX from "@matejmazur/react-katex";
import {useParams} from "react-router-dom";

export default function Ergebnis(props){
    const {themeList}=props;
    const {themeName, subtopic} = useParams();
    const findTheme = themeList.find((mathTheme) => {
        return mathTheme.themeName === themeName;
    })
    const findHomework = findTheme.homeworkList.find((mathHomework) => {
        return mathHomework.subtopic === subtopic;
    })
    return(
        <div >
            <br/>
            <h4 > Ergebnis </h4>
        <h2 className="ergebnis"> Ihre Antwort ist richtig! </h2><br/>
            {findHomework.solution};
        {/* Lösungsweg */}
        {/*    <p> Lösung: Die Aussage <TeX>{"A\\vee(\\neg B)"}</TeX> ist falsch, da <TeX>{"A"}</TeX> und <TeX>{"\\neg B"}</TeX> beide*/}
        {/*        falsch sind und die Disjunktion zweier falschen Aussagen falsch ist.</p>*/}
            <br/>
        </div>
    )
}