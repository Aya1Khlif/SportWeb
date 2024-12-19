import { useState } from "react";

const IdealWeightCalculator = () => {
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    gender: "male",
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateIdealWeight = (e) => {
    e.preventDefault();
    const heightInCm = parseFloat(formData.height);
    let idealWeight;

    if (formData.gender === "male") {
      idealWeight = 50 + 0.91 * (heightInCm - 152.4);
    } else {
      idealWeight = 45.5 + 0.91 * (heightInCm - 152.4);
    }

    setResult(`Your ideal weight is ${idealWeight.toFixed(2)} kg.`);
    setFormData({ height: "", weight: "", gender: "male" });
  };

  return (
    <section className="ideal-weight bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Ideal Weight Calculator
        </h2>
        <form
          onSubmit={calculateIdealWeight}
          className="bg-white p-6 rounded-lg shadow-md space-y-4"
        >
          <div>
            <label
              htmlFor="height"
              className="block text-gray-800 font-bold mb-2"
            >
              Height (in cm):
            </label>
            <input
              type="number"
              id="height"
              name="height"
              value={formData.height}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="gender"
              className="block text-gray-800 font-bold mb-2"
            >
              Gender:
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Calculate
          </button>
        </form>
        {result && (
          <div className="mt-6 text-center text-xl font-bold text-green-600">
            {result}
          </div>
        )}
      </div>
    </section>
  );
};

export default IdealWeightCalculator;
