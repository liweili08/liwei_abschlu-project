import {Link, Outlet, useParams} from "react-router-dom";



export default function AufgabenGesamt(props){
    const {themeList}=props;
    const {themeName}=useParams();
    const findTheme= themeList.find((mathTheme)=>{
        return mathTheme.themeName=== themeName;
    })
    if(!findTheme){
        return (<h1 >Thema nicht gefunden...</h1>)
    }
    return(
        <div className="normal-link">
            <ul>
                {findTheme.homeworkList.map((mathHomework) => {
                    return (
                        <li key={mathHomework.id}><Link
                            to={mathHomework.subtopic}>Aufgabe: {mathHomework.subtopic}</Link>
                        </li>
                    )
                })}
            <Outlet/>
            </ul>
            <br/>

        </div>
    )
}