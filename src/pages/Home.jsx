import { useEffect, useState } from "react";
import {
  getCategories,
  getExercises,
  getUserProgress,
  getWorkoutSessions,
} from "../services/api";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, BarElement);

import Contact from "./../components/Contact/Contact";
import AboutUs from "../components/AboutUs/AboutUs";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
import IdealWeightCalculator from "./Calculator";
import { motion } from "framer-motion";

const Home = () => {
  const [stats, setStats] = useState({
    categories: 0,
    exercises: 0,
    users: 0,
    sessions: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const responses = await Promise.all([
          getCategories(),
          getExercises(),
          getUserProgress(),
          getWorkoutSessions(),
        ]);

        setStats({
          categories: responses[0].data.length,
          exercises: responses[1].data.length,
          users: responses[2].data.length,
          sessions: responses[3].data.length,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  const chartData = {
    labels: ["Categories", "Exercises", "Users", "Sessions"],
    datasets: [
      {
        label: "Statistics",
        data: [stats.categories, stats.exercises, stats.users, stats.sessions],
        backgroundColor: ["#4CAF50", "#FFC107", "#2196F3", "#FF5722"],
      },
    ],
  };

  return (
    <div>
      {/* AboutUs */}
      <AboutUs />
      {/* Stats Section */}
      <motion.section
        className="stats py-12"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Statistics</h2>
        <div className="max-w-4xl mx-auto">
          <Bar data={chartData} />
        </div>
      </motion.section>
      {/* Services Section */}
      <Services />
      <Testimonials />
      <IdealWeightCalculator />
      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Home;
