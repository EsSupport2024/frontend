"use client";
import React from "react";
import Logo from "@/../public/assets/es-support-log.png";
import useDeviceType from "@/hooks/useDeviceType";
import Image from "next/image";
import {AlignJustify, ChevronDown, X} from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Header = ({css}: {css?: string}) => {
  const device = useDeviceType();
  const pathname = usePathname();
  const [menu, setMenu] = React.useState(false);
  const web = device === "web";
  return (
    <div className={css || "h-14 md:h-24 shadow-lg py-5"}>
      <div className="container px-4 m-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div>
            <Image
              alt="logo"
              src={Logo.src}
              width={web ? 72 : 34}
              height={web ? 54 : 25}
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
            <button
              className={
                pathname === "/about"
                  ? "border-b border-black dropbtn"
                  : "dropbtn"
              }
            >
              About
              <ChevronDown className="inline" />
            </button>
            <div className="dropdown-content">
              <ul>
                <a href="/about#director">
                  <li>Know Our Director</li>
                </a>
                <a href="/about#certification">
                  <li>Certification</li>
                </a>
              </ul>
            </div>
          </div>
          <div className="dropdown">
            <button
              className={
                pathname === "/services"
                  ? "border-b border-black dropbtn"
                  : "dropbtn"
              }
            >
              Services
              <ChevronDown className="inline" />
            </button>
            <div className="dropdown-content">
              <ul className="">
                <a href="/facility">
                  <li>Facility Management</li>
                </a>
                <a href="/operation">
                  <li>Operation & Maintenance</li>
                </a>
                <a href="/mep">
                  <li>MEP Services</li>
                </a>
                <a href="/it">
                  <li>IT Services</li>
                </a>
                <a href="/security">
                  <li>Security Services</li>
                </a>
                <a href="/civil">
                  <li>Civil & Maintenance</li>
                </a>
              </ul>
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
            className="bg-primaryBlue rounded-lg text-white py-3 px-11 font-bold text-lg"
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
        <div className="w-full h-[800px] bg-primaryBlue text-white p-20 absolute z-20 top-0 left-0 space-y-10">
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
