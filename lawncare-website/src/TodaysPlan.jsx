import React, { useState, useEffect } from "react";
import MapView from "./components/MapView";

export default function TodaysPlan() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [destinations, setDestinations] = useState([
        { name: "Destination 1", location: "Location 1", time: "09:00", lat: 40.7128, lng: -74.006 },
        { name: "Destination 2", location: "Location 2", time: "10:30", lat: 40.73061, lng: -73.935242 },
    ]);
    const [newCustomer, setNewCustomer] = useState({
        name: "",
        location: "",
        time: "",
    });

    useEffect(() => {
        const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
        const today = new Date().toISOString().split("T")[0];

        console.log("Today's date:", today);
        console.log("Raw stored bookings:", storedBookings);

        const formattedBookings = storedBookings
            .filter((booking) => booking.time.startsWith(today))
            .map((booking) => ({
                name: booking.name,
                location: booking.address,
                time: booking.time.slice(11, 16),
                lat: 40.7128,
                lng: -74.006,
            }));

        console.log("Filtered bookings for today:", formattedBookings);

        setDestinations((prevDestinations) => [...prevDestinations, ...formattedBookings].sort((a, b) => a.time.localeCompare(b.time)));
    }, []);

    const handleAddCustomer = () => {
        if (!newCustomer.name || !newCustomer.location || !newCustomer.time) {
            alert("Please fill in all fields before adding a customer.");
            return;
        }

        const updatedDestinations = [...destinations, newCustomer].sort((a, b) => a.time.localeCompare(b.time));
        setDestinations(updatedDestinations);
        setNewCustomer({ name: "", location: "", time: "" });
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <header className="bg-white shadow">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">
                    <div className="text-2xl font-bold text-green-600">LawnCare by Lucas</div>
                    <nav className="flex space-x-6">
                        <a href="/" className="text-gray-700 hover:text-green-600 font-medium">Dashboard</a>
                        <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Customers</a>
                        <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Reports</a>
                        <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Planner</a>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto flex-1 py-10 px-6 grid grid-cols-5 gap-8 items-stretch">
                <div className="col-span-3 bg-white shadow-lg rounded-lg p-6 flex flex-col" style={{ height: "100%" }}>
                    <MapView destinations={destinations} />
                </div>

                <div className="col-span-2 bg-white shadow-lg rounded-lg p-6 flex flex-col" style={{ height: "100%" }}>
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">List of Destinations</h2>
                    <ul>
                        {destinations.map((destination, index) => (
                            <li key={index} className="mb-2 text-gray-800">
                                <strong>{destination.name}</strong>: {destination.location} at {destination.time}
                            </li>
                        ))}
                    </ul>
                </div>
            </main>

            <div className="container mx-auto py-6 px-6 flex justify-center space-x-4">
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Plan for Another Day</button>
                <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700" onClick={() => setIsModalOpen(true)}>
                    Add a 'What-if Customer'
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-10" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                    <div className="bg-white rounded-lg p-6 shadow-lg w-96 relative">
                        <h2 className="text-lg font-bold mb-4 text-gray-800">Add What-if Customer</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700">Name</label>
                                <input type="text" className="w-full border rounded px-3 py-2 text-gray-800" value={newCustomer.name} onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })} />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Destination</label>
                                <input type="text" className="w-full border rounded px-3 py-2 text-gray-800" value={newCustomer.location} onChange={(e) => setNewCustomer({ ...newCustomer, location: e.target.value })} />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Time (24-hour format: HH:mm)</label>
                                <input type="text" placeholder="e.g., 14:30" className="w-full border rounded px-3 py-2 text-gray-800" value={newCustomer.time} onChange={(e) => setNewCustomer({ ...newCustomer, time: e.target.value })} />
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button type="button" className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500" onClick={() => setIsModalOpen(false)}>Cancel</button>
                                <button type="button" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700" onClick={handleAddCustomer}>Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <footer className="bg-white shadow py-4">
                <div className="container mx-auto text-center text-gray-600 text-sm">© 2025 LawnCare by Lucas. All rights reserved.</div>
            </footer>
        </div>
    );
}
