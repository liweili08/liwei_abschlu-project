import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/HomePage";
import Thema from "./pages/Thema";
import Grundlagen from "./pages/Grundlagen";
import Beispiel from "./pages/Beispiel";
import AufgabenGesamt from "./pages/AufgabenGesamt";
import Aufgabe from "./pages/Aufgabe";
import Ergebnis from "./pages/Ergebnis";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import BeispieleGesamt from "./pages/BeispieleGesamt";

function App() {
  return (
    // <div className="App">
   //  {/*<HomePage/>*/}
    //    {/*<Thema/>*/}
    //   {/* <Grundlagen/>*/}
    //   {/* <Beispiel/>*/}
    //   {/* <AufgabenGesamt/>*/}
     // {/*<Aufgabe/>*/}
     // {/*  <Ergebnis/>*/}
      // {/*</div>*/}
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              {/*später mit map-Funktion "themaName" dynamisch bekommen*/}
              <Route path="/folgen" element={<Thema/>}>
                  <Route path="grundlagen" element={<Grundlagen/>}/>
                  <Route path="beispiele" element={<BeispieleGesamt/>}/>
                  <Route path="aufgaben" element={<AufgabenGesamt/>}/>
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
