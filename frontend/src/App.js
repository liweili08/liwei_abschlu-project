import './App.css';
import {BrowserRouter, Route,Routes} from "react-router-dom";

import HomePage from "./pages/HomePage";
import Thema from "./pages/Thema";
import Grundlagen from "./pages/Grundlagen";
import Beispiel from "./pages/Beispiel";
import AufgabenGesamt from "./pages/AufgabenGesamt";
import Aufgabe from "./pages/Aufgabe";
import Ergebnis from "./pages/Ergebnis";
import BeispieleGesamt from "./pages/BeispieleGesamt";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              {/*später mit map-Funktion "themaName" dynamisch bekommen*/}
              <Route path="/folgen" element={<Thema/>}>
                  <Route path="grundlagen" element={<Grundlagen/>}/>
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
              <Route path="/reihen" element={<Thema/>}/>
          </Routes>
      </BrowserRouter>

     /* <div>
          <HomePage/>
      </div>*/
  );
}

export default App;
