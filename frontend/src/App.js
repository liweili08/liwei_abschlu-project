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


function App() {

  //  state mit dem Themen
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage />}/> {/*props with themes hinter HomePage {etwas}*/}
              {/*später mit map-Funktion "themaName" dynamisch bekommen*/}
              <Route path="/aussagenlogik" element={<Thema/>}>
                  <Route path="grundlagen" element={<Grundlagen/>}>
                      <Route path="aussage" element={<Grundlage/>}/>
                  </Route>
                  <Route path="beispiele" element={<BeispieleGesamt/>}>
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
