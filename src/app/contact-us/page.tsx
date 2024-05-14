import Footer from "@/sections/Footer";
import GetInTouch from "@/sections/GetInTouch";
import Header from "@/sections/Header";
import React from "react";
import Hero from "./Hero";
import Locations from "./Locations";

const Page = () => (
  <>
    <div className="bg-lightOrange">
      <Header />
      <Hero />
    </div>
    <Locations />
    <GetInTouch />
    <Footer />
  </>
);

export default Page;
