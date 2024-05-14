import React from "react";

const Certification = () => {
  return (
    <section className="bg-lightOrange" id="certification">
      <div className="container mx-auto px-4 py-16 md:px-24 md:py-32">
        <div className="md:text-4xl text-base font-bold text-center md:text-left">
          Certifications
        </div>
        <div className="md:w-2/4 w-3/4 text-justify mt-2 m-auto md:mx-0">
          ES Support Company, where our commitment to transparency and
          excellence is underscored by the array of certifications we proudly
          hold
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-10 w-3/4 md:w-full m-auto">
          <div className="rounded-xl bg-darkGray justify-end p-5 flex flex-col gap-5">
            <div className="font-bold text-xs md:text-xl text-white">
              Incorporation Certificate as a Private Limited Company
            </div>
            <div className="text-[#EFFEFF] text-[9px] md:text-base text-justify">
              This certificate signifies our formal establishment as a private
              limited company, a legal structure that ensures a distinct
              separation between the business and its owners. It reinforces our
              commitment to legal compliance, governance, and accountability.
            </div>
            <button className="bg-white rounded w-fit py-1 px-3 md:py-2 md:px-4 text-[10px] md:text-xs font-normal">
              Watch Now
            </button>
          </div>
          <div className="rounded-xl bg-darkGray justify-end p-5 flex flex-col gap-5">
            <div className="font-bold text-xs md:text-xl text-white">
              License of Electrical Contractors
            </div>
            <div className="text-[#EFFEFF] text-[9px] md:text-base text-justify">
              Holding a license as electrical contractors demonstrates our
              expertise and authorization to undertake electrical projects. This
              certification assures clients and partners that our team is
              qualified and compliant with industry standards, ensuring the safe
              and reliable execution of electrical services.
            </div>
            <button className="bg-white rounded w-fit py-1 px-3 md:py-2 md:px-4 text-[10px] md:text-xs font-normal">
              Watch Now
            </button>
          </div>
          <div className="rounded-xl bg-darkGray justify-end p-5 flex flex-col gap-5 md:col-span-2 md:py-10">
            <div className="font-bold text-xs md:text-xl text-white">
              Udyam Registration Certificate
            </div>
            <div className="text-[#EFFEFF] text-[9px] md:text-base text-justify">
              The Udyam registration certificate is a testament to our
              recognition under the Udyam Registration, a government initiative
              to promote and support small and medium-sized enterprises (SMEs).
              This certification acknowledges our contribution to economic
              development and facilitates various benefits available to MSMEs.
            </div>
            <button className="bg-white rounded w-fit py-1 px-3 md:py-2 md:px-4 text-[10px] md:text-xs font-normal">
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
