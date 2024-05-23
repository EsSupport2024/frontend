import AboutUs from "@/sections/AboutUs";
import Header from "@/sections/Header";
import HeroSection from "@/sections/HeroSection";
import KeyFeature from "@/sections/KeyFeature";
import OurClients from "@/sections/OurClients";
import OurServices from "@/sections/OurServices";
import WhyUs from "@/sections/WhyUs";
import GetInTouch from "@/sections/GetInTouch";
import Footer from "@/sections/Footer";
import dynamic from "next/dynamic";
import "./globals.css";

const IntersectionObserverComponent = dynamic(
  () => import("@/components/IntersectionObserverComponent"),
  {ssr: false},
);

const elements = [
  {id: "client", className: "animate-slideInFromBottom"},
  {id: "about-us", className: "animate-slideInFromBottom"},
  {id: "service-title", className: "animate-slideInFromTop"},
  {id: "service-1", className: "animate-slideInFromLeft"},
  {id: "service-2", className: "animate-slideInFromTopLeftCorner"},
  {id: "service-3", className: "animate-slideInFromBottomLeftCorner"},
  {id: "service-4", className: "animate-slideInFromTopRightCorner"},
  {id: "service-5", className: "animate-slideInFromBottomRightCorner"},
  {id: "service-6", className: "animate-slideInFromRight"},
  {id: "weCareTitle", className: "animate-zoomIn"},
  {id: "weCareDescription", className: "animate-zoomIn"},
  {id: "weCareImg", className: "animate-slideInFromLeft"},
  {id: "weCareItem", className: "animate-slideInFromRight"},
  {id: "connectNow", className: "animate-slideInFromBottom"},
];

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
      <div className="bg-[#F9F4F1]">
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
        <IntersectionObserverComponent elements={elements} />
      </div>
    </>
  );
}
