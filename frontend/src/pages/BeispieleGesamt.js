import {Link, Outlet} from "react-router-dom";
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';

import "./BeispieleGesamt.css"

export default function BeispieleGesamt() {
    return (
        <div>
            {/*<h2> Beispiele </h2> /!* kann weglassen wenn später mit Highlight *!/*/}
            <ul className="beispiele"> {/* wird später dynamisch mit map-Funktion listen   */}
                <li><Link to="bsp1">Beispiel 1:</Link> Beurteilen Sie den Wahrheitswert von <TeX>{"(\\neg A)\\wedge B,"}
                </TeX> wobei <TeX>{"A"}</TeX> <em>falsch</em> und <TeX>{"B"}</TeX> <em>wahr</em> ist.
                    {/*<ol>
                        <li></li><TeX>{"(\\neg A)\\wedge B,"}</TeX> wobei <em>A falsch</em> und <em>B wahr</em> ist.
                        <li></li><TeX>{"A\\vee(\\neg B),"}</TeX> wobei <em>A falsch</em> und <em>B wahr</em> ist.
                    </ol>*/}
                </li>
                <br/>

                {/*<li><Link to="bsp2">Beispiel 2:</Link> Ist "Es gibt nur endlich viele Primzahlen" eine Aussage?*/}
                    {/*<ol>*/}
                    {/*    <li>8</li>*/}
                    {/*    <li>Es gibt nur endlich viele Primzahlen.</li>*/}
                    {/*</ol>*/}
                {/*</li>*/}

                {/*<li><Link to="bsp3">Beispiel 3:</Link> Berechnen Sie den Grenzwert von ...</li>*/}

                <Outlet/>
            </ul>
            <br/>


        </div>
    )
}