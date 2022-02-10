import TeX from "@matejmazur/react-katex";

export default function Ergebnis(){
    return(
        <div >
            <br/>
            <h4 > Ergebnis </h4>
        <h2 className="ergebnis"> Ihre Antwort ist richtig! </h2><br/>
        {/* Lösungsweg */}
            <h6> Lösung: </h6>
            <p>Die Aussage <TeX>{"A\\vee(\\neg B)"}</TeX> ist falsch, da <TeX>{"A"}</TeX> und <TeX>{"\\neg B"}</TeX> beide
                falsch sind und die Disjunktion zweier falschen Aussagen falsch ist.</p>
            <br/>
        </div>
    )
}