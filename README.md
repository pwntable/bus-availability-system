# UTHM Bus Availability System 🚌

A modern, responsive, and real-time smart bus schedule web application built specifically for Universiti Tun Hussein Onn Malaysia (UTHM) students. This system dynamically filters and tracks the official campus bus timetables against your local device time, ensuring you only see the trips that matter right now.

## ✨ Key Features

- **Multi-Campus Support**: Seamlessly switch between three official routes:
  - Kampus Induk (Kolej Kediaman Luar Kampus)
  - Kampus Pagoh 
  - Kampus Bandar (Kolej Kediaman Dalam Kampus)
- **Smart Time Detection**: Automatically detects the current day and applies the correct active schedule (Monday–Thursday, Friday, or Weekend).
- **Live Filtering & Sorting**: 
  - Past trips are automatically struck out and hidden from the live view.
  - Active and upcoming trips are highlighted with countdown timers.
  - Bus cards are chronologically sorted so the absolute nearest bus floats to the top of your screen. Ties are broken gracefully by bus sequence number!
- **Dual Display Modes**: 
  - *Live View*: Shows focused, distraction-free cards highlighting your next immediate trips.
  - *Full Schedule*: Displays traditional timetable grids where time travels visually (past trips grey out).
- **Official Poster Previews**: Unsure of the route? Tap the "Poster" button to view a high-resolution modal of the official UTHM release poster for your active route!
- **Premium UI / Mobile-First**: Built with a sleek `#3B2F86` (Primary) and `#F00014` (Accent) palette, full CSS Grid/Flexbox responsiveness, and FontAwesome micro-interactions. Looks great on Desktop, Tablet, and Mobile devices.

## 🛠️ Technology Stack

This application is designed to be entirely lightweight and client-side without heavy Node modules or databases.
- **HTML5:** Semantic structure.
- **Vanilla CSS:** Custom CSS variables, modern Grid, and Flexbox for native responsiveness.
- **Vanilla JavaScript:** Real-time date processing, timetable state management, and DOM manipulation.

## 🚀 Running Locally

You do not need an active backend to run this app, as all data is securely loaded natively! However, you can use any lightweight local HTTP server to spin it up:

```bash
# Clone the repository
git clone https://github.com/pwntable/bus-availability-system.git

# Enter directory
cd bus-availability-system

# Run a simple Python server
python3 -m http.server 8000
```
Then simply visit `http://localhost:8000` in your web browser!
