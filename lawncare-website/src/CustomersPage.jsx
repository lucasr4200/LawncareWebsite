import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CustomersPage() {
    const navigate = useNavigate();
    const [futureDays, setFutureDays] = useState(7);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredBookings, setFilteredBookings] = useState([]);

    useEffect(() => {
        filterBookings();
    }, [futureDays, searchTerm]);

    const filterBookings = () => {
        const allBookings = JSON.parse(localStorage.getItem("bookings")) || [];

        //Filter by time range
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + futureDays);
        futureDate.setHours(23, 59, 59, 999);

        let inRange = allBookings.filter((booking) => {
            const bookingDate = new Date(booking.time);
            return bookingDate >= today && bookingDate <= futureDate;
        });

        // Filter by name/address search
        const lowerSearch = searchTerm.toLowerCase();
        let searched = inRange.filter((booking) => {
            return (
                booking.name.toLowerCase().includes(lowerSearch) ||
                booking.address.toLowerCase().includes(lowerSearch)
            );
        });

        // Sort ascending by date and time
        searched.sort((a, b) => new Date(a.time) - new Date(b.time));
        setFilteredBookings(searched);
    };

    const handleDaysChange = (e) => {
        setFutureDays(Number(e.target.value));
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <header className="bg-white shadow">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">
                    <div className="text-2xl font-bold text-green-600">LawnCare by Lucas</div>
                    <nav className="flex space-x-6">
                        <button
                            onClick={() => navigate("/")}
                            className="text-gray-700 hover:text-green-600 font-medium"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => navigate("/customers")}
                            className="text-gray-700 hover:text-green-600 font-medium"
                        >
                            Customers
                        </button>
                        <button
                            // onClick={() => navigate("/customers")} TODO
                            className="text-gray-700 hover:text-green-600 font-medium"
                        >
                            Reports
                        </button>
                        <button
                            //onClick={() => navigate("/customers")} TODO
                            className="text-gray-700 hover:text-green-600 font-medium"
                        >
                            Planner
                        </button>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto flex-1 py-10 px-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    Customers (Today - Next {futureDays} Day{futureDays !== 1 ? "s" : ""})
                </h1>

                {/* Filters */}
                <div className="flex flex-wrap items-center mb-6 space-x-4">
                    {/* Future Days Filter */}
                    <div className="flex items-center space-x-2">
                        <label htmlFor="futureDays" className="text-gray-700 font-medium">
                            Days in future:
                        </label>
                        <input
                            id="futureDays"
                            type="number"
                            min="0"
                            max="365"
                            value={futureDays}
                            onChange={handleDaysChange}
                            className="w-20 border border-gray-300 rounded px-2 py-1 text-gray-800"
                        />
                    </div>

                    {/* Search Filter */}
                    <div className="flex items-center space-x-2">
                        <label htmlFor="searchTerm" className="text-gray-700 font-medium">
                            Search:
                        </label>
                        <input
                            id="searchTerm"
                            type="text"
                            placeholder="Type name or address"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="border border-gray-300 rounded px-2 py-1 text-gray-800"
                        />
                    </div>
                </div>

                {filteredBookings.length === 0 ? (
                    <p className="text-gray-700">No upcoming bookings found.</p>
                ) : (
                    <ul className="space-y-3">
                        {filteredBookings.map((booking, idx) => {
                            const dateTime = new Date(booking.time);
                            const dateStr = dateTime.toLocaleDateString();
                            const timeStr = dateTime.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                            });

                            return (
                                <li key={idx} className="bg-white shadow rounded p-4 text-gray-800">
                                    <div className="font-bold">{booking.name}</div>
                                    <div>Address: {booking.address}</div>
                                    <div>Date/Time: {dateStr} at {timeStr}</div>
                                    <div>Service: {booking.service || "N/A"}</div>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </main>

            <footer className="bg-white shadow py-4">
                <div className="container mx-auto text-center text-gray-600 text-sm">
                    © 2025 LawnCare by Lucas. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
