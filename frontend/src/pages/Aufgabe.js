import {Link, Outlet} from "react-router-dom";


export default function Aufgabe() {
    return (
        <div>
            <br/>
            {/*Aufgabenstellung von DB */}
            {/*nicht center !!!!!! */}
            <h6> Aufgabe i: Gegeben sei ... </h6>

            <p>Beurteilen Sie den Wahrheitswert der Aussage:</p>
            <br/>
            <Link to="ergebnis" className="btn btn-success btn-xs" role="button">wahr</Link> {" "}
            <Link to="ergebnis" className="btn btn-danger btn-xs" role="button" >falsch</Link>
            <Outlet/>
            <br/>


        </div>
    )
}