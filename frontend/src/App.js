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
        basicList:[{id:"b1",name:"Defnition",content:"XXXXXXXYYYYY"}],
    exampleList:[],
        homeworkList:[]}]);
  //  state mit dem Themen
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage themeList={themeList}/>}/> {/*props with themes hinter HomePage {etwas}*/}
              {/*später mit map-Funktion "themaName" dynamisch bekommen*/}
              <Route path="/:themeName" element={<Thema/>}>
                  <Route path="grundlagen" element={<Grundlagen themeList={themeList}/>}>
                      <Route path=":name" element={<Grundlage themeList={themeList}/>}/>
                  </Route>
                  <Route path="beispiele" element={<BeispieleGesamt themeList={themeList}/>}>
                      <Route path="bsp1" element={<Beispiel/>}/>
                      <Route path="bsp2" element={<Beispiel/>}/>
                      <Route path="bsp3" element={<Beispiel/>}/>
                  </Route>
                  <Route path="aufgaben" element={<AufgabenGesamt/>}>
                      <Route path="auf1" element={<Aufgabe/>}>
                          <Route path="ergebnis" element={<Ergebnis/>}/>
                      </Route>
                      <Route path="auf2" element={<Aufgabe/>}/>
                      <Route path="auf3" element={<Aufgabe/>}/>
                  </Route>
              </Route>
              <Route path="/mengenlehre" element={<Thema/>}/>
              <Route path="/abbildungen" element={<Thema/>}/>
          </Routes>
      </BrowserRouter>

     /* <div>
          <HomePage/>
      </div>*/
  );
}

export default App;
