# LawnCare by Lucas - Lawn Care Management System

## Overview
LawnCare by Lucas is a lawn care management system designed for both internal business operations and customer interactions. It includes an internal dashboard for managing customers, scheduling services, financial tracking, and route optimization. Additionally, it provides a customer facing site where clients can book lawn care appointments.
Note: At the moment this is not meant to be a funcitonal business website, it is made for the purposes of enahcning my knowledge of REACT and web design and integrating it with my background in AI /ML projects (see travelling salesman problem below).

## Features
### Internal Dashboard
- View and manage customer information.
- Access financial reports (income and expenses).
- Plan optimal routes using a **Traveling Salesman Algorithm** to minimize driving distance.
- Interactive **Today's Planner** with a map and a list of scheduled destinations.
- Add **What-if Customers** dynamically to simulate route changes.

### Customer-Facing Site
- Book lawn care services directly through an online form.
- View company details and service pricing.
- Store booking data locally for retrieval in the internal dashboard.

## Tech Stack
- **Frontend**: React (Vite) with TailwindCSS
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Routing**: React Router
- **Maps & Geolocation**: Leaflet.js & OpenStreetMap
- **Local Data Storage**: `localStorage` for temporary booking persistence

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js (v16+ recommended)
- npm (yarn can also be used)

## Project Structure
```
LawncareWebsite/
│── .idea/
│── lawncare-website/
│── node_modules/  # Project dependencies
│── public/
│── src/
│   │── assets/
│   │── components/
│   │   │── MapView.jsx  # Interactive map for Today's Planner
│   │── App.css  # Global styles
│   │── App.jsx  # Main application entry point
│   │── CustomerPage.jsx  # Customer-facing site
│   │── HomePage.jsx  # Internal homepage dashboard
│   │── index.css  # Global styles
│   │── main.jsx  # React root render
│   │── TodaysPlan.jsx  # Planner with route optimization
│── .gitignore  # Git ignore rules
│── eslint.config.js  # Linting configuration
│── index.html  # Root HTML file
│── package.json  # Dependencies and scripts
│── package-lock.json  # Lock file for npm
│── README.md  # Project documentation
│── vite.config.js  # Vite configuration
```

## Usage
### Internal Site
- Access **Today's Planner** to view scheduled destinations.
- Click **Add a 'What-if Customer'** to add a temporary customer to see how they would fit into the day at hand.
- Customers appear in the **List of Destinations** if their booking date matches today.
- The **Map** highlights locations and will later include optimized routes.

### Customer-Facing Site
- Customers can enter **Name, Address, and Time** to schedule an appointment.
- Bookings are stored locally and reflected in the **Internal Planner**.

## Roadmap
- 🔜 **Add customers page to view customer history and upcoming customers**
- 🚀 **Optimize Routes Using AI Pathfinding (Travelling Salesman Problem)**
- 📈 **Advanced Report Generation for Insights into Revenue**

## License
This project is licensed under the MIT License - see the LICENSE file for details.

---
_With this website 16 year old me would have had a much easier time keeping all my lawncare appointments organized 🚜🌱_

