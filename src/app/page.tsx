import AboutUs from "@/sections/AboutUs";
import Header from "@/sections/Header";
import HeroSection from "@/sections/HeroSection";
import KeyFeature from "@/sections/KeyFeature";
import OurClients from "@/sections/OurClients";
import OurServices from "@/sections/OurServices";
import WhyUs from "@/sections/WhyUs";
import GetInTouch from "@/sections/GetInTouch";
import Footer from "@/sections/Footer";
import "./globals.css";

export const serviceList = [
  {name: "Facility Management", url: "/facility"},
  {name: "MEP Services", url: "/mep"},
  {name: "IT Services", url: "/it"},
  {name: "Security Services", url: "/security"},
  {name: "Operation & Maintenance", url: "/operation"},
  {name: "Civil & Maintenance", url: "/civil"},
];

export default function Home() {
  return (
    <>
      <div className="bg-shade1">
        <Header />
        <HeroSection />
      </div>
      <WhyUs />
      <OurClients />
      <AboutUs />
      <OurServices />
      <KeyFeature />
      <GetInTouch />
      <Footer />
    </>
  );
}
