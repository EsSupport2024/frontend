import React from "react";

const OurValues = () => {
  return (
    <section className="bg-lightOrange">
      <div className="container mx-auto px-4 py-4 md:px-24 md:py-32">
        <div className="text-center pb-5 md:hidden sm:block">
          <div className="md:text-left font-bold md:text-4xl">Our Values</div>
        </div>
        <div className="flex flex-wrap w-3/4 m-auto md:w-full justify-center md:justify-normal gap-5 text-white">
          <div className="card-bg-1 md:w-[500px] md:h-[300px] flex flex-col justify-center rounded-md px-5 py-10 space-y-3 ">
            <div className="font-bold text-xs md:text-xl">
              Happy Individuals
            </div>
            <div className="text-[10px] md:text-sm">
              We foster a workplace atmosphere that promotes joy and active
              engagement among individuals in their respective roles.
            </div>
          </div>
          <div>
            <div className="card-bg-2 md:w-[800px] md:h-[240px] flex flex-col justify-center rounded-md px-5 py-10 space-y-3">
              <div className="font-bold text-xs md:text-xl">Clear Purpose</div>
              <div className="text-[10px] md:text-sm">
                We are dedicated to formulating meticulously planned strategies,
                flawlessly executed by a collaborative team, harmonizing
                essential resources seamlessly.
              </div>
            </div>
            <div className="text-4xl text-black hidden md:block font-bold mt-5 ml-14">
              Our Value
            </div>
          </div>
          <div className="card-bg-3 md:w-[800px] md:h-[240px] flex flex-col justify-center rounded-md px-5 py-10 space-y-3">
            <div className="font-bold text-xs md:text-xl">
              Encourage Positive Contributions
            </div>
            <div className="text-[10px] md:text-sm">
              Our dedication revolves around nurturing positive corporate
              citizenship, guided by the principles of ethical governance.
            </div>
          </div>
          <div className="md:relative">
            <div className="card-bg-4 rounded-md md:w-[500px]  flex flex-col justify-center  md:h-[300px] md:absolute -top-[59px] px-5 py-10 space-y-3">
              <div className="font-bold text-xs md:text-xl">
                Daily Advancements
              </div>
              <div className="text-[10px] md:text-sm">
                Harnessing technology and innovation to continually improve our
                operational excellence.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
