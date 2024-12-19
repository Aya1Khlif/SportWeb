import { useEffect, useState } from "react";
import { getNutritionPlans } from "../services/api";

export default function NutritionPlansPage() {
  const [plans, setPlans] = useState([]); // تخزين البيانات
  const [loading, setLoading] = useState(true); // حالة التحميل
  const [error, setError] = useState(null); // حالة الخطأ

  // جلب البيانات عند تحميل الصفحة
  useEffect(() => {
    getNutritionPlans()
      .then((response) => {
        setPlans(response.data); // ضبط بيانات الخطط الغذائية
        setLoading(false); // إيقاف التحميل
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load nutrition plans.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* عنوان الصفحة */}
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">
          Nutrition Plans
        </h1>

        {/* حالة التحميل */}
        {loading && (
          <p className="text-center text-gray-500 text-lg">Loading...</p>
        )}

        {/* حالة الخطأ */}
        {error && <p className="text-center text-red-500 text-lg">{error}</p>}

        {/* عرض البيانات */}
        {!loading && plans.length > 0 ? (
          <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="py-2 px-4 text-left">User Name</th>
                <th className="py-2 px-4 text-left">Calories</th>
                <th className="py-2 px-4 text-left">Protein (g)</th>
                <th className="py-2 px-4 text-left">Carbs (g)</th>
                <th className="py-2 px-4 text-left">Fats (g)</th>
                <th className="py-2 px-4 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan) => (
                <tr
                  key={plan.id}
                  className="hover:bg-gray-100 transition duration-200"
                >
                  <td className="py-2 px-4">{plan.user?.name}</td>
                  <td className="py-2 px-4">{plan.calories}</td>
                  <td className="py-2 px-4">{plan.protein}</td>
                  <td className="py-2 px-4">{plan.carbs}</td>
                  <td className="py-2 px-4">{plan.fats}</td>
                  <td className="py-2 px-4">{plan.notes || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          !loading &&
          plans.length === 0 && (
            <p className="text-center text-gray-500 text-lg">
              No nutrition plans found.
            </p>
          )
        )}
      </div>
    </div>
  );
}
