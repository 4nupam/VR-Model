import { testimonials } from "../constants";

/**
 * Testimonials Component
 *
 * Displays user feedback in a grid format with avatars, names, and companies.
 * Designed for responsiveness and aesthetic consistency with dark-themed UI.
 */
const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      {/* Section Heading */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People are saying
      </h2>

      {/* Testimonials Grid */}
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin hover:shadow-md hover:shadow-orange-600 transition duration-300">
              
              {/* Testimonial Text */}
              <p className="text-neutral-300 leading-relaxed">{testimonial.text}</p>

              {/* User Info */}
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300 object-cover"
                  src={testimonial.image}
                  alt={`${testimonial.user} avatar`}
                />
                <div>
                  <h6 className="text-white font-semibold">{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-500">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
