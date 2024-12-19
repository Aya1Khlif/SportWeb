import { useEffect, useState } from "react";
import { getExercises, getCategories } from "../services/api";

export default function ExercisesPage() {
  const [exercises, setExercises] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null); // التمرين المحدد

  useEffect(() => {
    Promise.all([getExercises(), getCategories()])
      .then(([exercisesRes, categoriesRes]) => {
        setExercises(exercisesRes.data);
        setCategories(categoriesRes.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch data.");
        setLoading(false);
      });
  }, []);

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Uncategorized";
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Workout Exercises
        </h1>

        {loading && (
          <p className="text-center text-gray-500 text-lg">Loading...</p>
        )}
        {error && <p className="text-center text-red-500 text-lg">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise) => (
            <div
              key={exercise.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105"
            >
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {exercise.name}
                </h2>
                <p className="text-gray-700 mb-2">
                  <strong>Difficulty:</strong> {exercise.difficulty_level || "N/A"}
                </p>
                {/* <p className="text-gray-700 mb-2">
                  <strong>Category:</strong> {getCategoryName(exercise.category_id)}
                </p>
                <p className="text-gray-600 mb-3">
                  {exercise.description || "No description available."}
                </p> */}

                <button
                  className="mt-2 bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  onClick={() => setSelectedExercise(exercise)} 
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {!loading && exercises.length === 0 && (
          <p className="text-center text-gray-500 text-lg">
            No exercises available.
          </p>
        )}

        {/* Modal لعرض التفاصيل */}
        {selectedExercise && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-1/3">
              <h2 className="text-2xl font-bold mb-4">{selectedExercise.name}</h2>
              <p>
                <strong>Difficulty:</strong> {selectedExercise.difficulty_level}
              </p>
              <p>
                <strong>Category:</strong> {getCategoryName(selectedExercise.category_id)}
              </p>
              <p>
                <strong>Description:</strong> {selectedExercise.description || "No description available."}
              </p>
              <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => setSelectedExercise(null)} 
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
