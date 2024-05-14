import React from "react";
import bangalore from "@/../public/assets/icons/bangalore-office.png";
import corporate from "@/../public/assets/icons/corporate-office.png";
import mumbai from "@/../public/assets/icons/mumbai-office.png";
import dwarka from "@/../public/assets/icons/dwarka-office.png";
import gujrat from "@/../public/assets/icons/gujrat-office.png";
import registered from "@/../public/assets/icons/registered-office.png";

const Locations = () => {
  return (
    <section className="bg-lightOrange">
      <div className="container mx-auto px-4 py-16 md:px-24 md:py-32">
        <div className="md:text-4xl text-base font-bold text-center md:text-left">
          Other Office Locations
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-10">
          <div className="bg-darkGray text-white flex rounded-xl justify-center items-center px-5 pt-10 gap-5">
            <img src={registered.src} />
            <div className="space-y-5 md:w-[400px]">
              <div className="font-bold text-xs md:text-xl">
                Registered office
              </div>
              <div className="text-[10px] md:text-sm">
                100/1, AAjay Park, Naya Baar Najafgarh, New Delhi - 110043
              </div>
            </div>
          </div>
          <div className="bg-darkGray text-white flex rounded-xl justify-center items-center px-5 pt-10 gap-5">
            <img src={corporate.src} />
            <div className="space-y-5 md:w-[400px]">
              <div className="font-bold text-xs md:text-xl">
                Corporate office
              </div>
              <div className="text-[10px] md:text-sm">
                Shop no. 2, 2nd floor, Rati Ram Park Najafgarh, New Delhi -
                110043
              </div>
            </div>
          </div>
          <div className="bg-darkGray text-white flex rounded-xl justify-center items-center px-5 pt-10 gap-5">
            <img src={gujrat.src} />
            <div className="space-y-5 md:w-[400px]">
              <div className="font-bold text-xs md:text-xl">Gujarat office</div>
              <div className="text-[10px] md:text-sm">
                D 201, Sunrise Residency - 3, Chala, Vapi, Dist. Valsad, Gujrat
                - 396191
              </div>
            </div>
          </div>
          <div className="bg-darkGray text-white flex rounded-xl justify-center items-center px-5 pt-10 gap-5">
            <img src={bangalore.src} />
            <div className="space-y-5 md:w-[400px]">
              <div className="font-bold text-xs md:text-xl">
                Bangalore office
              </div>
              <div className="text-[10px] md:text-sm">
                198 CMH Road, 2nd Floor, Indiranagar, Bangalore - 560038.
              </div>
            </div>
          </div>
          <div className="bg-darkGray text-white flex rounded-xl justify-center items-center px-5 pt-10 gap-5">
            <img src={mumbai.src} />
            <div className="space-y-5 md:w-[400px]">
              <div className="font-bold text-xs md:text-xl">Mumbai office</div>
              <div className="text-[10px] md:text-sm">
                912 Sureshwari Techno IT Park Premises CHS, Link Road, Eksar
                Koliwada, Mumbai Suburban, Maharashtra, 400092
              </div>
            </div>
          </div>
          <div className="bg-darkGray text-white flex rounded-xl justify-center items-center px-5 pt-10 gap-5">
            <img src={dwarka.src} />
            <div className="space-y-5 md:w-[400px]">
              <div className="font-bold text-xs md:text-xl">Dwarka office</div>
              <div className="text-[10px] md:text-sm">
                9th floor unit no-905 Vegas mall sec-14 Dwarka, Delhi
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
