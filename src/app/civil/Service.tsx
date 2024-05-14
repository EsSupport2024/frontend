import React from "react";
import civil1 from "@/../public/assets/images/civil1.png";
import civil2 from "@/../public/assets/images/civil2.png";
import civil3 from "@/../public/assets/images/civil3.png";
import civil4 from "@/../public/assets/images/civil4.png";

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
              ES SUPPORT is India’s leading  diverse civil engineering
              contracting service, resulting from many years experience as main
              contractor in the execution of both large and small contracts
              across a varied spectrum. We have fostered a hard earned
              reputation for delivering quality projects, safely, on schedule
              and within budget for our clients.
            </div>

            <div className="mt-3 md:mt-10 text-[9px] w-3/4 md:text-base md:w-full text-justify m-auto md:m-0">
              <div className="md:mx-0 mt-2 md:mt-5 text-[9px] font-bold md:text-base">
                Our Civil Engineering and maintenance services includes
              </div>
              <ul className="ml-5 font-semibold">
                <li className="list-disc">Construction work</li>
                <li className="list-disc">
                  Maintenance work of any Type of Buildings.
                </li>
                <li className="list-disc">Renovation Work</li>
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 pb-20 pt-10 gap-2">
              <div className="md:col-span-2">
                <img src={civil1.src} />
              </div>
              <div>
                <img src={civil2.src} />
              </div>
              <div>
                <img src={civil3.src} />
              </div>
              <div className="md:col-span-2">
                <img src={civil4.src} />
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
                <span className="ml-16">MEP Services</span>
              </li>
              <li className="list-before list-none">
                <span className="ml-16 font-bold">
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
