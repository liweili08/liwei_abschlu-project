import {Link, Outlet, useParams} from "react-router-dom";
import 'katex/dist/katex.min.css';
import "../styles/Templet1.css"

export default function ExampleList({themeList}) {
    const {themeName}=useParams();
    const findTheme= themeList.find((mathTheme)=>{
        return mathTheme.themeName=== themeName;
    })
    if(!findTheme){
        return (<h1 >Thema nicht gefunden...</h1>)
    }

    return (
        <div>
            <div className="normal-link">
            <ul className="templet1">
                {findTheme.exampleList.map((mathExample) => {
                    return (
                        <li key={mathExample.id} className="templet1-li">
                            <Link to={mathExample.subtopic} className="templet1-item">
                                Beispiel: {mathExample.subtopic}
                            </Link>
                        </li>
                    )
                })}
            </ul>
                <Outlet/>
            </div>
        </div>
    )
}