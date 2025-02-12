import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import TodaysPlan from "./TodaysPlan";
import ExternalCustomerSite from "./ExternalCustomerSite.jsx";
import CustomersPage from "./CustomersPage";
import 'leaflet/dist/leaflet.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/todays-plan" element={<TodaysPlan />} />
                <Route path="/external_customer" element={<ExternalCustomerSite />} />
                <Route path="/customers" element={<CustomersPage />} />
            </Routes>
        </Router>
    );
}

export default App;
