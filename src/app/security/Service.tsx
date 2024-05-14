import React from "react";
import security1 from "@/../public/assets/images/security1.png";
import security2 from "@/../public/assets/images/security2.png";
import security3 from "@/../public/assets/images/security3.png";
import security4 from "@/../public/assets/images/security4.png";

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
              Drawing from our profound security expertise, we possess a
              distinctive vantage point that unveils an alternate realm – a more
              secure world teeming with possibilities and advancement.
              Presently, we steadfastly assume the role of guardians, committed
              to safeguarding what truly holds significance: the well-being and
              protection of individuals and assets globally. Our unwavering
              dedication propels us to contribute relentlessly towards fostering
              a safer environment.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 pb-20 pt-10 gap-2">
              <div className="md:col-span-2">
                <img src={security1.src} />
              </div>
              <div>
                <img src={security2.src} />
              </div>
              <div>
                <img src={security3.src} />
              </div>
              <div className="md:col-span-2">
                <img src={security4.src} />
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
                <span className="ml-16 font-bold">Security Services</span>
              </li>
              <li className="list-before list-none">
                <span className="ml-16">MEP Services</span>
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
