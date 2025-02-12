import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Header */}
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

            {/* Main Content */}
            <main className="container mx-auto flex-grow py-10 px-6 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">
                    We have served <span className="text-green-600">X customers</span>!
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Today Plan Card */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Today Plan</h2>
                        <button
                            className="bg-black text-white py-2 px-4 rounded-lg w-full hover:bg-gray-800"
                            onClick={() => navigate("/todays-plan")}
                        >
                            View
                        </button>
                    </div>

                    {/* Customer-Facing Site Link */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Customer-Facing Site</h2>
                        <button
                            className="bg-black text-white py-2 px-4 rounded-lg w-full hover:bg-gray-800"
                            onClick={() => navigate("/external_customer")}
                        >
                            Visit
                        </button>
                    </div>

                    {/* Projected Revenue Card */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Projected Revenue Today</h2>
                        <button
                            className="bg-black text-white py-2 px-4 rounded-lg w-full hover:bg-gray-800"
                        >
                            View
                        </button>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white shadow py-4 mt-auto">
                <div className="container mx-auto text-center text-gray-600 text-sm">
                    © 2025 LawnCare by Lucas. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
