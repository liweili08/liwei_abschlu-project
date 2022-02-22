import {Link, Outlet, useParams} from "react-router-dom";
import 'katex/dist/katex.min.css';

import "./templet1.css"

export default function BeispieleGesamt(props) {
    const {themeList}=props;
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
                <br/>
                {findTheme.exampleList.map((mathExample) => {
                    return (
                        <li key={mathExample.id} className="templet1-li"><Link
                            to={mathExample.subtopic} className="templet1-item">Beispiel: {mathExample.subtopic}</Link>
                        </li>
                    )
                })}
                <Outlet/>
            </ul>
            </div>
            <br/>


        </div>
    )
}