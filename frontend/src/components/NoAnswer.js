import {Link} from "react-router-dom";

export default function NoAnswer() {
    return (
        <div>
            <p>Versuchen Sie die Aufgabe selbst zu lösen!</p>
            <Link to="ergebnis">Erklärung</Link>
        </div>
    )
}
