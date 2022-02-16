import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
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
import {useEffect, useState} from "react";
import {getThemeList} from "./service/ApiService";
import RightErgebnis from "./pages/RightErgebnis";
import WrongErgebnis from "./pages/WrongErgebnis";


function App() {
    const [themeList, setThemeList] = useState([]);
    useEffect(() => {
        setupThemeList().catch(e => console.log(e.message))
        // console.log(themeList)
    }, [])
    const setupThemeList = () => getThemeList().then(setThemeList)
    console.log("aaa")
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
                    <Route path="aufgaben" element={<AufgabenGesamt themeList={themeList}/>}>
                        <Route path=":subtopic" element={<Aufgabe themeList={themeList}/>}>
                            <Route path="ergebnis" element={<Ergebnis themeList={themeList}/>}/>
                            <Route path="richtigergebnis" element={<RightErgebnis themeList={themeList}/>}/>
                            <Route path="wrongergebnis" element={<WrongErgebnis themeList={themeList}/>}/>
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
