import WhatsApp from "@/components/WhatsApp";
import Footer from "@/sections/Footer";
import GetInTouch from "@/sections/GetInTouch";
import Header from "@/sections/Header";
import React from "react";
import Hero from "./Hero";

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
