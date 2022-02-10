import {Link, Outlet} from "react-router-dom";
import TeX from "@matejmazur/react-katex";


export default function Aufgabe() {
    return (
        <div>
            <br/>
            {/*Aufgabenstellung von DB */}
            {/*nicht center !!!!!! */}
            <h6>Aufgabe 1: Gegeben seien <TeX>{"A"}</TeX> <em>falsch</em> und <TeX>{"B"}</TeX> <em>wahr</em>,
                die Aussage <TeX>{"A\\vee(\\neg B)"}</TeX> ist falsch. </h6>

            <p>Beurteilen Sie den Wahrheitswert der Aussage:</p>
            <br/>
            <Link to="ergebnis" className="btn btn-success btn-xs" role="button">wahr</Link> {" "}
            <Link to="ergebnis" className="btn btn-danger btn-xs" role="button" >falsch</Link>
            <Outlet/>
            <br/>


        </div>
    )
}