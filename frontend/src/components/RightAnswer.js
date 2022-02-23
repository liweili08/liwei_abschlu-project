import {Link} from "react-router-dom";

export default function RightAnswer() {
    return (
        <div>
            <h2> Ihre Antwort ist richtig! </h2>
            <Link to="ergebnis">Erklärung</Link>
        </div>
    )
}
