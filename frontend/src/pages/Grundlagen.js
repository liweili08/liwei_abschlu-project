import {Link, Outlet, useParams} from "react-router-dom";
import "./templet1.css"

export default function Grundlagen(props) {
    const {themeList} = props;
    const {themeName}=useParams();
    const findTheme= themeList.find((mathTheme)=>{
        return mathTheme.themeName=== themeName;
    })
    if(!findTheme){
        return (<h1 >Thema nicht gefunden...</h1>)
    }
    return (
        <div className="normal-link">
            <ul className="templet1">
                {findTheme.basicList.map((mathBasic) => {
                    return (
                        <li key={mathBasic.id} className="templet1-li"><Link
                            to={mathBasic.name} className="templet1-item"> {mathBasic.name}</Link>
                        </li>
                    )
                })}

            </ul>
            <Outlet/>
            <br/>
        </div>
    )
}