"use client";
import React from "react";
import Logo from "@/../public/assets/es-support-log.png";
import {AlignJustify, ChevronDown, X} from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {serviceList} from "@/app/page";

const about = [
  {name: "Know Our Director", url: "/about#director"},
  {name: "Certification", url: "/about#certification"},
];

const Header = ({css}: {css?: string}) => {
  const pathname = usePathname();
  const [menu, setMenu] = React.useState(false);

  return (
    <div
      className={css || "h-14 md:h-24 shadow-lg py-5 md:animate-slideInFromTop"}
    >
      <div className="container px-4 m-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-[25px] md:h-auto md:w-[54px]">
            <img
              alt="logo"
              src={Logo.src}
              className="w-[25px] md:h-auto md:w-[54px]"
            />
          </div>
          <div>
            <div className="font-bold md:text-xl text-xs">Es-support</div>
            <div className="font-medium md:text-[9px] text-[5px]">
              solution upto satisfaction
            </div>
          </div>
        </div>
        <div className="md:flex items-center gap-10 font-bold text-lg hidden">
          <Link
            className={pathname === "/" ? "border-b border-black" : ""}
            href="/"
          >
            Home
          </Link>
          <div className="dropdown">
            <a
              className={
                pathname === "/about"
                  ? "border-b border-black dropbtn py-1"
                  : "dropbtn"
              }
              href="/about"
            >
              About
              <ChevronDown className="inline" />
            </a>
            <div className="dropdown-content">
              <div>
                {about.map((abt, index) => (
                  <div key={abt.url} className="py-1.5 font-normal">
                    <a href={abt.url}>{abt.name}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="dropdown">
            <a
              className={
                pathname === "/services"
                  ? "border-b border-black dropbtn py-1.5"
                  : "dropbtn"
              }
              href="/services"
            >
              Services
              <ChevronDown className="inline" />
            </a>
            <div className="dropdown-content !z-10">
              {serviceList.map((ser, index) => (
                <div key={ser.url} className="py-1 font-normal">
                  <a href={ser.url}>{ser.name}</a>
                </div>
              ))}
            </div>
          </div>
          <Link
            className={pathname === "/projects" ? "border-b border-black" : ""}
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className={pathname === "/blogs" ? "border-b border-black" : ""}
            href="/blogs"
          >
            Blogs
          </Link>
          <a
            className="bg-[#001215] rounded-lg text-white py-3 px-11 font-bold text-lg"
            href="/contact-us"
          >
            Contact Us
          </a>
        </div>
        <button className="md:hidden" onClick={() => setMenu(true)}>
          <AlignJustify />
        </button>
      </div>
      {menu && (
        <div className="w-full h-[800px] bg-primaryBlue text-white p-20 absolute z-40 top-0 left-0 space-y-10">
          <X
            className="absolute text-white top-5 right-5 cursor-pointer"
            onClick={() => setMenu(false)}
          />
          <div>
            <Link className={pathname === "/" ? "text-white" : ""} href="/">
              Home
            </Link>
          </div>
          <div>
            <Link
              className={pathname === "/about" ? "border-b border-black" : ""}
              href="/about"
            >
              About
            </Link>
          </div>
          <div>
            <Link
              className={
                pathname === "/services" ? "border-b border-black" : ""
              }
              href="/services"
            >
              Service
            </Link>
          </div>
          <div>
            <Link
              className={
                pathname === "/projects" ? "border-b border-black" : ""
              }
              href="/projects"
            >
              Projects
            </Link>
          </div>
          <div>
            <Link
              className={pathname === "/blogs" ? "border-b border-black" : ""}
              href="/blogs"
            >
              Blogs
            </Link>
          </div>
          <button className="bg-white rounded-lg py-3 px-11 text-primaryBlue font-bold text-lg">
            <Link
              className={
                pathname === "/contact-us" ? "border-b border-black" : ""
              }
              href="/contact-us"
            >
              Contact Us
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
