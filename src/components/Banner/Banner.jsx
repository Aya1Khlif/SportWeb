import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll'; // Ensure you import correctly
import banner from "../../assets/img/banner5.png";

export default function Banner() {
  return (
    <section className="hero bg-gradient-to-r from-blue-300 via-violet-900 to-black flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-16">
      {/* Content Section */}
      <motion.div
        className="cover flex flex-col items-center justify-center space-y-4 md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <h1 className="text-center text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-blue-100 via-red-500 to-gray-300 bg-clip-text text-transparent">
          Achieve Your Fitness Goals
        </h1>
        <p className="mt-2 text-lg text-gray-200 leading-relaxed text-center font-bold">
          Discover personalized workout plans, track your progress, and stay motivated with our comprehensive sports club platform. <br />
          Join us today and take the first step towards a healthier, happier you!
        </p>
        <div className="flex items-center justify-center gap-5">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="mt-6 text-center bg-gradient-to-r from-blue-400 via-indigo-400 to-white text-blue-800 px-5 py-3 rounded-lg shadow-m transition-all cursor-pointer"
          >
            Book Now ↗
          </ScrollLink>
          <span
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: "33px",
            }}
          >
            |
          </span>
          <p
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: "22px",
              marginTop: "8px",
            }}
          >
            0988811122
          </p>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div className="img lg:block hidden">
  <img
    src={banner}
    alt="Sports Banner"
    className="w-full max-w-lg mx-auto md:max-w-xl object-contain"
    loading="lazy"
  />
</motion.div>

    </section>
  );
}
