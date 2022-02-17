import {useParams} from "react-router-dom";

export default function Grundlage(props) {
    const {themeList} = props;
    const {themeName, name} = useParams();
    const findTheme = themeList.find((mathTheme) => {
        return mathTheme.themeName === themeName;
    })
    const findBasic = findTheme.basicList.find((mathBasic) => {
        return mathBasic.name === name;
    })
    return (
        <div>
            <br/>
            {findBasic.content};
        </div>
    )
}