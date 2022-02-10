import TeX from "@matejmazur/react-katex";


export default function Beispiel(){
    return(
        <div>
            {/*Aufgabenstellung von DB */}
            {/*nicht center !!!!!! */}
            {/* später dynamisch: die nummer, Bsp und Lsg aus DB! */}
            <br/>
             <h6>   Beispiel 1: Beurteilen Sie den Wahrheitswert von <TeX>{"(\\neg A)\\wedge B,"}
             </TeX> wobei <TeX>{"A"}</TeX> <em>falsch</em> und <TeX>{"B"}</TeX> <em>wahr</em> ist. </h6>
            {/*Lösung: DB */}
            {/*nicht center !!!!!! nicht in app.css sondern einzeln */}
            <h6 className="lsg"> Lösung: </h6>
            <p>Die Aussage <TeX>{"(\\neg A)\\wedge B"}</TeX> ist wahr, da <TeX>{"\\neg A"}</TeX> und <TeX>{"B"}</TeX> beide
                wahr sind und die Konjunktion zweier wahren Aussagen wahr ist.</p>



        </div>
    )
}