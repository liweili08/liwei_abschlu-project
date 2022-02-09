import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Thema from "./Thema";


export default function HomePage(){
    return(
        <div className="homePage">
            <h1> Herzlich Willkommen zu XXXXXXX </h1>
            <h4 className="info"> ein bisschen erklären, wie man Mathe durch das App lernen kann </h4>
            <h2> Wählen Sie ein Thema: </h2>
            <ul className="themenListe">
                <li><Link to="folgen">Folgen </Link> </li>
                <li><Link to="reihen"> Reinen</Link> </li>
                <li>Folgen </li>
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