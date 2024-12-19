import "./App.css";
import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ExercisesPage from "./pages/ExercisesPage";
import Banner from './components/Banner/Banner';
import WorkoutSessions from "./pages/WorkoutSessions";
import UserProgressPage from "./pages/UserProgressPage";
import NutritionPlansPage from "./pages/NutritionPlansPage";
import ChatBotApp from "./components/CHAT/ChatBotApp";

function App() {
  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <Router>
          <Navbar />
          <Banner />
          <ChatBotApp/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nutritionPlans" element={<NutritionPlansPage />} />
            <Route path="/userProgress" element={<UserProgressPage />} />
            <Route path="/workSession" element={<WorkoutSessions />} />
            <Route path="/exercises" element={<ExercisesPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
