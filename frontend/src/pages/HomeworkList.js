import {Link, Outlet, useParams} from "react-router-dom";
import "../styles/Templet1.css"

export default function HomeworkList({themeList}){
    const {themeName}=useParams();
    const findTheme= themeList.find((mathTheme)=>{
        return mathTheme.themeName=== themeName;
    })
    if(!findTheme){
        return (<h1>Thema nicht gefunden...</h1>)
    }

    return(
        <div className="normal-link">
            <ul className="templet1">
                {findTheme.homeworkList.map((mathHomework) => {
                    return (
                        <li key={mathHomework.id} className="templet1-li">
                            <Link to={mathHomework.subtopic} className="templet1-item">
                                Aufgabe: {mathHomework.subtopic}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <Outlet/>
        </div>
    )
}
