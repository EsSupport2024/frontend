import React from "react";
import service1 from "@/../public/assets/images/service1.png";
import service2 from "@/../public/assets/images/service2.png";
import service3 from "@/../public/assets/images/service3.png";
import service4 from "@/../public/assets/images/service4.png";
import service5 from "@/../public/assets/images/service5.png";
import service6 from "@/../public/assets/images/service6.png";

const Services = () => {
  return (
    <section className="bg-lightOrange">
      <div className="container mx-auto lg:px-20 px-4 py-5 lg:pt-36">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 lg:px-20 m-auto">
          <div
            style={{"--image-url": `url(${service1.src})`} as {}}
            className="bg-[image:var(--image-url)] w-64 h-72 lg:w-[341px] lg:h-[384px] rounded-lg m-auto"
          >
            <div className="bg-gradient-to-t from-[#162023] size-full justify-end p-5 flex flex-col gap-2 lg:gap-5">
              <div className="font-bold text-xs lg:text-xl text-white">
                Facility Management
                <div>(Soft Services)</div>
              </div>
              <div className="text-[#EFFEFF] font-normal text-[9px] lg:text-base">
                Elevating efficiency through integrated facilities management
                solutions.
              </div>
              <a
                href="/services/facility"
                className="border border-[#EFFEFF] text-[#EFFEFF] rounded-md w-fit py-1 px-3 lg:py-2 lg:px-4 text-[10px] lg:text-xs font-normal"
              >
                Know more
              </a>
            </div>
          </div>

          <div
            style={{"--image-url": `url(${service4.src})`} as {}}
            className="bg-[image:var(--image-url)] w-64 h-72 lg:w-[341px] lg:h-[384px] rounded-lg m-auto"
          >
            <div className="bg-gradient-to-t from-[#162023] size-full justify-end p-5 flex flex-col gap-2 lg:gap-5">
              <div className="font-bold text-xs lg:text-xl text-white">
                MEP Services
              </div>
              <div className="text-[#EFFEFF] font-normal text-[9px] lg:text-base">
                Engineering excellence for seamless mechanical, electrical &
                plumbing solutions.
              </div>
              <a
                href="/services/mep"
                className="border border-[#EFFEFF] text-[#EFFEFF] rounded-md w-fit py-1 px-3 lg:py-2 lg:px-4 text-[10px] lg:text-xs font-normal"
              >
                Know more
              </a>
            </div>
          </div>

          <div
            style={{"--image-url": `url(${service2.src})`} as {}}
            className="bg-[image:var(--image-url)] w-64 h-72 lg:w-[341px] lg:h-[384px] rounded-lg m-auto"
          >
            <div className="bg-gradient-to-t from-[#162023] size-full justify-end p-5 flex flex-col gap-2 lg:gap-5">
              <div className="font-bold text-xs lg:text-xl text-white">
                IT Services
              </div>
              <div className="text-[#EFFEFF] font-normal text-[9px] lg:text-base">
                Allow your businesses to access the technical tools and
                information for your operational processes and daily tasks
              </div>
              <a
                href="/services/it"
                className="border border-[#EFFEFF] text-[#EFFEFF] rounded-md w-fit py-1 px-3 lg:py-2 lg:px-4 text-[10px] lg:text-xs font-normal"
              >
                Know more
              </a>
            </div>
          </div>

          <div
            style={{"--image-url": `url(${service6.src})`} as {}}
            className="bg-[image:var(--image-url)] w-64 h-72 lg:w-[341px] lg:h-[384px] rounded-lg m-auto"
          >
            <div className="bg-gradient-to-t from-[#162023] size-full justify-end p-5 flex flex-col gap-2 lg:gap-5">
              <div className="font-bold text-xs lg:text-xl text-white">
                Security Services
              </div>
              <div className="text-[#EFFEFF] font-normal text-[9px] lg:text-base">
                Ensuring peace of mind through vigilant protection, where safety
                meets expertise.
              </div>
              <a
                href="/services/security"
                className="border border-[#EFFEFF] text-[#EFFEFF] rounded-md w-fit py-1 px-3 lg:py-2 lg:px-4 text-[10px] lg:text-xs font-normal"
              >
                Know more
              </a>
            </div>
          </div>

          <div
            style={{"--image-url": `url(${service3.src})`} as {}}
            className="bg-[image:var(--image-url)] w-64 h-72 lg:w-[341px] lg:h-[384px] rounded-lg m-auto"
          >
            <div className="bg-gradient-to-t from-[#162023] size-full justify-end p-5 flex flex-col gap-2 lg:gap-5">
              <div className="font-bold text-xs lg:text-xl text-white">
                Operation and Maintenance Services
              </div>
              <div className="text-[#EFFEFF] font-normal text-[9px] lg:text-base">
                Fostering success by providing skilled professionals to drive
                your technology initiatives forward.
              </div>
              <a
                href="/services/operation"
                className="border border-[#EFFEFF] text-[#EFFEFF] rounded-md w-fit py-1 px-3 lg:py-2 lg:px-4 text-[10px] lg:text-xs font-normal"
              >
                Know more
              </a>
            </div>
          </div>

          <div
            style={{"--image-url": `url(${service5.src})`} as {}}
            className="bg-[image:var(--image-url)] w-64 h-72 lg:w-[341px] lg:h-[384px] rounded-lg m-auto"
          >
            <div className="bg-gradient-to-t from-[#162023] size-full justify-end p-5 flex flex-col gap-2 lg:gap-5">
              <div className="font-bold text-xs lg:text-xl text-white">
                Civil Engineering & Maintenance Services
              </div>
              <div className="text-[#EFFEFF] font-normal text-[9px] lg:text-base">
                Shaping environments that transcend functionality, defining
                spaces where design meets precision and dreams become reality.
              </div>
              <a
                href="/services/civil"
                className="border border-[#EFFEFF] text-[#EFFEFF] rounded-md w-fit py-1 px-3 lg:py-2 lg:px-4 text-[10px] lg:text-xs font-normal"
              >
                Know more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
