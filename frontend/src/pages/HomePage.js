import {BrowserRouter, Link, Route, Routes,Outlet} from "react-router-dom";
import Thema from "./Thema";


export default function HomePage(){
    return(
        <div className="homePage">
            <h1> XXX(App Name) </h1>
            <h2> Wählen Sie ein Thema: </h2>
            <ul className="themenListe">
                <li><Link to="folgen">Folgen </Link> </li>
                <li><Link to="reihen"> Reinen</Link> </li>
                <li>Folgen </li>
                <Outlet/>
            </ul>

           {/* <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="themen" element={<Thema/>}/>
                </Routes>
            </BrowserRouter>*/}

        </div>
    )
}