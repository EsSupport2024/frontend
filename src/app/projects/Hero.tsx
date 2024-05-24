import React from "react";
import fileSetting from "@/../public/assets/icons/fileSetting.png";

const Hero = () => {
  return (
    <section className="container mx-auto lg:px-20 px-4 py-2 lg:py-10 text-center">
      <div className="container mx-auto px-4 py-16 lg:px-24">
        <div className="lg:text-4xl text-base font-bold text-center lg:text-left lg:py-10">
          Our Major Project
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 mt-10">
          <div className="rounded-xl bg-darkGray justify-between p-5 flex flex-col gap-5">
            <div>
              <img src={fileSetting.src} className="bg-white rounded p-1" />
            </div>
            <div className="text-[#EFFEFF] text-[9px] lg:text-base text-left break-words">
              Annual Operation and maintenance contract for E & M Installations
              of Terminal Building and other ancillary Building
            </div>
            <div className="text-[#EFFEFF] text-[9px] lg:text-base text-left break-words">
              Surat Airport, Surat, Gujarat
            </div>
          </div>
          <div className="rounded-xl bg-darkGray lg:col-span-2 justify-between p-5 flex flex-col gap-5">
            <div>
              <img src={fileSetting.src} className="bg-white rounded p-1" />
            </div>
            <div className="text-[#EFFEFF] text-[9px] lg:text-base text-left break-words">
              Routine maintenance of fire fighting equipment of new ATC tower,
              technical building, new hanger, new fire station and E&M workshop
            </div>
            <div className="text-[#EFFEFF] text-[9px] lg:text-base text-left break-words">
              B.P.I Airport, Bhubaneswar
            </div>
          </div>
          <div className="rounded-xl bg-darkGray justify-between p-5 flex flex-col gap-5">
            <div>
              <img src={fileSetting.src} className="bg-white rounded p-1" />
            </div>
            <div className="text-[#EFFEFF] text-[9px] lg:text-base text-left break-words">
              Providing manpower on outsource basis
            </div>
            <div className="text-[#EFFEFF] text-[9px] lg:text-base text-left break-words">
              O/o Sagarmala Development Company Limited, New Delhi
            </div>
          </div>

          <div className="rounded-xl bg-darkGray justify-between p-5 flex flex-col gap-5">
            <div>
              <img src={fileSetting.src} className="bg-white rounded p-1" />
            </div>
            <div className="text-[#EFFEFF] text-[9px] lg:text-base text-left break-words">
              Repair & Maintenance of Electric Sub Station and and rising main
              switch fuse assembly at Kalindi
            </div>
            <div className="text-[#EFFEFF] text-[9px] lg:text-base text-left break-words">
              Bhawan, CWC, New Delhi at Kalindi
            </div>
          </div>

          <div className="rounded-xl bg-darkGray justify-between p-5 flex flex-col gap-5">
            <div>
              <img src={fileSetting.src} className="bg-white rounded p-1" />
            </div>
            <div className="text-[#EFFEFF] text-[9px] lg:text-base text-left break-words">
              Contract for IT support.
            </div>
            <div className="text-[#EFFEFF] text-[9px] lg:text-base text-left break-words">
              ESIC Medical Hospital Andheri
            </div>
          </div>

          <div className="rounded-xl bg-darkGray justify-between p-5 lg:col-span-2 flex flex-col gap-5">
            <div>
              <img src={fileSetting.src} className="bg-white rounded p-1" />
            </div>
            <div className="text-[#EFFEFF] text-[9px] lg:text-base text-left break-words">
              Operation & Maintenance of fire fighting, electrical, TL gantry/
              process operations, LPG Pump house & STP/ETP/RO system and store
              keeping
            </div>
            <div className="text-[#EFFEFF] text-[9px] lg:text-base text-left break-words">
              BPCL LPG PLANT PUNE
            </div>
          </div>

          <div className="rounded-xl bg-darkGray justify-between p-5 flex flex-col gap-5">
            <div>
              <img src={fileSetting.src} className="bg-white rounded p-1" />
            </div>
            <div className="text-[#EFFEFF] text-[9px] lg:text-base text-left break-words">
              Contract for housekeeping services at Government Hospital.
            </div>
            <div className="text-[#EFFEFF] text-[9px] lg:text-base text-left break-words">
              North West Delhi
            </div>
          </div>

          <div className="rounded-xl bg-darkGray justify-between p-5 flex flex-col gap-5">
            <div>
              <img src={fileSetting.src} className="bg-white rounded p-1" />
            </div>
            <div className="text-[#EFFEFF] text-[9px] lg:text-base text-left break-words">
              Annual repair & maintenance of resi and non-resi buildings
            </div>
            <div className="text-[#EFFEFF] text-[9px] lg:text-base text-left break-words">
              26 SCG NSG MUMBAI
            </div>
          </div>
          <div className="rounded-xl bg-darkGray justify-between p-5 flex flex-col lg:col-span-2 gap-5">
            <div>
              <img src={fileSetting.src} className="bg-white rounded p-1" />
            </div>
            <div className="text-[#EFFEFF] text-[9px] lg:text-base text-left break-words">
              Annual maintenance contract of fire alarm & detection systems
            </div>
            <div className="text-[#EFFEFF] text-[9px] lg:text-base text-left break-words">
              Safdarjung Airport
            </div>
          </div>

          <div className="rounded-xl bg-darkGray justify-between p-5 flex flex-col lg:col-span-4 gap-5">
            <div>
              <img src={fileSetting.src} className="bg-white rounded p-1" />
            </div>
            <div className="text-[#EFFEFF] text-[9px] lg:text-base text-left break-words">
              Annual Maintenance of Electrical Installations at Sub-Station of
              630 KVA, Residential & Non Residential Buildings, Water Supply
              Pump Operation at ICAR-IASRI Main Campus, Pusa, New Delhi and
              Krishi Niketan, Paschim Vihar, New Delhi and also to operate Two
              Lifts, installed at Administration – Cum–Training Block at
              ICAR-IASRI Main Campus, Pusa, New Delhi.
            </div>
            <div className="text-[#EFFEFF] text-[9px] lg:text-base text-left break-words">
              New Delhi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
