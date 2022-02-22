import TeX from "@matejmazur/react-katex";
import {useParams} from "react-router-dom";
import "../styles/Templet2.css"

export default function Example(props){
    const {themeList} = props;
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