import axios from "axios";

const BASE_URL = "https://sport-api.mastercoders.dev/api"; 


const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const getCategories = () => api.get("/categories");
export const getExercises = () => api.get("/exercises");
export const getNutritionPlans = () => api.get("/nutrition-plans");
export const getUserProgress = () => api.get("/user-progress");
export const getWorkoutSessions = () => api.get("/workout-sessions");

export default api;
