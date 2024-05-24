import React from "react";

const OurValues = () => {
  return (
    <section className="bg-lightOrange">
      <div className="container mx-auto px-4 py-4 lg:px-24 lg:py-32">
        <div className="text-center pb-5 lg:hidden sm:block">
          <div className="lg:text-left font-bold lg:text-4xl">Our Values</div>
        </div>
        <div className="flex flex-wrap w-3/4 m-auto lg:w-full justify-center lg:justify-normal gap-5 text-white">
          <div className="card-bg-1 lg:w-[500px] lg:h-[300px] flex flex-col justify-center rounded-md px-5 py-10 space-y-3 ">
            <div className="font-bold text-xs lg:text-xl">
              Happy Individuals
            </div>
            <div className="text-[10px] lg:text-sm">
              We foster a workplace atmosphere that promotes joy and active
              engagement among individuals in their respective roles.
            </div>
          </div>
          <div>
            <div className="card-bg-2 lg:w-[800px] lg:h-[240px] flex flex-col justify-center rounded-md px-5 py-10 space-y-3">
              <div className="font-bold text-xs lg:text-xl">Clear Purpose</div>
              <div className="text-[10px] lg:text-sm">
                We are dedicated to formulating meticulously planned strategies,
                flawlessly executed by a collaborative team, harmonizing
                essential resources seamlessly.
              </div>
            </div>
            <div className="text-4xl text-black hidden lg:block font-bold mt-5 ml-14">
              Our Value
            </div>
          </div>
          <div className="card-bg-3 lg:w-[800px] lg:h-[240px] flex flex-col justify-center rounded-md px-5 py-10 space-y-3">
            <div className="font-bold text-xs lg:text-xl">
              Encourage Positive Contributions
            </div>
            <div className="text-[10px] lg:text-sm">
              Our dedication revolves around nurturing positive corporate
              citizenship, guided by the principles of ethical governance.
            </div>
          </div>
          <div className="lg:relative">
            <div className="card-bg-4 rounded-md lg:w-[500px]  flex flex-col justify-center  lg:h-[300px] lg:absolute -top-[59px] px-5 py-10 space-y-3">
              <div className="font-bold text-xs lg:text-xl">
                Daily Advancements
              </div>
              <div className="text-[10px] lg:text-sm">
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
