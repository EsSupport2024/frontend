import React from "react";
import TwentyFour from "@/../public/assets/icons/twentyfour.png";
import Project from "@/../public/assets/icons/project.png";
import dedicated from "@/../public/assets/icons/dedicated.png";
import invest from "@/../public/assets/icons/invest.png";

const WhyUs = () => {
  return (
    <section className="bg-darkGray text-white">
      <div className="container mx-auto px-4 py-16 lg:px-24 lg:py-32 animate-slideInFromBottom">
        <div className="text-center lg:text-left font-bold lg:text-4xl">
          Why choose us?
        </div>
        <div className="mt-10 space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center">
          <div className="text-center space-y-3 lg:flex lg:space-y-0 lg:text-left lg:items-end lg:gap-10">
            <div>
              <img
                src={invest.src}
                alt="cost effective"
                className="m-auto w-10 h-9 lg:w-[72px] lg:h-[64px]"
              />
            </div>
            <div>
              <div className="font-bold text-xs lg:text-xl">Cost Efficient</div>
              <div className="text-[10px] lg:text-sm">
                Achieving optimal results with minimal expenditure.
              </div>
            </div>
          </div>
          <div className="text-center space-y-3 lg:flex lg:space-y-0 lg:text-left lg:items-end lg:gap-10">
            <div>
              <img
                src={dedicated.src}
                alt="dedicated group at your service"
                className="m-auto w-10 h-9 lg:w-[72px] lg:h-[64px]"
              />
            </div>
            <div>
              <div className="font-bold text-xs lg:text-xl">
                Dedicated Teams
              </div>
              <div className="text-[10px] lg:text-sm">
                Dedicated team to address inquiries or issues at any time.
              </div>
            </div>
          </div>
          <div className="text-center space-y-3 lg:flex lg:space-y-0 lg:text-left lg:items-end lg:gap-10">
            <div>
              <img
                src={Project.src}
                alt="Project Reporting"
                className="m-auto w-10 h-9 lg:w-[72px] lg:h-[64px]"
              />
            </div>
            <div>
              <div className="font-bold text-xs lg:text-xl">
                Project Reporting
              </div>
              <div className="text-[10px] lg:text-sm">
                Provides transparent insights into progress, challenges and
                outcomes.
              </div>
            </div>
          </div>
          <div className="text-center space-y-3 lg:flex lg:space-y-0 lg:text-left lg:items-end lg:gap-10">
            <div>
              <img
                src={TwentyFour.src}
                alt="24x7 Client Support"
                className="m-auto w-10 h-9 lg:w-[72px] lg:h-[64px]"
              />
            </div>
            <div>
              <div className="font-bold text-xs lg:text-xl">
                24x7 Client Support
              </div>
              <div className="text-[10px] lg:text-sm">
                Ensures round-the-clock assistance, fostering customer
                satisfaction.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
