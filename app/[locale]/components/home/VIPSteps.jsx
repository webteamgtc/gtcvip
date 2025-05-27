import React from "react";

const StepBox = ({ step, title, description, bgColor, textColor, clipClass, darkBg, darkText }) => (
  <div
    className={`p-6 md:p-8 text-left ${bgColor} ${textColor} ${darkBg} ${darkText} ${clipClass} flex-1 min-w-[200px] flex flex-col justify-center shadow-2xl transition-colors duration-300`}
  >
    <h3 className="text-2xl font-bold mb-2">{step}</h3>
    <p className="text-base 2xl:text-lg leading-normal">{description}</p>
  </div>
);

const VIPSteps = () => {
  return (
    <section id="howItWorks" className="py-10">
      <div className="top-section text-center my-10">
       <h2 className=" text-2xl font-[500] md:text-[30px] 2xl:text-[35px] max-w-xs md:max-w-sm mx-auto leading-tight text-primary dark:text-transparent dark:bg-gradient-to-r dark:from-secondary dark:via-white dark:to-secondary dark:bg-clip-text transition-colors duration-300 " > Get Your GTC VIP Access in 
3 Simple Steps
 </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-2 md:gap-0 max-w-6xl mx-auto overflow-hidden rounded-md px-2">
        <StepBox
          step="Step 1 - Sign Up"
          title="Register"
          description="Create your free GTC VIP account in minutes. No fuss, just quick access."
          bgColor="bg-[#283085]"
          textColor="text-white"
          darkBg="dark:bg-[#1e255b]"
          darkText="dark:text-white"
          clipClass="clip-left"
        />
        <StepBox
          step="Step 2 – Login"
          title="Login"
          description="Head to your dashboard to track your tier, points, and rewards."
          bgColor="bg-[#b68756]"
          textColor="text-white"
          darkBg="dark:bg-[#d1a865]"
          darkText="dark:text-black"
          clipClass="clip-center"
        />
        <StepBox
          step="Step 3 – Start Earning"
          title="Earn"
          description="Join the loyalty program, collect points, and claim amazing prizes."
          bgColor="bg-[#E7E4F2]"
          textColor="text-black"
          darkBg="dark:bg-[#f5f3ff]"
          darkText="dark:text-black"
          clipClass="clip-right"
        />
      </div>
    </section>
  );
};

export default VIPSteps;
