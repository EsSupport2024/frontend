import type {Metadata} from "next";
import WhatsApp from "@/components/WhatsApp";
import Footer from "@/sections/Footer";
import GetInTouch from "@/sections/GetInTouch";
import Header from "@/sections/Header";
import React from "react";
import Hero from "./Hero";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.essupport.in/projects"),
  title: "Our Projects | ES Support",
  description:
    "Explore the diverse range of projects completed by ES Support. From facility management to IT services, see how we've helped businesses achieve their goals.",
  keywords:
    "ES Support projects, facility management projects, MEP projects, IT projects, security services projects, operation and maintenance projects, civil and maintenance projects",
  robots: "index, follow",
  openGraph: {
    title: "Our Projects | ES Support",
    description:
      "Explore the diverse range of projects completed by ES Support. From facility management to IT services, see how we've helped businesses achieve their goals.",
    url: "https://www.essupport.in/projects",
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
      <GetInTouch />
      <Footer />
      <WhatsApp />
    </>
  );
};

export default Page;
