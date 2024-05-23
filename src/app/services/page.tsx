import type {Metadata} from "next";
import WhatsApp from "@/components/WhatsApp";
import Footer from "@/sections/Footer";
import GetInTouch from "@/sections/GetInTouch";
import Header from "@/sections/Header";
import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import {openGraphImage} from "../shared-metadata";

export const metadata: Metadata = {
  title: "Our Comprehensive Services | ES Support",
  description:
    "Explore the wide range of services offered by ES Support, including facility management, MEP services, IT services, security services, operation & maintenance, and civil & maintenance.",
  keywords:
    "facility management, MEP services, IT services, security services, operation and maintenance, civil and maintenance",
  robots: "index, follow",
  openGraph: {
    ...openGraphImage,
    title: "Our Comprehensive Services | ES Support",
    description:
      "Explore the wide range of services offered by ES Support, including facility management, MEP services, IT services, security services, operation & maintenance, and civil & maintenance.",
    url: "https://www.essupport.in/services",
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
      <Services />
      <GetInTouch />
      <Footer />
      <WhatsApp />
    </>
  );
};

export default Page;
