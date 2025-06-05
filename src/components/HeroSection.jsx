import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

/**
 * HeroSection Component
 *
 * The main landing section of the homepage designed to capture user attention.
 * It features a headline, description, call-to-action buttons, and preview videos
 * that visually introduce the product (VirtualR build tools for developers).
 */
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>

      {/* Description Paragraph */}
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>

      {/* Call-to-Action Buttons */}
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md text-white font-medium transition hover:opacity-90"
        >
          Start for free
        </a>
        <a
          href="#"
          className="py-3 px-4 mx-3 rounded-md border text-white border-neutral-600 hover:border-orange-500 transition"
        >
          Documentation
        </a>
      </div>

      {/* Video Previews */}
      <div className="flex mt-10 justify-center flex-wrap">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full lg:w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full lg:w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
