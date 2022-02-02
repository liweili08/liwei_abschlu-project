
export default function Ergebnis(){
    return(
        <div className="ergebnis">
            <h1 className="folgen"> Ergebnis </h1>
        <h2> Ihre Antwort ist richtig/falsch </h2><br/>
            {/* Nochmal die Aufgabenstellung */}
            <h2>   Beispiel i : Berechnen Sie den Grenzwert von ... </h2>
        {/* Lösungsweg */}
            <h3> Lösung: </h3>
            <p> XXXXXXX YYYYYYYY</p>
            <br/>
            <button>Home</button> <button>Menü</button> <button>zurück</button>
        </div>
    )
}