import React from "react";

function Map() {
  return (
    <div>
      <section className="text-gray-600 body-font relative lg:px-36 bg-lightOrange">
        <div className=" px-6 md:px-14 pb-18 mx-auto flex">
          <div className="bg-gray-300 rounded-lg overflow-hidden py-40 flex justify-center w-full relative px-10">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4971.447374985197!2d77.04441028056783!3d28.595111219563087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b001a953c77%3A0xc3dc01169dcf3621!2sES%20SUPPORT%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1737273046945!5m2!1sen!2sin"
              style={{filter: "grayscale(1) contrast(1.2) opacity(0.4)"}}
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  T-10, 3rd Floor, HL Plaza, Plot No. 9, Pocket-2, Sector-12,
                  Dwarka, New Delhi-110078.
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  className="text-indigo-500 leading-relaxed"
                  href="mailto: support@essupport.in"
                >
                  support@essupport.in
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">
                  <a href="tel: 011-49953499">011-49953499 </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Map;
