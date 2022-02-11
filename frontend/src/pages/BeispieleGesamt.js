import {Link, Outlet} from "react-router-dom";
import 'katex/dist/katex.min.css';

import "./BeispieleGesamt.css"

export default function BeispieleGesamt() {
    return (
        <div>
            {/*<h2> Beispiele </h2> /!* kann weglassen wenn später mit Highlight *!/*/}
            <div className="normal-link">
            <ul className="beispiele"> {/* wird später dynamisch mit map-Funktion listen   */}
                <li><Link to="bsp1">Beispiel 1:</Link> Negation und Konjunktion.
                </li>
                <br/>

                {/*<li><Link to="bsp2">Beispiel 2:</Link> Ist "Es gibt nur endlich viele Primzahlen" eine Aussage?*/}
                    {/*<ol>*/}
                    {/*    <li>8</li>*/}
                    {/*    <li>Es gibt nur endlich viele Primzahlen.</li>*/}
                    {/*</ol>*/}
                {/*</li>*/}


                <Outlet/>
            </ul>
            </div>
            <br/>


        </div>
    )
}