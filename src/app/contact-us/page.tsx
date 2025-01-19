import type {Metadata} from "next";
import WhatsApp from "@/components/WhatsApp";
import Footer from "@/sections/Footer";
import GetInTouch from "@/sections/GetInTouch";
import Header from "@/sections/Header";
import React from "react";
import Hero from "./Hero";
import Locations from "./Locations";
import Map from "./Map";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.essupport.in/contact-us"),
  title: "Contact Us | ES Support - Get in Touch for Professional Services",
  description:
    "Reach out to ES Support for professional facility management, MEP services, IT services, security services, operation & maintenance, and civil & maintenance. Contact us today!",
  keywords:
    "contact ES Support, facility management contact, MEP services contact, IT services contact, security services contact, operation and maintenance contact, civil and maintenance contact",
  robots: "index, follow",
  openGraph: {
    title: "Contact Us | ES Support - Get in Touch for Professional Services",
    description:
      "Reach out to ES Support for professional facility management, MEP services, IT services, security services, operation & maintenance, and civil & maintenance. Contact us today!",
    url: "https://www.essupport.in/contact-us",
    type: "website",
  },
};

const Page = () => (
  <>
    <div className="bg-lightOrange">
      <Header />
      <Hero />
    </div>
    <Locations />
    <Map />
    <GetInTouch />
    <Footer />
    <WhatsApp />
  </>
);

export default Page;
