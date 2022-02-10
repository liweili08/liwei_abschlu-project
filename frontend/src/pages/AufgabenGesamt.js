import {Link, Outlet} from "react-router-dom";
import TeX from "@matejmazur/react-katex";


export default function AufgabenGesamt(){
    return(
        <div >
            <ul> {/* wird später dynamisch mit map-Funktion listen   */}
                <li> <Link to="auf1">Aufgabe 1:</Link> Gegeben seien <TeX>{"A"}</TeX> <em>falsch</em> und <TeX>{"B"}</TeX> <em>wahr</em>,
                    die Aussage <TeX>{"A\\vee(\\neg B)"}</TeX> ist falsch.
                </li>

                {/*<li > <Link to="auf2">Aufgabe 2:</Link> Berechnen Sie den Grenzwert von ... </li>*/}

                {/*<li > <Link to="auf3">Aufgabe 3:</Link> Berechnen Sie den Grenzwert von ...</li>*/}
                <Outlet/>
            </ul>
            <br/>

        </div>
    )
}