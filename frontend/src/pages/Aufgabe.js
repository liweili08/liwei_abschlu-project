import {Link, Outlet, useParams} from "react-router-dom";
import TeX from "@matejmazur/react-katex";
import Ergebnis from "./Ergebnis";
import {useState} from "react";
import WrongAnswer from "./WrongAnswer";
import RightAnswer from "./RightAnswer";
import RightErgebnis from "./RightErgebnis";
import WrongErgebnis from "./WrongErgebnis";


export default function Aufgabe(props) {
    const {themeList}=props;
    const {themeName, subtopic} = useParams();
    const findTheme = themeList.find((mathTheme) => {
        return mathTheme.themeName === themeName;
    })
    const findHomework = findTheme.homeworkList.find((mathHomework) => {
        return mathHomework.subtopic === subtopic;
    })
//state welche button gedrückt
    const[buttonClick,setButtonClick]=useState(undefined);

       function WahrButton() {
         setButtonClick(true);
       }
      function WrongButton(){
          setButtonClick(false);
     }

     let answer;
       if(findHomework.result===buttonClick){
           answer=<RightErgebnis themeList={themeList}/>
           // answer=<RightAnswer />;
       } else{
           answer=<WrongErgebnis themeList={themeList}/>
           // answer=<WrongAnswer/>;
       }


    return (
        <div>
            <br/>
            <br/>
            <TeX>{findHomework.topic}</TeX>
            <br/>
            <br/>
            {/* ********************************************** */}
            <button onClick={WahrButton}>wahr</button>
            <button onClick={WrongButton}>falsch</button>
            <br/>
            <br/>

            {/*<Link to="rightergebnis" className="btn btn-success btn-xs" role="button">wahr</Link> {" "}*/}
            {/*<Link to="wrongergebnis" className="btn btn-danger btn-xs" role="button" >falsch</Link>*/}

            <br/>

        {/* überprüfen: */}
        {/*    <Link to="ergebnis" className="btn btn-primary btn-xs">Ergebnis</Link>*/}
            {answer}
            {/*<Ergebnis themeList={themeList}/>*/}
            <Outlet/>
        </div>

        /*<div>
            <br/>
            <h6>Aufgabe 1: Gegeben seien die falsche Aussage <TeX>{"A"}</TeX> und die wahre Aussage <TeX>{"B"}</TeX>.
                 Beurteilen Sie den Wahrheitsgehalt der Aussage <TeX>{"A\\vee(\\neg B)"}</TeX>. </h6>
            <br/>
            <Link to="ergebnis" className="btn btn-success btn-xs" role="button">wahr</Link> {" "}
            <Link to="ergebnis" className="btn btn-danger btn-xs" role="button" >falsch</Link>
            <Outlet/>
            <br/>
        </div>*/


)
}