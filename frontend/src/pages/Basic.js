import {useParams} from "react-router-dom";
import TeX from "@matejmazur/react-katex";
import "../styles/Templet2.css"

export default function Basic(props) {
    const {themeList} = props;
    const {themeName, name} = useParams();
    const findTheme = themeList.find((mathTheme) => {
        return mathTheme.themeName === themeName;
    })
    const findBasic = findTheme.basicList.find((mathBasic) => {
        return mathBasic.name === name;
    })
    return (
        <div className="templet2">
            <TeX>{findBasic.content}</TeX>
        </div>
    )
}