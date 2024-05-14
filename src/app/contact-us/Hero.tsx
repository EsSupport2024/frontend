import React from "react";
import {Mail, PhoneCall, Building2, Clock} from "lucide-react";

import facebook from "@/../public/assets/icons/facebook.png";
import twitter from "@/../public/assets/icons/twitter.png";
import linkedin from "@/../public/assets/icons/linkedin.png";
import insta from "@/../public/assets/icons/insta.png";

const Hero = () => {
  return (
    <section className="container mx-auto md:px-20 px-4 py-16 md:pt-36">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-40">
        <div>
          <div className="mx-auto text-[9px] font-bold md:text-base">
            Get in Touch
          </div>
          <div className="text-[20px] mt-2 md:text-[44px] font-bold ">
            Let’s Chat, Reach Out to Us
          </div>
          <div className="mt-2 w-3/4">
            Have questions or feedback? We are here to help. Send us a message
            we’ll respond within 24 hours
          </div>

          <form className="border-t-2 border-black pt-5 mt-5 space-y-3">
            <div className="flex justify-between gap-10">
              <div className="w-full">
                <label className="mb-2 text-sm font-bold text-gray-900">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className=" border rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="w-full">
                <label className="mb-2 text-sm font-bold text-gray-900">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className=" border rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div>
              <label className="mb-2 text-sm font-bold text-gray-900">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className=" border rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div>
              <label className="mb-2 text-sm font-bold text-gray-900">
                Messages
              </label>
              <textarea
                id="message"
                className=" border rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 md:h-36"
                placeholder="Type here..."
                required
              />
            </div>
            <div>
              <input type="checkbox" id="agree" name="agree" value="agree" />
              <label className="ml-2">
                agree to our friendly privacy policy
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-primaryBlue w-full focus:ring-4 focus:outline-none font-medium rounded-lg text-sm  px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="bg-[#FF7100] md:p-10 p-5 text-white flex gap-5 flex-col justify-around">
          <div className="text-[20px] mt-2 md:text-[44px] font-bold ">Info</div>
          <div className="">
            <Mail className="inline " />
            <label className="ml-2">support@essupport.in</label>
          </div>
          <div className="">
            <PhoneCall className="inline " />
            <label className="ml-2">+91 - 9718767374</label>
          </div>
          <div className="">
            <Building2 className="inline " />
            <label className="ml-2">
              100/1, AAjay Park, Naya Baar Najafgarh, New Delhi - 110043
            </label>
          </div>
          <div className="">
            <Clock className="inline " />
            <label className="ml-2">09:00 - 18:00</label>
          </div>
          <div>
            <div className="md:text-lg font-semibold">Daily updates</div>
            <div className="flex gap-3">
              <img src={facebook.src} width={30} />
              <img src={twitter.src} width={30} />
              <img src={insta.src} width={30} />
              <img src={linkedin.src} width={30} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
