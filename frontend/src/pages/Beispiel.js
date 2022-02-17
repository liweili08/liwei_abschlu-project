import TeX from "@matejmazur/react-katex";
import {useParams} from "react-router-dom";


export default function Beispiel(props){
    const {themeList} = props;
    const {themeName, subtopic} = useParams();
    const findTheme = themeList.find((mathTheme) => {
        return mathTheme.themeName === themeName;
    })
    const findExample = findTheme.exampleList.find((mathExample) => {
        return mathExample.subtopic === subtopic;
    })
    return(
        <div>
            <br/>
            <TeX>{findExample.example}</TeX>
        </div>
    )
}