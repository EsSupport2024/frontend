import React from "react";
import security1 from "@/../public/assets/images/security1.png";
import security2 from "@/../public/assets/images/security2.png";
import security3 from "@/../public/assets/images/security3.png";
import security4 from "@/../public/assets/images/security4.png";
import {serviceList} from "../../page";
import classNames from "classnames";

const Service = () => {
  return (
    <section className="bg-lightOrange">
      <div className="container mx-auto px-4 pt-16 lg:px-24 lg:pt-32">
        <div className="lg:grid lg:grid-cols-2 lg:gap-10">
          <div>
            <div className="lg:text-4xl text-base font-bold text-center lg:text-left">
              Our services
            </div>
            <div className="mt-5 lg:mt-10 text-[9px] w-3/4 lg:w-full lg:text-base text-justify m-auto lg:m-0">
              Drawing from our profound security expertise, we possess a
              distinctive vantage point that unveils an alternate realm – a more
              secure world teeming with possibilities and advancement.
              Presently, we steadfastly assume the role of guardians, committed
              to safeguarding what truly holds significance: the well-being and
              protection of individuals and assets globally. Our unwavering
              dedication propels us to contribute relentlessly towards fostering
              a safer environment.
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 pb-20 pt-10 gap-2">
              <div className="lg:col-span-2">
                <img src={security1.src} />
              </div>
              <div>
                <img src={security2.src} className="h-full" />
              </div>
              <div>
                <img src={security3.src} className="h-full" />
              </div>
              <div className="lg:col-span-2">
                <img src={security4.src} />
              </div>
            </div>
          </div>
          <div className="border-l-4 border-orange rounded-box relative hidden lg:block">
            <div className="flex flex-col gap-5 h-full">
              <div className="h-[200px] flex items-end justify-start p-10 lg:text-2xl font-bold">
                Our Services
              </div>
              {serviceList.map((item, idx) => (
                <a className="list-before" href={item.url} key={idx}>
                  <span
                    className={classNames("ml-16", {
                      "font-bold": item.url === "/security",
                    })}
                  >
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
