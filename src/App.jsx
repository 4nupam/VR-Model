// Importing required components for the landing page layout
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

// Main App Component
const App = () => {
  return (
    <>
      {/* Navbar remains fixed at the top and is rendered outside the content wrapper */}
      <Navbar />

      {/* Main content container with responsive padding and centered layout */}
      <div className="max-w-7xl mx-auto pt-20 px-6">
        {/* HeroSection: Introductory section with title, description, and call-to-action */}
        <HeroSection />

        {/* FeatureSection: Displays key features or benefits of the product/service */}
        <FeatureSection />

        {/* Workflow: Represents how the service/product works step-by-step */}
        <Workflow />

        {/* Pricing: Shows available pricing plans and options */}
        <Pricing />

        {/* Testimonials: Displays customer reviews or user feedback */}
        <Testimonials />

        {/* Footer: Contains links, copyright info, and contact details */}
        <Footer />
      </div>
    </>
  );
};

export default App;
