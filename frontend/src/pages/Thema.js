import {Link, Outlet, useParams} from "react-router-dom";
//import MyNavLink from "../components/navis/MyNavLink";

export default function Thema(props) {
    const {themeList}=props;
    //themeName von url bekommen
     const {themeName}=useParams()
    const findName= themeList.find((mathTheme)=>{
        return mathTheme.themeName=== themeName;
    })
    if(!findName){
        return (<h1 >Thema nicht gefunden...</h1>)
    }

    return (
        <div className="themaName">
            <h1 >{themeName}</h1>
            <ul className="nav nav-tabs">
                <li><Link to="grundlagen">Grundlagen</Link></li>
                <li><Link to="beispiele">Beispiele</Link></li>
                <li><Link to="aufgaben">Aufgaben</Link></li>
            </ul>
            <br/>
            <Outlet/>

            <div className="normal-link">
            <Link to="/">Home</Link>
            </div>

        </div>
    )

}