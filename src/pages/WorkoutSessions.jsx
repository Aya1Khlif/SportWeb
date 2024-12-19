import { useEffect, useState } from "react";
import { getWorkoutSessions } from "../services/api";

export default function WorkoutSessions() {
  const [sessions, setSessions] = useState([]); // تخزين الجلسات
  const [loading, setLoading] = useState(true); // حالة التحميل
  const [error, setError] = useState(null); // حالة الخطأ

  // جلب البيانات عند تحميل الصفحة
  useEffect(() => {
    getWorkoutSessions()
      .then((response) => {
        setSessions(response.data); // ضبط بيانات الجلسات
        setLoading(false); // إيقاف التحميل
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load workout sessions.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* عنوان الصفحة */}
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Workout Sessions
        </h1>

        {/* حالة التحميل */}
        {loading && (
          <p className="text-center text-gray-500 text-lg">Loading...</p>
        )}

        {/* حالة الخطأ */}
        {error && <p className="text-center text-red-500 text-lg">{error}</p>}

        {/* عرض البيانات */}
        {!loading && sessions.length > 0 ? (
          <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-2 px-4 text-left">User Name</th>
                <th className="py-2 px-4 text-left">Exercise Name</th>
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Duration</th>
                <th className="py-2 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session) => (
                <tr
                  key={session.id}
                  className="hover:bg-gray-100 transition duration-200"
                >
                  <td className="py-2 px-4">{session.user?.name}</td>
                  <td className="py-2 px-4">{session.exercise?.name}</td>
                  <td className="py-2 px-4">
                    {new Date(session.date).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4">{session.duration} mins</td>
                  <td
                    className={`py-2 px-4 ${
                      session.status === "completed"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {session.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          !loading &&
          sessions.length === 0 && (
            <p className="text-center text-gray-500 text-lg">
              No workout sessions found.
            </p>
          )
        )}
      </div>
    </div>
  );
}
