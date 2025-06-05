import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

/**
 * Pricing Component
 *
 * Displays tiered subscription plans with pricing and features.
 * Highlights the "Pro" plan as the most popular.
 */
const Pricing = () => {
  return (
    <div className="mt-20">
      {/* Section Heading */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing
      </h2>

      {/* Pricing Cards */}
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl h-full flex flex-col justify-between">
              
              {/* Plan Title and Tag */}
              <p className="text-4xl mb-8 font-semibold">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>

              {/* Price Info */}
              <p className="mb-8">
                <span className="text-5xl font-bold mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight text-lg">/Month</span>
              </p>

              {/* Feature List */}
              <ul className="flex-1">
                {option.features.map((feature, i) => (
                  <li key={i} className="mt-6 flex items-center text-neutral-300">
                    <CheckCircle2 className="text-orange-500" />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#"
                className="inline-flex justify-center items-center w-full h-12 p-5 mt-10 tracking-tight text-xl text-white hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
