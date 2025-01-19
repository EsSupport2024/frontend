import React from "react";
import {Mail, PhoneCall, Building2, Clock} from "lucide-react";

import facebook from "@/../public/assets/icons/facebook.png";
import twitter from "@/../public/assets/icons/twitter.png";
import linkedin from "@/../public/assets/icons/linkedin.png";
import insta from "@/../public/assets/icons/insta.png";
import ContactForm from "./ContactForm";

const Hero = () => {
  return (
    <section className="container mx-auto lg:px-20 px-4 py-16 lg:pt-36">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-40">
        <div>
          <div className="mx-auto text-[9px] font-bold lg:text-base">
            Get in Touch
          </div>
          <div className="text-[20px] mt-2 lg:text-[44px] font-bold ">
            Let’s Chat, Reach Out to Us
          </div>
          <div className="mt-2 w-3/4">
            Have questions or feedback? We are here to help. Send us a message
            we’ll respond within 24 hours
          </div>
          <ContactForm />
        </div>
        <div className="bg-[#FF7100] lg:p-10 p-5 text-white flex gap-5 flex-col justify-around">
          <div className="text-[20px] mt-2 lg:text-[44px] font-bold ">Info</div>
          <div>
            <Mail className="inline " />
            <label className="ml-2">support@essupport.in</label>
          </div>
          <div>
            <PhoneCall className="inline " />
            <label className="ml-2">+91 - 9718767374</label>
          </div>
          <div>
            <PhoneCall className="inline " />
            <label className="ml-2">011-49953499</label>
          </div>
          <div>
            <Building2 className="inline " />
            <label className="ml-2">
              T-10, 3rd Floor, HL Plaza, Plot No. 9, Pocket-2, Sector-12,
              Dwarka, New Delhi-110078.
            </label>
          </div>
          <div>
            <Clock className="inline " />
            <label className="ml-2">09:00 - 18:00</label>
          </div>
          <div>
            <div className="lg:text-lg font-semibold">Daily updates</div>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/essupport.in" target="_blank">
                <img src={facebook.src} width={30} />
              </a>

              <a href="https://x.com/essupport_in" target="_blank">
                <img src={twitter.src} width={30} />
              </a>
              <a href="https://www.instagram.com/essupport.in" target="_blank">
                <img src={insta.src} width={30} />
              </a>
              <a
                href="https://www.linkedin.com/company/essupport-in/"
                target="_blank"
              >
                <img src={linkedin.src} width={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
