import {Link, Outlet} from "react-router-dom";


export default function Grundlagen(){
    return(
        <div className="grundlagen">
            {/*<h2> Grundlagen </h2> /!* kann weglassen wenn später mit Highlight *!/*/}
            <ul className="normal-link">
            {/* später dynamisch von DB mit map-Funktion zeigen  */}
            {/*<li> <Link to="aussage" className="link">Aussage</Link>  </li>*/}

            {/*<li > Logische Verknüpfung </li>*/}
                <li><Link to="aussage" className="link">Aussage</Link></li>

            </ul>
            <Outlet/>
            <br/>
        </div>
    )
}