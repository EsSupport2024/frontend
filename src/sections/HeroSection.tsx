import React from "react";
import image1 from "@/../public/assets/images/esSupport.png";
import {MoveUpRight} from "lucide-react";
import "../app/globals.css";

const HeroSection = () => {
  return (
    <section className="container mx-auto lg:flex lg:justify-between lg:items-center lg:px-20 px-4 py-16 lg:py-32">
      <div className="text-center lg:text-left space-y-3 lg:space-y-10 lg:max-w-[590px] p-8 lg:p-0 animate-slideInFromLeft">
        <div className="text-[20px] lg:text-[44px] font-bold text-primaryLightBlue">
          <div>Elevate excellence with</div>
          <span className="text-2xl lg:text-[46px] text-primaryBlue">
            Cutting-Edge Facilities Management{" "}
          </span>
          solutions
        </div>
        <div className="text-[9px] lg:text-base text-[#3F4751]">
          Discover a spectrum of services designed to optimize your business
          infrastructure and drive unparalleled efficiency
        </div>
        <div className="space-x-9">
          <a href="/services">
            <button className="bg-primaryBlue rounded lg:rounded-lg text-white py-1.5 px-4 text-[9px] lg:font-bold lg:text-lg lg:py-4 lg:px-12">
              Explore services
            </button>
          </a>
          <a href="/contact-us">
            <button className="rounded lg:rounded-lg border border-primaryBlue text-[9px] lg:font-bold lg:text-lg py-1 px-4 lg:py-4 lg:px-12">
              Connect now
              <MoveUpRight className="inline lg:h-6 h-2" />
            </button>
          </a>
        </div>
      </div>
      <div className="px-11 lg:p-0 mt-10 lg:mt-0 animate-slideInFromBottom">
        <img
          src={image1.src}
          alt="management group discussion"
          className="rounded-md m-auto w-[466px] lg:w-[700px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
