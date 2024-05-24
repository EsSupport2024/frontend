import type {Metadata} from "next";
import Footer from "@/sections/Footer";
import GetInTouch from "@/sections/GetInTouch";
import Header from "@/sections/Header";
import React from "react";
import facility from "@/../public/assets/images/facility.png";
import Hero from "./Hero";
import Service from "./Service";
import WhatsApp from "@/components/WhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.essupport.in/services/facility"),
  title: "Expert Facility Management Services | ES Support",
  description:
    "ES Support offers expert facility management services to ensure your business environment is efficient and well-maintained.",
  keywords: [
    "facility management",
    "business facility services",
    "facility maintenance",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Expert Facility Management Services | ES Support",
    description:
      "ES Support offers expert facility management services to ensure your business environment is efficient and well-maintained.",
    url: "https://www.essupport.in/services/facility",
    type: "website",
  },
};

const Page = () => {
  return (
    <>
      <div
        style={{backgroundImage: `url(${facility.src})`} as {}}
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
      <WhatsApp />
    </>
  );
};

export default Page;
