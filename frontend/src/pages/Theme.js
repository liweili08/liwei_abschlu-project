import {Link, Outlet, useParams} from "react-router-dom";
import "../styles/Theme.css"
import {Breadcrumbs, Divider} from "@mui/material";

function handleClick(event) {
    event.preventDefault();
}

export default function Theme({themeList}) {
    //get themeName from url
    const {themeName} = useParams()
    const findName = themeList.find((mathTheme) => {
        return mathTheme.themeName === themeName;
    })
    if (!findName) {
        return (<h1>Thema nicht gefunden...</h1>)
    }

    return (
        <div className="themeName">
            <div className="theme-name"> {themeName} </div>
            <div className="box1">
                <div role="presentation" onClick={handleClick} className="navi-outer">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" to="grundlagen" className="navi-link">Grundlagen</Link>
                        <Link underline="hover" color="inherit" to="beispiele" className="navi-link">Beispiele</Link>
                        <Link underline="hover" color="inherit" to="aufgaben" className="navi-link">Aufgaben</Link>
                    </Breadcrumbs>
                </div>
            </div>
            <Divider color="lightgoldenrodyellow"/>
            <Outlet/>

            <footer className="home-link">
                <Link to="/">Home</Link>
            </footer>
        </div>
    )
}