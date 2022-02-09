import {Link, Outlet, useNavigate, useParams} from "react-router-dom";

export default function Thema(){
    const navigate = useNavigate()
    const goHome = () => {
        navigate("/")
    }
    // const {themaName}=useParams()
    return(
        <div className="themaName">
            <h1>Folgen</h1>
            {/*<h1> {themaName} </h1>*/}
{/*            <h2 className="themaText"> Hier finden die theoritischen Grundlagen: </h2>
            <button className="grundlagen"> Grundlagen </button>
            <h2 className="themaText"> Hier finden die Beispiele: </h2>
            <button className="grundlagen"> Beispiele </button>
            <h2 className="themaText"> Versuchen Sie, die Aufgaben zu lösen: </h2>
            <button className="grundlagen"> Aufgaben </button>
            <br/>*/}
            <Link to="grundlagen">Grundlagen</Link> |{" "}
            <Link to="beispiele">Beispiele</Link> |{" "}
            <Link to="aufgaben">Aufgaben</Link>
            <br/>
            <hr/>
            <Outlet/>
            <button onClick={goHome}>Home</button>

        </div>
    )

}