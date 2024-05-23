import Footer from "@/sections/Footer";
import GetInTouch from "@/sections/GetInTouch";
import Header from "@/sections/Header";
import React from "react";
import operation from "@/../public/assets/images/operation.webp";
import Hero from "./Hero";
import Operations from "./Operations";
import WhatsApp from "@/components/WhatsApp";

const Page = () => {
  return (
    <>
      <div
        style={{backgroundImage: `url(${operation.src})`} as {}}
        className="bg-cover bg-no-repeat"
      >
        <div className="backdrop-blur-md">
          <Header />
        </div>
        <Hero />
      </div>
      <Operations />
      <GetInTouch containerCss="container mx-auto px-4 pb-16 md:px-24 md:pb-32" />
      <Footer />
      <WhatsApp />
    </>
  );
};

export default Page;
