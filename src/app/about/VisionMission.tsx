import React from "react";
import vision from "@/../public/assets/images/vision-mission.png";

const VisionMission = () => {
  return (
    <section className="bg-lightOrange">
      <div className="container mx-auto px-4 py-4 lg:px-24 lg:py-32">
        <div className="grid grid-cols-1 justify-center items-center lg:grid-cols-2 m-auto w-3/4 lg:w-full">
          <div className="order-2">
            <div className="space-y-5 text-[9px] lg:text-base text-justify mt-10 lg:col-span-2">
              <div className="lg:text-4xl text-base font-bold text-center lg:text-left">
                Vision
              </div>
              <div>
                At our facility support company, our vision is clear and simple:
                to redefine excellence in service. We strive to be the go-to
                partner for seamless facility management, ensuring client
                satisfaction through reliability, efficiency, and a commitment
                to exceeding expectations. Our vision is to create spaces that
                thrive, supported by our dedication to quality and
                customer-centric solutions.
              </div>
            </div>
            <div className="space-y-5 text-[9px] lg:text-base text-justify mt-10 lg:col-span-2">
              <div className="lg:text-4xl text-base font-bold text-center lg:text-left">
                Mission
              </div>
              <div>
                Our mission is simple yet profound: to elevate the standards of
                facility support. We strive to ensure our clients experience
                unparalleled service, emphasizing reliability, efficiency, and a
                commitment to excellence. Through our dedicated efforts, we aim
                to create environments that inspire productivity, satisfaction,
                and peace of mind.
              </div>
            </div>
          </div>
          <div className="rounded-lg m-auto order-1 lg:order-2">
            <img src={vision.src} alt="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
