import type {Metadata} from "next";
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
import {openGraphImage} from "../shared-metadata";

export const metadata: Metadata = {
  title: "About ES Support | Leading Management Solutions Provider",
  description:
    "Learn about ES Support, a leading provider of facility management, MEP services, IT services, security services, operation & maintenance, and civil & maintenance solutions. Our mission is to deliver top-notch services that help businesses thrive.",
  keywords:
    "about ES Support, facility management, MEP services, IT services, security services, operation and maintenance, civil and maintenance",
  robots: "index, follow",
  openGraph: {
    ...openGraphImage,
    title: "About ES Support | Leading Management Solutions Provider",
    description:
      "Learn about ES Support, a leading provider of facility management, MEP services, IT services, security services, operation & maintenance, and civil & maintenance solutions. Our mission is to deliver top-notch services that help businesses thrive.",
    url: "https://www.essupport.in/about",
    type: "website",
  },
};

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
    </>
  );
};

export default Page;
