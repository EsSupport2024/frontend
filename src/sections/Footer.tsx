import React from "react";
import Logo from "@/../public/assets/es-support-log.png";
import phone from "@/../public/assets/icons/phone.png";
import mail from "@/../public/assets/icons/mail.png";
import facebook from "@/../public/assets/icons/facebook.png";
import twitter from "@/../public/assets/icons/twitter.png";
import linkedin from "@/../public/assets/icons/linkedin.png";
import insta from "@/../public/assets/icons/insta.png";

const Footer = () => {
  return (
    <section className="bg-[#162023] text-[#EFFEFF]">
      <div className="container flex lg:justify-between space-y-5 flex-wrap px-4 py-16 lg:px-24 lg:py-32 m-auto">
        <div className="space-y-4">
          <div className="flex items-center gap-3 w-fit">
            <div className="shrink-0 h-auto w-[30px] lg:w-[72px]">
              <img
                src={Logo.src}
                width={72}
                height={54}
                className="object-contain inline"
              />
            </div>
            <div className="m-auto">
              <div className="font-bold lg:text-xl text-[10px]">Es-support</div>
              <div className="font-medium lg:text-[9px] text-[5px]">
                solution upto satisfaction
              </div>
            </div>
          </div>
          <div className="w-[280px] text-[9px] lg:text-base">
            Elevating work environments across the nation through professional
            facilities management.
          </div>
          <div className="space-y-2 lg:space-y-5 text-[9px] lg:text-base">
            <div>
              <img src={mail.src} className="inline h-4" />
              <a href="mailto:support@essupport.in" className="ml-2">
                support@essupport.in
              </a>
            </div>
            <div>
              <img src={phone.src} className="inline h-4" />
              <a href="tel:+919718767374" className="ml-2">
                +91-9718767374
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-4 min-w-40">
          <a href="/services" className="font-semibold lg:text-lg text-[10px]">
            Services
          </a>
          <div className="space-y-2 text-[9px] lg:text-base flex flex-col">
            <a href="/services/facility">Facility Management</a>
            <a href="/services/mep">MEP Services</a>
            <a href="/services/it">IT Services</a>
            <a href="/services/security">Security Services</a>
            <a href="/services/operation">Operation & Maintenance</a>
            <a href="/services/civil">Civil & Maintenance</a>
          </div>
        </div>
        <div className="space-y-4 min-w-40">
          <div className="font-semibold lg:text-lg text-[10px]">Company</div>
          <div className="space-y-2 text-[9px] lg:text-base">
            <div>
              <a href="/about">About</a>
            </div>
            <div>
              <a href="/blog">Blog</a>
            </div>
            <div>
              <a href="/projects">Project</a>
            </div>
          </div>
        </div>
        <div className="space-y-4 min-w-40">
          <div className="font-semibold lg:text-lg text-[10px]">Legal</div>
          <div className="space-y-2 text-[9px] lg:text-base">
            <div>Claim</div>
            <div>Privacy</div>
            <div>Terms</div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="font-semibold lg:text-lg text-[10px]">Socials</div>
          <div className="flex items-center gap-2 text-[9px] lg:text-base">
            <img src={facebook.src} width={30} />
            <img src={twitter.src} width={30} />
            <img src={insta.src} width={30} />
            <img src={linkedin.src} width={30} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
