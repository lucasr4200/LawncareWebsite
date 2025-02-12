import React, { useState, useEffect } from "react";

export default function CustomersPage() {
    const [filteredBookings, setFilteredBookings] = useState([]);

    useEffect(() => {
        const allBookings = JSON.parse(localStorage.getItem("bookings")) || [];

        // Current date and time truncated to midnight
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // 7 days from now, also truncated to midnight
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + 7);
        futureDate.setHours(23, 59, 59, 999);

        // Filter and sort
        const inRange = allBookings.filter((booking) => {
            const bookingDate = new Date(booking.time); // e.g. "2025-02-10T15:15"
            return bookingDate >= today && bookingDate <= futureDate;
        });

        // Sort by date and time ascending
        inRange.sort((a, b) => new Date(a.time) - new Date(b.time));

        setFilteredBookings(inRange);
    }, []);


    // Will add more filtering options along with the ability
    // To view new time periods soon. Pricing integration will be tackled soon as well

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">
                    <div className="text-2xl font-bold text-green-600">LawnCare by Lucas</div>
                    <nav className="flex space-x-6">
                        <a href="/" className="text-gray-700 hover:text-green-600 font-medium">Home</a>
                        <a href="/todays-plan" className="text-gray-700 hover:text-green-600 font-medium">Today's Plan</a>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto flex-1 py-10 px-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    Customers (Today - Next 7 Days)
                </h1>
                {filteredBookings.length === 0 ? (
                    <p className="text-gray-700">No upcoming bookings found.</p>
                ) : (
                    <ul className="space-y-3">
                        {filteredBookings.map((booking, idx) => {
                            // Format date/time for display
                            const dateTime = new Date(booking.time);
                            const dateStr = dateTime.toLocaleDateString();
                            const timeStr = dateTime.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                            });

                            return (
                                <li key={idx} className="bg-white shadow rounded p-4 text-gray-800">
                                    <div className="font-bold">{booking.name}</div>
                                    <div>{booking.address}</div>
                                    <div>
                                        {dateStr} at {timeStr}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </main>

            {/* Footer */}
            <footer className="bg-white shadow py-4">
                <div className="container mx-auto text-center text-gray-600 text-sm">
                    © 2025 LawnCare by Lucas. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
