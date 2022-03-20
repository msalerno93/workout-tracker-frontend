import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import HomePage from "./Pages/HomePage";
import AddWorkoutPage from "./Pages/AddWorkoutPage";
import MyWorkoutsPage from "./Pages/MyWorkoutsPage";
import NotFound from "./Pages/NotFoundPage";
import AboutPage from "./Pages/AboutPage";

function App() {
  const API_URL = "http://[::1]:3000/api/v1/workouts";

  const [workout, setWorkout] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then((data) => setWorkout(data));
  }, []);

  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/addworkout" element={<AddWorkoutPage />} />
            <Route
              path="/myworkouts"
              element={<MyWorkoutsPage workout={workout} />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
