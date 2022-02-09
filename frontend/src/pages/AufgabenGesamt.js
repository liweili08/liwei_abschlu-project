import {Link, Outlet} from "react-router-dom";


export default function AufgabenGesamt(){
    return(
        <div className="aufgaben">
            <h2> Aufgaben </h2>
            <ul> {/* wird später dynamisch mit map-Funktion listen   */}
                <li> <Link to="auf1">Aufgabe 1:</Link> Berechnen Sie den Grenzwert von ...</li>

                <li > <Link to="auf2">Aufgabe 2:</Link> Berechnen Sie den Grenzwert von ... </li>

                <li > <Link to="auf3">Aufgabe 3:</Link> Berechnen Sie den Grenzwert von ...</li>
                <li> ...</li>
                <Outlet/>
            </ul>

        </div>
    )
}