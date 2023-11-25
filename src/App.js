import React from "react";
import Navigation from "./components/nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Solution from "./components/solution";
import Add_schedule from "./pages/add_schedule";
import MainSchedule from "./pages/main_schedule";
import Memo from "./pages/memo";
import Slu_click from "./components/slu-click";
import Event from "./components/event";
import Add_my from "./pages/add_my";
import Add_homework from "./pages/add_homework";
import MainSchedule2 from "./pages/main_schedule copy";
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
                    <Route path="/memo" element={<Memo />} />
                    <Route path="/slu_click" element={<Slu_click />} />
                    <Route path="/event" element={<Event />} />
                    <Route path="/add_my" element={<Add_my />} />
                    <Route path="/copy" element={<MainSchedule2 />} />
                    <Route path="/add_homework" element={<Add_homework />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
