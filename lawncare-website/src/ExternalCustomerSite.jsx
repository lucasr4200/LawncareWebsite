import React, { useState } from "react";

export default function ExternalCustomerSite() {
    const [booking, setBooking] = useState({
        name: "",
        address: "",
        time: "",
    });

    const [successMessage, setSuccessMessage] = useState("");

    const handleBookingSubmit = (e) => {
        e.preventDefault();

        // Retrieve existing bookings from local storage or initialize an empty array
        const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

        // Add the new booking
        bookings.push(booking);

        // Save the updated bookings array back to local storage
        localStorage.setItem("bookings", JSON.stringify(bookings));

        // Clear the form and show a success message
        setBooking({ name: "", address: "", time: "" });
        setSuccessMessage("Your booking has been successfully saved!");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Header */}
            <header className="bg-green-600 text-white shadow">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">
                    <div className="text-2xl font-bold">LawnCare by Lucas</div>
                    <div className="text-lg">X happy, local customers served!</div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto flex-1 py-10 px-6 grid grid-cols-2 gap-8">
                {/* Booking Section */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Book Here</h2>
                    {successMessage && (
                        <p className="text-green-600 mb-4">{successMessage}</p>
                    )}
                    <form onSubmit={handleBookingSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                className="w-full border rounded px-3 py-2 text-gray-800"
                                value={booking.name}
                                onChange={(e) =>
                                    setBooking({ ...booking, name: e.target.value })
                                }
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Address</label>
                            <input
                                type="text"
                                className="w-full border rounded px-3 py-2 text-gray-800"
                                value={booking.address}
                                onChange={(e) =>
                                    setBooking({ ...booking, address: e.target.value })
                                }
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Time</label>
                            <input
                                type="datetime-local"
                                className="w-full border rounded px-3 py-2 text-gray-800"
                                value={booking.time}
                                onChange={(e) =>
                                    setBooking({ ...booking, time: e.target.value })
                                }
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                        >
                            Submit Booking
                        </button>
                    </form>
                </div>

                {/* Why LawnCare Section */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Why LawnCare by Lucas?</h2>
                    <p className="text-gray-700">
                        - Trusted by local customers<br />
                        - Professional lawn care services<br />
                        - Affordable and reliable
                    </p>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white shadow py-4">
                <div className="container mx-auto text-center text-gray-600 text-sm">
                    Scroll down for full list of services and prices
                </div>
            </footer>
        </div>
    );
}