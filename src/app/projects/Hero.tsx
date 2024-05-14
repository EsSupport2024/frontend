import React from "react";
import fileSetting from "@/../public/assets/icons/fileSetting.png";

const Hero = () => {
  return (
    <section className="container mx-auto md:px-20 px-4 py-2 md:py-10 text-center">
      <div className="container mx-auto px-4 py-16 md:px-24">
        <div className="md:text-4xl text-base font-bold text-center md:text-left md:py-10">
          Our Major Project
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-5 mt-10">
          <div className="rounded-xl bg-darkGray justify-between p-5 flex flex-col gap-5">
            <div>
              <img src={fileSetting.src} className="bg-white rounded p-1" />
            </div>
            <div className="text-[#EFFEFF] text-[9px] md:text-base text-justify">
              Annual Operation and maintenance contract for E & M Installations
              of Terminal Building and other ancillary Building
            </div>
          </div>
          <div className="rounded-xl bg-darkGray md:col-span-2 justify-between p-5 flex flex-col gap-5">
            <div>
              <img src={fileSetting.src} className="bg-white rounded p-1" />
            </div>
            <div className="text-[#EFFEFF] text-[9px] md:text-base text-justify">
              Routine maintenance of fire fighting equipment of new ATC tower,
              technical building, new hanger, new fire station and E&M workshop
            </div>
            <div className="text-[#EFFEFF] text-[9px] md:text-base text-justify">
              B.P.I Airport, Bhubaneswar
            </div>
          </div>
          <div className="rounded-xl bg-darkGray justify-between p-5 flex flex-col gap-5">
            <div>
              <img src={fileSetting.src} className="bg-white rounded p-1" />
            </div>
            <div className="text-[#EFFEFF] text-[9px] md:text-base text-justify">
              Providing manpower on outsource basis
            </div>
            <div className="text-[#EFFEFF] text-[9px] md:text-base text-justify">
              O/o Sagarmala Development Company Limited, New Delhi
            </div>
          </div>

          <div className="rounded-xl bg-darkGray justify-between p-5 flex flex-col gap-5">
            <div>
              <img src={fileSetting.src} className="bg-white rounded p-1" />
            </div>
            <div className="text-[#EFFEFF] text-[9px] md:text-base text-justify">
              Repair & Maintenance of Electric Sub Station and and rising main
              switch fuse assembly at Kalindi
            </div>
            <div className="text-[#EFFEFF] text-[9px] md:text-base text-justify">
              Bhawan, CWC, New Delhi at Kalindi
            </div>
          </div>

          <div className="rounded-xl bg-darkGray justify-between p-5 flex flex-col gap-5">
            <div>
              <img src={fileSetting.src} className="bg-white rounded p-1" />
            </div>
            <div className="text-[#EFFEFF] text-[9px] md:text-base text-justify">
              Contract for IT support.
            </div>
            <div className="text-[#EFFEFF] text-[9px] md:text-base text-justify">
              ESIC Medical Hospital Andheri
            </div>
          </div>

          <div className="rounded-xl bg-darkGray justify-between p-5 md:col-span-2 flex flex-col gap-5">
            <div>
              <img src={fileSetting.src} className="bg-white rounded p-1" />
            </div>
            <div className="text-[#EFFEFF] text-[9px] md:text-base text-justify">
              Operation & Maintenance of fire fighting, electrical, TL gantry/
              process operations, LPG Pump house & STP/ETP/RO system and store
              keeping
            </div>
            <div className="text-[#EFFEFF] text-[9px] md:text-base text-justify">
              PUNE LPG PLANT
            </div>
          </div>

          <div className="rounded-xl bg-darkGray justify-between p-5 flex flex-col gap-5">
            <div>
              <img src={fileSetting.src} className="bg-white rounded p-1" />
            </div>
            <div className="text-[#EFFEFF] text-[9px] md:text-base text-justify">
              Contract for housekeeping services at Government Hospital.
            </div>
            <div className="text-[#EFFEFF] text-[9px] md:text-base text-justify">
              North West Delhi
            </div>
          </div>

          <div className="rounded-xl bg-darkGray justify-between p-5 flex flex-col gap-5">
            <div>
              <img src={fileSetting.src} className="bg-white rounded p-1" />
            </div>
            <div className="text-[#EFFEFF] text-[9px] md:text-base text-justify">
              Annual repair & maintenance of resi and non-resi buildings
            </div>
            <div className="text-[#EFFEFF] text-[9px] md:text-base text-justify">
              26 SCG NSG MUMBAI
            </div>
          </div>
          <div className="rounded-xl bg-darkGray justify-between p-5 flex flex-col md:col-span-2 gap-5">
            <div>
              <img src={fileSetting.src} className="bg-white rounded p-1" />
            </div>
            <div className="text-[#EFFEFF] text-[9px] md:text-base text-justify">
              Annual repair & maintenance of resi and non-resi buildings
            </div>
            <div className="text-[#EFFEFF] text-[9px] md:text-base text-justify">
              26 SCG NSG MUMBAI
            </div>
          </div>

          <div className="rounded-xl bg-darkGray justify-between p-5 flex flex-col md:col-span-4 gap-5">
            <div>
              <img src={fileSetting.src} className="bg-white rounded p-1" />
            </div>
            <div className="text-[#EFFEFF] text-[9px] md:text-base text-justify">
              Annual Maintenance of Electrical Installations at Sub-Station of
              630 KVA, Residential & Non Residential Buildings, Water Supply
              Pump Operation at ICAR-IASRI Main Campus, Pusa, New Delhi and
              Krishi Niketan, Paschim Vihar, New Delhi and also to operate Two
              Lifts, installed at Administration – Cum–Training Block at
              ICAR-IASRI Main Campus, Pusa, New Delhi.
            </div>
            <div className="text-[#EFFEFF] text-[9px] md:text-base text-justify">
              New Delhi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
