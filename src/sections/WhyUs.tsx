import React from "react";
import TwentyFour from "@/../public/assets/icons/twentyfour.png";
import Project from "@/../public/assets/icons/project.png";
import dedicated from "@/../public/assets/icons/dedicated.png";
import invest from "@/../public/assets/icons/invest.png";

const WhyUs = () => {
  return (
    <section className="bg-darkGray text-white">
      <div className="container mx-auto px-4 py-16 md:px-24 md:py-32">
        <div className="text-center md:text-left font-bold md:text-4xl">
          Why choose us?
        </div>
        <div className="mt-10 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-10 md:items-center">
          <div className="text-center space-y-3 md:flex md:space-y-0 md:text-left md:items-end md:gap-10">
            <div>
              <img
                src={invest.src}
                alt="cost effective"
                className="m-auto w-10 h-9 md:w-[72px] md:h-[64px]"
              />
            </div>
            <div>
              <div className="font-bold text-xs md:text-xl">Cost Efficient</div>
              <div className="text-[10px] md:text-sm">
                Achieving optimal results with minimal expenditure.
              </div>
            </div>
          </div>
          <div className="text-center space-y-3 md:flex md:space-y-0 md:text-left md:items-end md:gap-10">
            <div>
              <img
                src={dedicated.src}
                alt="dedicated group at your service"
                className="m-auto w-10 h-9 md:w-[72px] md:h-[64px]"
              />
            </div>
            <div>
              <div className="font-bold text-xs md:text-xl">
                Dedicated Teams
              </div>
              <div className="text-[10px] md:text-sm">
                Dedicated team to address inquiries or issues at any time.
              </div>
            </div>
          </div>
          <div className="text-center space-y-3 md:flex md:space-y-0 md:text-left md:items-end md:gap-10">
            <div>
              <img
                src={Project.src}
                alt="Project Reporting"
                className="m-auto w-10 h-9 md:w-[72px] md:h-[64px]"
              />
            </div>
            <div>
              <div className="font-bold text-xs md:text-xl">
                Project Reporting
              </div>
              <div className="text-[10px] md:text-sm">
                Provides transparent insights into progress, challenges and
                outcomes.
              </div>
            </div>
          </div>
          <div className="text-center space-y-3 md:flex md:space-y-0 md:text-left md:items-end md:gap-10">
            <div>
              <img
                src={TwentyFour.src}
                alt="24x7 Client Support"
                className="m-auto w-10 h-9 md:w-[72px] md:h-[64px]"
              />
            </div>
            <div>
              <div className="font-bold text-xs md:text-xl">
                24x7 Client Support
              </div>
              <div className="text-[10px] md:text-sm">
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
