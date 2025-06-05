import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

/**
 * Workflow Component
 *
 * A responsive section that showcases how the platform enhances coding productivity.
 * Combines an image with a dynamic checklist of workflow benefits/features.
 */
const Workflow = () => {
  return (
    <div className="mt-20">
      {/* Section Heading */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding workflow.
        </span>
      </h2>

      {/* Main Content Layout */}
      <div className="flex flex-wrap justify-center">
        {/* Left: Code Image */}
        <div className="p-2 w-full lg:w-1/2 flex justify-center">
          <img src={codeImg} alt="Coding environment screenshot" className="rounded-lg shadow-md" />
        </div>

        {/* Right: Checklist Items */}
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              {/* Check Icon */}
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>

              {/* Title & Description */}
              <div>
                <h5 className="mt-1 mb-2 text-xl font-medium text-white">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
