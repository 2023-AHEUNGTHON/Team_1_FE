import React from "react";
import Navigation from "./components/nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Solution from "./components/solution";
import Add_schedule from "./pages/add_schedule";
import MainSchedule from "./pages/main_schedule";
import Slu_click from "./components/slu-click";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Router>
                <Navigation />
                <Routes>
                    <Route path="/solution" element={<Solution />} />
                    <Route path="/add" element={<Add_schedule />} />
                    <Route path="/main" element={<MainSchedule />} />
                    <Route path="/slu_click" element={<Slu_click />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
