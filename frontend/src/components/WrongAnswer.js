import {Link} from "react-router-dom";


export default function WrongAnswer() {
    return (
        <div>
            <h2> Ihre Antwort ist leider falsch. </h2>
            <Link to="ergebnis">Erklärung</Link>
        </div>

    )
}