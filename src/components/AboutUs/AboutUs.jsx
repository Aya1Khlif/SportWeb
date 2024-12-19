import about from '../../assets/img/run3.avif'

const AboutUs = () => {
    return (
        <section className="about-us py-12">
           <h1 className='text-center text-4xl font-bold mb-5 bg-gradient-to-r from-blue-100 via-red-500 to-gray-300 bg-clip-text text-transparent'>About Us</h1>
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-8 rounded-lg shadow-lg">
          {/* Text Section */}
          
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
         
          
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-700 via-red-500 to-gray-300 bg-clip-text text-transparent">
              Welcome to Our Sports Club
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed font-bold">
              Our sports club is dedicated to helping individuals achieve their fitness goals through personalized training plans, expert coaching, and a supportive community. 
              We offer a range of services including nutrition plans, workout sessions, and personal coaching to ensure you have all the tools you need for success.
            </p>
          </div>
          {/* Image Section */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={about}
              alt="Club Activities"
              className="w-full max-w-xs md:max-w-md mx-auto object-contain mt-5"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      
    );
  };
  
  export default AboutUs;
  