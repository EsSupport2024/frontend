import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import React from "react";
import Logo from "@/../public/assets/big-logo.png";

const LostSection = () => {
  return (
    <section className="container mx-auto md:px-20 px-4 md:py-16 text-center py-40 md:my-40 space-y-5">
      <div>
        <img alt="logo" src={Logo.src} className="m-auto" />
      </div>
      <div>
        <span className="bg-[#E4EDFF] rounded-md px-4 py-2">404 error</span>
      </div>
      <div className="text-[20px] mt-2 md:text-[44px] font-bold ">
        We’ve lost this page
        <div className="mx-auto text-[9px] font-normal md:text-base">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </div>
      </div>
    </section>
  );
};

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <LostSection />
      <Footer />
    </>
  );
};

export default NotFoundPage;
