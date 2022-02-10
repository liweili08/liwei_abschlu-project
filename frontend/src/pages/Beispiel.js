import TeX from "@matejmazur/react-katex";


export default function Beispiel(){
    return(
        <div>
            {/*Aufgabenstellung von DB */}
            {/*nicht center !!!!!! */}
            {/* später dynamisch: die nummer, Bsp und Lsg aus DB! */}
            <br/>
             <p>Beispiel 1: Die Aussage <TeX>{"A"}</TeX> sei falsch und die Aussage <TeX>{"B"}</TeX> sei wahr.
                 Dann ist die Aussage <TeX>{"(\\neg A)\\wedge B,"}</TeX>  wahr, da <TeX>{"\\neg A"}</TeX> und <TeX>{"B"}</TeX> beide
                 wahr sind und die Konjunktion zweier wahren Aussagen wahr ist.
             </p>
        </div>
    )
}