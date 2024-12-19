import { useEffect, useState } from "react";
import { getUserProgress } from "../services/api";

export default function UserProgressPage() {
  const [progress, setProgress] = useState([]); // تخزين البيانات
  const [loading, setLoading] = useState(true); // حالة التحميل
  const [error, setError] = useState(null); // حالة الخطأ

  // جلب البيانات عند تحميل الصفحة
  useEffect(() => {
    getUserProgress()
      .then((response) => {
        setProgress(response.data); // ضبط بيانات التقدم
        setLoading(false); // إيقاف التحميل
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load user progress.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* عنوان الصفحة */}
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          User Progress
        </h1>

        {/* حالة التحميل */}
        {loading && (
          <p className="text-center text-gray-500 text-lg">Loading...</p>
        )}

        {/* حالة الخطأ */}
        {error && <p className="text-center text-red-500 text-lg">{error}</p>}

        {/* عرض البيانات */}
        {!loading && progress.length > 0 ? (
          <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-2 px-4 text-left">User Name</th>
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Weight (kg)</th>
                <th className="py-2 px-4 text-left">Body Fat (%)</th>
                <th className="py-2 px-4 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {progress.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-100 transition duration-200"
                >
                  <td className="py-2 px-4">{item.user?.name}</td>
                  <td className="py-2 px-4">
                    {new Date(item.date).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4">{item.weight}</td>
                  <td className="py-2 px-4">{item.body_fat_percentage}</td>
                  <td className="py-2 px-4">{item.notes || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          !loading &&
          progress.length === 0 && (
            <p className="text-center text-gray-500 text-lg">
              No user progress found.
            </p>
          )
        )}
      </div>
    </div>
  );
}
