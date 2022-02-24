import TeX from "@matejmazur/react-katex";
import 'katex/dist/katex.min.css';
import {useParams} from "react-router-dom";
import "../styles/Templet2.css"

export default function Example({themeList}){
    const {themeName, subtopic} = useParams();
    const findTheme = themeList.find((mathTheme) => {
        return mathTheme.themeName === themeName;
    })
    const findExample = findTheme.exampleList.find((mathExample) => {
        return mathExample.subtopic === subtopic;
    })

    return(
        <div className="templet2">
            <TeX>{findExample.example}</TeX>
        </div>
    )
}