import {Link, Outlet} from "react-router-dom";
import TeX from "@matejmazur/react-katex";


export default function Aufgabe() {
    return (
        <div>
            <br/>
            {/*Aufgabenstellung von DB */}
            {/*nicht center !!!!!! */}
            <h6>Aufgabe 1: Gegeben seien die falsche Aussage <TeX>{"A"}</TeX> und die wahre Aussage <TeX>{"B"}</TeX>.
                 Beurteilen Sie den Wahrheitsgehalt der Aussage <TeX>{"A\\vee(\\neg B)"}</TeX>. </h6>
            <br/>
            <Link to="ergebnis" className="btn btn-success btn-xs" role="button">wahr</Link> {" "}
            <Link to="ergebnis" className="btn btn-danger btn-xs" role="button" >falsch</Link>
            <Outlet/>
            <br/>


        </div>
    )
}