import {BrowserRouter, Link, Route, Routes,Outlet} from "react-router-dom";
import Thema from "./Thema";


export default function HomePage(){
    return(
        <div className="homePage">
            <h1> XXX(App Name) </h1>
            <h2> Wählen Sie ein Thema: </h2>
            <ul className="themenListe">
                <li><Link to="aussagenlogik"> Aussagenlogik </Link> </li>
                <li><Link to="mengenlehre"> Mengenlehre </Link> </li>
                <li><Link to="abbildungen"> Abbildungen </Link> </li>
                <Outlet/>
            </ul>

        </div>
    )
}