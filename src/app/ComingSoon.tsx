import Footer from "@/sections/Footer";
import GetInTouch from "@/sections/GetInTouch";
import Header from "@/sections/Header";
import Logo from "@/../public/assets/big-logo.png";
import React from "react";

const LostSection = () => {
  return (
    <section className="container mx-auto md:px-20 px-4 text-center md:mt-40 space-y-5">
      <div>
        <img alt="logo" src={Logo.src} className="m-auto" />
      </div>
      <div>
        <span className="bg-[#FFFFFF] rounded-md px-4 py-2">Processing...</span>
      </div>
      <div className="text-[20px] mt-2 md:text-[44px] font-bold ">
        Coming Soon
        <div className="mx-auto text-[9px] font-normal md:text-base">
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
    </>
  );
};

export default ComingSoon;
