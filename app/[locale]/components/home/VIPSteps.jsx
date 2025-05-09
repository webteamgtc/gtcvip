import React from "react";

const StepBox = ({ step, title, description, bgColor, textColor, clipClass }) => (
  <div
    className={`p-6 md:p-8 text-left ${bgColor} ${textColor} ${clipClass} flex-1 min-w-[200px] flex flex-col justify-center`}
  >
    <h3 className="text-2xl font-bold mb-2">{step}</h3>
    <p className="text-base 2xl:text-lg leading-relaxed">{description}</p>
  </div>
);

const VIPSteps = () => {
  return (
    <section id="howItWorks" className="py-10 bg-gradient-to-b from-[#283085] via-[#050331] to-[#050331] text-white" 
    >
      <div className="top-section text-center mb-10">
        <h2  style={{ lineHeight: "3.3rem" }}
          className="bg-gradient-to-r from-secondary via-white to-secondary inline-block text-transparent bg-clip-text text-lg font-[500] md:text-[30px] 2xl:text-[45px] capitalize max-w-lg leading-normal">
        Unlock Your GTC VIP Access in 3 Simple Steps

        </h2>
      </div>
    

      <div className="flex flex-col md:flex-row gap-2 md:gap-0 max-w-6xl mx-auto overflow-hidden rounded-md px-2">
        <StepBox
          step="Step 1 – Register"
          title="Register"
          description="Open your GTC account and log into your Client Portal."
          bgColor="bg-[#283085]"
          textColor="text-white"
          clipClass="clip-left"
        />
        <StepBox
          step="Step 2 – Deposit"
          title="Deposit"
          description="Fund your account with at least $1,000 to begin your VIP journey."
          bgColor="bg-[#b68756]"
          textColor="text-white"
          clipClass="clip-center"
        />
        <StepBox
          step="Step 3 – Explore"
          title="Explore"
          description="Access the GTC VIP Trading Room and start earning, learning, and winning."
          bgColor="bg-[#E7E4F2]"
          textColor="text-black"
          clipClass="clip-right"
        />
      </div>
    </section>
  );
};

export default VIPSteps;
