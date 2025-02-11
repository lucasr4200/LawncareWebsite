import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import TodaysPlan from "./TodaysPlan";
import CustomerPage from "./CustomerPage";
import 'leaflet/dist/leaflet.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/todays-plan" element={<TodaysPlan />} />
                <Route path="/customer" element={<CustomerPage />} />
            </Routes>
        </Router>
    );
}

export default App;
