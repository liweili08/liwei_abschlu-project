import {Link, Outlet} from "react-router-dom";


export default function Grundlagen(){
    return(
        <div className="grundlagen">
            {/*<h2> Grundlagen </h2> /!* kann weglassen wenn später mit Highlight *!/*/}
            <ul>
            {/* später dynamisch von DB mit map-Funktion zeigen  */}
            <li> <Link to="aussage">Aussage</Link>  </li>

            <li > Logische Verknüpfung </li>

            </ul>
            <Outlet/>
            <br/>




        </div>
    )
}