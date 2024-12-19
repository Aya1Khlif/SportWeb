import person from '../../assets/img/person.jpg'
const Testimonials = () => {
    const testimonials = [
      {
        name: "John Doe",
        feedback:
          "The personalized training sessions have been amazing! I've seen incredible results.",
        image: "https://via.placeholder.com/100",
      },
      {
        name: "Jane Smith",
        feedback:
          "Thanks to the nutrition plans, I’ve achieved my ideal weight in no time!",
        image: "https://via.placeholder.com/100",
      },
      {
        name: "Alice Johnson",
        feedback:
          "The coaches are super supportive and motivating. Highly recommend!",
        image: "https://via.placeholder.com/100",
      },
    ];
  
    return (
      <section className="testimonials bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            What Our Members Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-item p-6 bg-white rounded-lg shadow-md text-center"
              >
                <img
                  src={person}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 italic">{testimonial.feedback}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  