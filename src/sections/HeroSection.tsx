"use client";
import React from "react";
import image1 from "@/../public/assets/images/image3.jpeg";
import {MoveUpRight} from "lucide-react";
import Image from "next/image";
import useDeviceType from "@/hooks/useDeviceType";
import "../app/globals.css";
import classNames from "classnames";

const HeroSection = () => {
  const device = useDeviceType();
  const web = device === "web";

  return (
    <section className="container mx-auto md:flex md:justify-between md:px-20 px-4 py-16 md:py-36">
      <div className="text-center md:text-left space-y-3 md:space-y-10 md:max-w-[590px] p-8 md:p-0">
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
              <MoveUpRight className="inline" size={web ? 22 : 10} />
            </button>
          </a>
        </div>
      </div>
      <div className="px-11 md:p-0 mt-10 md:mt-0">
        <div
          className="relative big-box"
          style={
            {
              "--box-width": web ? "200px" : "99px",
              "--box-height": web ? "110px" : "61px",
              "--box-after-width": web ? "150px" : "76px",
              "--box-after-height": web ? "91px" : "46px",
            } as {}
          }
        >
          <div
            className="relative small-box"
            style={
              {
                "--box-width": web ? "60px" : "26px",
                "--box-height": web ? "60px" : "26px",
                "--box-radius": web ? "10px" : "8px",
              } as {}
            }
          >
            <div className="relative frame-border">
              <Image
                src={image1.src}
                alt="management group discussion"
                className={classNames("rounded-md m-auto", {
                  "!rounded-2xl": web,
                })}
                width={web ? 645 : 266}
                height={web ? 428 : 147}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
