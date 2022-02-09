import {Link,Outlet} from "react-router-dom";

export default function BeispieleGesamt(){
    return(
        <div>
            {/*<h2> Beispiele </h2> /!* kann weglassen wenn später mit Highlight *!/*/}
            <ul> {/* wird später dynamisch mit map-Funktion listen   */}
                <li> <Link to="bsp1" >Beispiel 1:</Link> Berechnen Sie den Grenzwert von ...</li>

                <li > <Link to="bsp2">Beispiel 2:</Link> Berechnen Sie den Grenzwert von ...</li>

                <li > <Link to="bsp3">Beispiel 3:</Link> Berechnen Sie den Grenzwert von ...</li>

                <Outlet/>
            </ul>
            <br/>



        </div>
    )
}