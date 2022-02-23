import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'katex/dist/katex.min.css';

import HomePage from "./pages/HomePage";
import Theme from "./pages/Theme";
import BasicList from "./pages/BasicList";
import Example from "./pages/Example";
import HomeworkList from "./pages/HomeworkList";
import Homework from "./pages/Homework";
import Solution from "./pages/Solution";
import ExampleList from "./pages/ExampleList";
import Basic from "./pages/Basic";
import {useEffect, useState} from "react";
import {getThemeList} from "./service/ApiService";

function App() {
    const [themeList, setThemeList] = useState([]);
    useEffect(() => {
        setupThemeList().catch(e => console.log(e.message))
        // console.log(themeList)
    }, [])
    const setupThemeList = () => getThemeList().then(setThemeList)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage themeList={themeList}/>}/>
                <Route path="/:themeName" element={<Theme themeList={themeList}/>}>
                    <Route path="grundlagen" element={<BasicList themeList={themeList}/>}>
                        <Route path=":name" element={<Basic themeList={themeList}/>}/>
                    </Route>
                    <Route path="beispiele" element={<ExampleList themeList={themeList}/>}>
                        <Route path=":subtopic" element={<Example themeList={themeList}/>}/>
                    </Route>
                    <Route path="aufgaben" element={<HomeworkList themeList={themeList}/>}>
                        <Route path=":subtopic" element={<Homework themeList={themeList}/>}>
                            <Route path="ergebnis" element={<Solution themeList={themeList}/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
