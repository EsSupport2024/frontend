import type {Metadata} from "next";
import Footer from "@/sections/Footer";
import GetInTouch from "@/sections/GetInTouch";
import Header from "@/sections/Header";
import React from "react";
import security from "@/../public/assets/images/security.png";
import Hero from "./Hero";
import Service from "./Service";
import {openGraphImage} from "../shared-metadata";

export const metadata: Metadata = {
  title: "",
  description: "",
  keywords: "",
  robots: "index, follow",
  openGraph: {
    ...openGraphImage,
    title: "",
    description: "",
    url: "",
    type: "website",
  },
};

const Page = () => {
  return (
    <>
      <div
        style={{backgroundImage: `url(${security.src})`} as {}}
        className="bg-cover bg-no-repeat"
      >
        <div className="backdrop-blur-md">
          <Header css="h-14 md:h-24 shadow-lg py-5 text-white" />
        </div>
        <Hero />
      </div>
      <Service />
      <GetInTouch containerCss="container mx-auto px-4 pb-16 md:px-24 md:pb-32" />
      <Footer />
    </>
  );
};

export default Page;
