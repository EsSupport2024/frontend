import React from "react";
import image1 from "@/../public/assets/images/esSupport.png";
import {MoveUpRight} from "lucide-react";
import "../app/globals.css";

const HeroSection = () => {
  return (
    <section className="container mx-auto md:flex md:justify-between md:items-center md:px-20 px-4 py-16 md:py-32">
      <div className="text-center md:text-left space-y-3 md:space-y-10 md:max-w-[590px] p-8 md:p-0 animate-slideInFromLeft">
        <div className="text-[20px] md:text-[44px] font-bold text-primaryLightBlue">
          <div>Elevate excellence with</div>
          <span className="text-2xl md:text-[46px] text-primaryBlue">
            Cutting-Edge Facilities Management{" "}
          </span>
          solutions
        </div>
        <div className="text-[9px] md:text-base text-[#3F4751]">
          Discover a spectrum of services designed to optimize your business
          infrastructure and drive unparalleled efficiency
        </div>
        <div className="space-x-9">
          <a href="/services">
            <button className="bg-primaryBlue rounded md:rounded-lg text-white py-1.5 px-4 text-[9px] md:font-bold md:text-lg md:py-4 md:px-12">
              Explore services
            </button>
          </a>
          <a href="/contact-us">
            <button className="rounded md:rounded-lg border border-primaryBlue text-[9px] md:font-bold md:text-lg py-1 px-4 md:py-4 md:px-12">
              Connect now
              <MoveUpRight className="inline md:h-6 h-2" />
            </button>
          </a>
        </div>
      </div>
      <div className="px-11 md:p-0 mt-10 md:mt-0 animate-slideInFromBottom">
        <img
          src={image1.src}
          alt="management group discussion"
          className="rounded-md m-auto w-[266px] md:w-[700px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
