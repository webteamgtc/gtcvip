'use client';
import React from 'react';

const TradingTools = () => {
  return (
    <section className="py-14 bg-[#111948] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Tool 1: Margin Calculator */}
          <div>
            <h2 className="HeadingH2 text-lg md:text-2xl text-left text-white">Margin Calculator</h2>
            <iframe
              src="https://ssltools.investing.com/margin-calculator/index.php?force_lang=1&acc=12&pair=1"
              width="100%"
              height="400"
              allowTransparency="true"
              className="w-full max-w-md"
            ></iframe>
          </div>

          {/* Tool 2: Technical Summary */}
          <div>
            <h2 className="HeadingH2 text-lg md:text-2xl text-left text-white">Technical Summary</h2>
            <iframe
              src="https://ssltsw.investing.com?lang=1&forex=1,2,3,5,7,9,10&commodities=8830,8836,8831,8849,8833,8862,8832&indices=175,166,172,27,179,170,174&stocks=345,346,347,348,349,350,352&tabs=1,2,3,4"
              width="100%"
              height="550"
              className="w-full max-w-md"
            ></iframe>
          </div>
    {/* Tool 4: Forex Cross Rates */}
          <div>
            <h2 className="HeadingH2 text-lg md:text-2xl text-left mb-4 text-white">Economic Calendar</h2>
  <iframe
    src="https://sslecal2.investing.com?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&features=datepicker,timezone&countries=25,32,6,37,72,22,17,39,14,10,35,43,56,36,110,11,26,12,4,5&calType=day&timeZone=8&lang=1"
    width="100%"
    height="600"
   
    allowTransparency="true"
 
    className="w-full"
  ></iframe>
          </div>
    


        </div>

      

      </div>
    </section>
  );
};

export default TradingTools;
