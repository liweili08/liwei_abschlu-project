import TeX from "@matejmazur/react-katex";
import {useParams} from "react-router-dom";

export default function Solution(props){
    const {themeList}=props;
    const {themeName, subtopic} = useParams();
    const findTheme = themeList.find((mathTheme) => {
        return mathTheme.themeName === themeName;
    })
    const findHomework = findTheme.homeworkList.find((mathHomework) => {
        return mathHomework.subtopic === subtopic;
    })
    return(
        <div className="templet2">
            <TeX>{findHomework.solution}</TeX>
        </div>
    )
}

