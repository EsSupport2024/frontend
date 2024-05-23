import Footer from "@/sections/Footer";
import GetInTouch from "@/sections/GetInTouch";
import Header from "@/sections/Header";
import React from "react";
import Directors from "./Directors";
import Hero from "./Hero";
import OurValues from "./OurValues";
import VisionMission from "./VisionMission";
import Location from "./Location";
import Certification from "./Certification";
import WhatsApp from "@/components/WhatsApp";

const Page = () => {
  return (
    <>
      <div className="bg-lightOrange">
        <Header />
        <Hero />
      </div>
      <OurValues />
      <Directors />
      <VisionMission />
      <Location />
      <Certification />
      <GetInTouch />
      <Footer />
      <WhatsApp />
    </>
  );
};

export default Page;
