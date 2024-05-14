import React from "react";
import mep1 from "@/../public/assets/images/mep1.png";
import mep2 from "@/../public/assets/images/mep2.png";
import mep3 from "@/../public/assets/images/mep3.png";
import mep4 from "@/../public/assets/images/mep4.png";

const Service = () => {
  return (
    <section className="bg-lightOrange">
      <div className="container mx-auto px-4 pt-16 md:px-24 md:pt-32">
        <div className="md:grid md:grid-cols-2 md:gap-10">
          <div>
            <div className="md:text-4xl text-base font-bold text-center md:text-left">
              Our services
            </div>
            <div className="mt-5 md:mt-10 text-[9px] w-3/4 md:w-full md:text-base text-justify m-auto md:m-0">
              Elevate Your Infrastructure with ES Support&apos;s Cutting-Edge
              MEP Services. At ES Support, we take pride in delivering
              comprehensive Mechanical, Electrical, and Plumbing (MEP) services
              that form the backbone of modern infrastructure. Our MEP solutions
              are designed to optimize the functionality, efficiency, and
              sustainability of your facilities, ensuring seamless integration
              and performance across all MEP systems.
            </div>
            <div className="mt-3 md:mt-10 text-[9px] w-3/4 md:w-full md:text-base text-justify m-auto md:m-0">
              Mechanical services, encompassing HVAC systems and more, are
              tailored to create comfortable and energy-efficient environments.
              Our Electrical services ensure reliable power distribution,
              lighting solutions, and integrated electrical systems that meet
              the unique needs of your facility. Meanwhile, our Plumbing
              services cover everything from water supply to drainage,
              emphasizing efficiency and adherence to industry standards.
            </div>
            <div className="mt-3 md:mt-10 text-[9px] w-3/4 md:text-base md:w-full text-justify m-auto md:m-0">
              ES Support&apos;s MEP services are characterized by a commitment
              to innovation and technical excellence. Our experienced engineers
              and technicians collaborate to provide customized solutions that
              align with the specific requirements of your project, whether
              it&apos;s a commercial space, industrial facility, or residential
              development.
            </div>
            <div className="mt-3 md:mt-10 text-[9px] w-3/4 md:text-base md:w-full text-justify m-auto md:m-0">
              By choosing ES Support for MEP services, you are opting for a
              partner dedicated to enhancing the overall performance and
              sustainability of your infrastructure. With a focus on quality,
              reliability, and cost-effectiveness, we ensure that your MEP
              systems operate seamlessly, contributing to the long-term success
              of your projects.
            </div>
            <div className="mt-3 md:mt-10 text-[9px] w-3/4 md:text-base md:w-full text-justify m-auto md:m-0">
              Experience the synergy of cutting-edge technology and unparalleled
              expertise with ES Support&apos;s MEP services. Trust us to be your
              reliable partner in building and maintaining infrastructures that
              stand the test of time.
            </div>
            <div className="mt-3 md:mt-10 text-[9px] w-3/4 md:text-base md:w-full text-justify m-auto md:m-0">
              <div className="md:mx-0 mt-2 md:mt-5 text-[9px] font-bold md:text-base">
                Our MEP services includes
              </div>
              <ul className="ml-5">
                <li className="list-disc">
                  <span className="font-semibold">Mechanical engineering </span>
                  (Space heating, Air conditioning, Mechanical ventilation)
                </li>
                <li className="list-disc">
                  <span className="font-semibold">Electrical engineering </span>
                  (sub-station,DG SETS,UPS)
                </li>
                <li className="list-disc">
                  <span className="font-semibold">Plumbing engineering </span>
                  (Water Distribution System,Heating BoilerPlant)
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 pb-20 pt-10 gap-2">
              <div className="md:col-span-2">
                <img src={mep1.src} />
              </div>
              <div>
                <img src={mep4.src} />
              </div>
              <div>
                <img src={mep3.src} />
              </div>
              <div className="md:col-span-2">
                <img src={mep2.src} />
              </div>
            </div>
          </div>
          <div className="border-l-4 border-orange rounded-box relative hidden md:block">
            <div className="flex flex-col gap-5 h-full">
              <div className="h-[200px] flex items-end justify-start p-10 md:text-2xl font-bold">
                Our Services
              </div>
              <li className="list-before list-none">
                <span className="ml-16">
                  Operation and Maintenance Services
                </span>
              </li>
              <li className="list-before list-none">
                <span className="ml-16">
                  Facility Management (Soft Services)
                </span>
              </li>
              <li className="list-before list-none">
                <span className="ml-16">IT Services</span>
              </li>
              <li className="list-before list-none">
                <span className="ml-16">Security Services</span>
              </li>
              <li className="list-before list-none">
                <span className="ml-16 font-bold">MEP Services</span>
              </li>
              <li className="list-before list-none">
                <span className="ml-16">
                  Civil Engineering & Maintenance Services
                </span>
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
