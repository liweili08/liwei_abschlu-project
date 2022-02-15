import './App.css';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import 'katex/dist/katex.min.css';

import HomePage from "./pages/HomePage";
import Thema from "./pages/Thema";
import Grundlagen from "./pages/Grundlagen";
import Beispiel from "./pages/Beispiel";
import AufgabenGesamt from "./pages/AufgabenGesamt";
import Aufgabe from "./pages/Aufgabe";
import Ergebnis from "./pages/Ergebnis";
import BeispieleGesamt from "./pages/BeispieleGesamt";
import Grundlage from "./pages/Grundlage";
import "bootstrap/dist/css/bootstrap.css"
import {useState} from "react";


function App() {
const[themeList, setThemeList]=useState([
    {id:"test1",
        themeName:"Bla",
        basicList:[{id:"b1",name:"Defnition",content:"XXXXXXXYYYYY"},
                   {id:"b2",name:"Defnition2",content:"WWWWWW"}],
        exampleList:[{id:"ex1",subtopic:"Negation",example:"123123123"},
                     {id:"ex2",subtopic:"Konjunktion",example:"456456456"}],
        homeworkList:[{id:"hw1",subtopic:"Aussagen",topic:"Beurteilen Sie...",
                        result:true,solution:"Lösung: yyyy"},
                      {id:"hw2",subtopic:"Negation_und_Äquivalenz",
                          topic:"Beurteilen Sie den Wahrheitsgehalt...",
                              // "Gegeben seien die falsche Aussage <TeX>{\"A\"}</TeX> und die wahre Aussage <TeX>{\"B\"}</TeX>.\n" +
                              // "Beurteilen Sie den Wahrheitsgehalt der Aussage <TeX>{\"A\\\\vee(\\\\neg B)\"}</TeX>.",
                        result:false,solution:"Lösung: xxxx"}]},
    {id:"test2",
        themeName:"lalala",
        basicList:[{id:"b2_1",name:"Defnition3",content:"xxxxx"},
            {id:"b2_2",name:"Defnition4",content:"yyyyy"}],
        exampleList:[{id:"ex3",subtopic:"kartesische_Produkt",example:"aaaaaaa"},
            {id:"ex4",subtopic:"Konjunktion",example:"bbbbbb"}],
        homeworkList:[{id:"hw2_1",subtopic:"Mengen",topic:"Gegeben seien...",
                        result:true,solution:"Lösung: AAAAA"},
                       {id:"hw1",subtopic:"Aussagen",topic:"Beurteilen Sie...",
                         result:false,solution:"Lösung: BBBBB"}]}
]);

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage themeList={themeList}/>}/>
              <Route path="/:themeName" element={<Thema/>}>
                  <Route path="grundlagen" element={<Grundlagen themeList={themeList}/>}>
                      <Route path=":name" element={<Grundlage themeList={themeList}/>}/>
                  </Route>
                  <Route path="beispiele" element={<BeispieleGesamt themeList={themeList}/>}>
                      <Route path=":subtopic" element={<Beispiel themeList={themeList}/>}/>
                  </Route>
                  <Route path="aufgaben" element={<AufgabenGesamt  themeList={themeList}/>}>
                      <Route path=":subtopic" element={<Aufgabe  themeList={themeList}/>}>
                          <Route path="ergebnis" element={<Ergebnis themeList={themeList}/>}/>
                      </Route>
                  </Route>
              </Route>
          </Routes>
      </BrowserRouter>

     /* <div>
          <HomePage/>
      </div>*/
  );
}

export default App;
