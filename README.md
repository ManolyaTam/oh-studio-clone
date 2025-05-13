# OH Studio & Haptic Studio Clone

This project is a React-based clone of the websites [oh.studio](https://oh.studio) and [haptic.studio](https://haptic.studio). It was developed as part of an assignment for an internship application. The goal was to replicate the design and functionality of these websites within a 10-day timeframe, using React for the frontend and optionally a backend library. I chose to use **Express** for the backend.

---

## Features

- **Responsive Design**: The application is fully responsive and adapts to different screen sizes.
- **React Components**: Modular and reusable components for better maintainability.
- **FontAwesome Integration**: Used for displaying brand icons in the carousel.
- **Seamless Animations**: Smooth scrolling carousels and animations for an engaging user experience.
- **Backend Integration**: A simple Express backend to serve data for the gallery and carousel components.
- **Routing**: Implemented using `react-router-dom` for navigation between pages.

---

## Pages

### 1. **OH Studio**
- A landing page showcasing the design and branding of OH Studio.
- Includes a gallery of projects fetched dynamically from the backend.

### 2. **Haptic Studio**
- A detailed page for Haptic Studio, featuring:
  - A carousel of company logos.
  - Pricing options with detailed descriptions.
  - Career opportunities section.

---

## Tech Stack

### Frontend
- **React**: For building the user interface.
- **Vite**: For fast development and build processes.
- **FontAwesome**: For brand icons in the carousel.

### Backend
- **Express**: For serving API endpoints to fetch gallery and carousel data.

### Styling
- **CSS**: Custom CSS for styling components and animations.

---

## Installation and Setup

### Frontend Setup

1. Clone the frontend repository:
   ```bash
   git clone https://github.com/manolyatam/oh-studio-clone
   cd oh-studio-clone
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the application in your browser at:
   ```http://localhost:5173```

### Backend Setup

1. Clone the backend repository:
   ```bash
   git clone https://github.com/manolyatam/oh-backend
   cd oh-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm run dev
   ```

---

## Project Structure

```
oh-studio/
├── src/
│   ├── components/       # Reusable React components
│   ├── pages/            # Page-level components
│   ├── services/         # API service files
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── server.js             # Express backend server
├── vite.config.js        # Vite configuration
└── package.json          # Project metadata and dependencies
```

---

## Challenges and Learnings

- **Time Management**: Completing the project within 10 days required careful planning and prioritization of features.
- **Frontend-Backend Integration**: Learned how to fetch and display data dynamically using React and Express.
- **CSS Animations**: Gained experience in creating smooth animations for carousels and other UI elements.

---

## Future Improvements

- Add unit tests for React components.
- Enhance the backend with a database for dynamic content management.
- Optimize performance for large datasets in the carousel and gallery.

---

## How to Use

1. Navigate to the **OH Studio** page to view the gallery of projects.
2. Switch to the **Haptic Studio** page to explore pricing options, career opportunities, and the company carousel.

---

This project demonstrates my ability to work with React, integrate a backend, and replicate complex designs within a limited timeframe. Thank you for reviewing my work!