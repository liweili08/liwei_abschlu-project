import {Link, Outlet} from "react-router-dom";


export default function HomePage() {
    return (
        <div>
            <div className="page-header">
                <h1>XXX<small>(App Name)</small></h1>
                <hr/>
            </div>
            <h2> Wählen Sie ein Thema: </h2>
            <ul className="normal-link">
                <li><Link to="aussagenlogik"> Aussagenlogik </Link></li>
                <li><Link to="mengenlehre"> Mengenlehre </Link></li>
                <li><Link to="abbildungen" > Abbildungen </Link></li>
                <Outlet/>
            </ul>

        </div>
    )
}