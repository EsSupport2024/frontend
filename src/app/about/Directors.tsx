import React from "react";
import director from "@/../public/assets/images/director.png";

const Directors = () => {
  return (
    <section className="bg-lightOrange" id="director">
      <div className="container mx-auto px-4 py-16 md:px-24 md:py-32">
        <div className="text-center pb-5 md:hidden sm:block">
          <div className="font-bold">From the Director&apos;s desk</div>
          <div className="text-xs font-bold">
            Kishlay Thakur, Founder & Director of ES Support.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center md:items-end w-3/4 md:w-full m-auto">
          <div className="relative h-[251px] md:h-80 md:w-[309px]">
            <div className="absolute h-full w-20 bg-black rounded-t-lg"></div>
            <img
              src={director.src}
              className="md:w-60 w-44 m-auto md:h-72 h-52 z-10 absolute bottom-0 left-2/4 -translate-x-2/4"
            />
            <div className="absolute h-3/4 w-20 bg-[#E2FCFF] rounded-t-lg right-0 bottom-0"></div>
          </div>
          <div className="space-y-5 text-[9px] md:text-base text-justify mt-10 md:col-span-2">
            <div className="text-4xl text-black hidden md:block font-bold">
              From the Director&apos;s desk
            </div>
            <div className="text-lg text-black hidden md:block font-bold">
              Kishlay Thakur, Founder & Director of ES Support.
            </div>
            <div>
              Armed with a Bachelor&apos;s degree in Electrical Engineering
              (B.Tech), and brings over 12 years of invaluable experience to our
              dynamic team. His extensive background in the field not only
              reflects his technical prowess but also underscores a wealth of
              knowledge acquired through years of hands-on expertise.
            </div>
            <div>
              leadership is marked by a commitment to innovation, a keen
              understanding of industry trends, and a dedication to delivering
              unparalleled support services. With a proven track record of
              successful project management and a forward-thinking approach, is
              instrumental in ensuring that our clients receive top-notch
              assistance and solutions.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directors;
