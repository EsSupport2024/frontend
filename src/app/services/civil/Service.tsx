import React from "react";
import civil1 from "@/../public/assets/images/civil1.png";
import civil2 from "@/../public/assets/images/civil2.png";
import civil3 from "@/../public/assets/images/civil3.png";
import civil4 from "@/../public/assets/images/civil4.png";
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
              ES SUPPORT is India’s leading  diverse civil engineering
              contracting service, resulting from many years experience as main
              contractor in the execution of both large and small contracts
              across a varied spectrum. We have fostered a hard earned
              reputation for delivering quality projects, safely, on schedule
              and within budget for our clients.
            </div>

            <div className="mt-3 lg:mt-10 text-[9px] w-3/4 lg:text-base lg:w-full text-justify m-auto lg:m-0">
              <div className="lg:mx-0 mt-2 lg:mt-5 text-[9px] font-bold lg:text-base">
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
            <div className="grid grid-cols-1 lg:grid-cols-3 pb-20 pt-10 gap-2">
              <div className="lg:col-span-2">
                <img src={civil1.src} />
              </div>
              <div>
                <img src={civil2.src} className="h-full" />
              </div>
              <div>
                <img src={civil3.src} className="h-full" />
              </div>
              <div className="lg:col-span-2">
                <img src={civil4.src} />
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
                      "font-bold": item.url === "/civil",
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
