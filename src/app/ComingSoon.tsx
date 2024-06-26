import Footer from "@/sections/Footer";
import GetInTouch from "@/sections/GetInTouch";
import Header from "@/sections/Header";
import Logo from "@/../public/assets/big-logo.png";
import React from "react";
import WhatsApp from "@/components/WhatsApp";

const LostSection = () => {
  return (
    <section className="container mx-auto lg:px-20 px-4 text-center lg:mt-40 space-y-5">
      <div>
        <img alt="logo" src={Logo.src} className="m-auto" />
      </div>
      <div>
        <span className="bg-[#FFFFFF] rounded-md px-4 py-2">Processing...</span>
      </div>
      <div className="text-[20px] mt-2 lg:text-[44px] font-bold ">
        Coming Soon
        <div className="mx-auto text-[9px] font-normal lg:text-base">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </div>
      </div>
    </section>
  );
};

const ComingSoon = () => {
  return (
    <>
      <div className="coming-soon">
        <Header />
        <LostSection />
        <GetInTouch bg="transparent" />
      </div>
      <Footer />
      <WhatsApp />
    </>
  );
};

export default ComingSoon;
