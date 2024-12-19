import { motion } from "framer-motion";
const Services = () => {
  const services = [
    {
      title: "Workout Plans",
      description:
        "Customized workout routines tailored to your fitness goals.",
      icon: "🏋️",
    },
    {
      title: "Nutrition Plans",
      description:
        "Personalized meal plans to complement your fitness journey.",
      icon: "🥗",
    },
    {
      title: "Personal Coaching",
      description: "One-on-one training sessions with our expert coaches.",
      icon: "🤝",
    },
  ];

  return (
    <section className="services bg-white py-12">
    <motion.section
      className="services bg-white py-12"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-item p-6 bg-gray-50 rounded-lg shadow-md text-center"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
    </motion.section>
    </section>
  );
};

export default Services;
