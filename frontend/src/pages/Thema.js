import {Link, Outlet} from "react-router-dom";
import MyNavLink from "../components/navis/MyNavLink";

export default function Thema() {
    // const navigate = useNavigate()
    // const goHome = () => {
    //     navigate("/")
    // }
    // const {themaName}=useParams()
    return (
        <div className="themaName">
            <h1 >Aussagenlogik</h1>
            <ul className="nav nav-tabs">
                <li><MyNavLink to="grundlagen">Grundlagen</MyNavLink></li>
                <li><MyNavLink to="beispiele">Beispiele</MyNavLink></li>
                <li><MyNavLink to="aufgaben">Aufgaben</MyNavLink></li>
            </ul>
            <br/>
            <Outlet/>
            {/*<button onClick={goHome}>Home</button>*/}
            <div className="text-center">
            <div className="normal-link">
            <Link to="/">Home</Link>
            </div>
            </div>
        </div>
    )

}