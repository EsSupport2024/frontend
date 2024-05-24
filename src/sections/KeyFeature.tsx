import React from "react";
import Relation from "@/../public/assets/images/keyFeature.png";
import stack from "@/../public/assets/icons/stack.png";
import group from "@/../public/assets/icons/Group.png";
import bulb from "@/../public/assets/icons/bulb.png";
import idea from "@/../public/assets/icons/idea.png";
import graph from "@/../public/assets/icons/graph.png";

const KeyFeature = () => {
  return (
    <section className="bg-shade-3">
      <div className="container mx-auto px-4 py-16 lg:px-24 lg:py-32">
        <div className="lg:flex w-[273px] lg:w-full m-auto lg:m-0 pb-5 lg:gap-40">
          <div
            className="text-center lg:text-left lg:min-w-[410px] font-bold lg:text-4xl"
            id="weCareTitle"
          >
            <div>Key features we</div>
            <div>always taken care of</div>
          </div>
          <div
            className="text-[9px] text-center lg:text-left lg:text-base"
            id="weCareDescription"
          >
            Our dedication goes beyond mere assistance – we excel in
            streamlining your operational expenses by providing skilled
            professionals and innovative technology solutions. Delegate your
            non-core responsibilities to us, and benefit from unmatched
            expertise and cost efficiency.
          </div>
        </div>
        <div className="lg:flex space-y-5 lg:gap-40 lg:items-center">
          <img
            src={Relation.src}
            className="h-[351px] w-auto lg:h-[550px] m-auto lg:m-0"
            id="weCareImg"
          />
          <div
            className="max-w-[273px] lg:max-w-full m-auto lg:m-0 text-center lg:text-left space-y-5"
            id="weCareItem"
          >
            <div className="space-y-2">
              <div className="w-fit bg-[#121B2C] rounded-full p-3 m-auto lg:m-0">
                <img src={stack.src} className="size-[25px]" />
              </div>
              <div>
                <div className="font-bold lg:text-xl text-xs">
                  Innovative Excellence
                </div>
                <div className="text-[9px] lg:text-base">
                  Pioneering integrated business services across diverse
                  industry sectors
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-fit bg-[#121B2C] rounded-full p-3 m-auto lg:m-0">
                <img src={group.src} className="size-[25px]" />
              </div>
              <div>
                <div className="font-bold lg:text-xl text-xs">
                  Enduring Partnerships
                </div>
                <div className="text-[9px] lg:text-base">
                  Cultivating strong customer bonds for sustainable and
                  recurring business success
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-fit bg-[#121B2C] rounded-full p-3 m-auto lg:m-0">
                <img src={idea.src} className="size-[25px]" />
              </div>
              <div>
                <div className="font-bold lg:text-xl text-xs">
                  Strategic Mastery
                </div>
                <div className="text-[9px] lg:text-base">
                  Demonstrating proven success through acquiring and integrating
                  lucrative business niches
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-fit bg-[#121B2C] rounded-full p-3 m-auto lg:m-0">
                <img src={graph.src} className="size-[25px]" />
              </div>
              <div>
                <div className="font-bold lg:text-xl text-xs">
                  Nationwide Impact
                </div>
                <div className="text-[9px] lg:text-base">
                  Fostering growth through an extensive workforce and robust
                  recruitment prowess
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-fit bg-[#121B2C] rounded-full p-3 m-auto lg:m-0">
                <img src={bulb.src} className="size-[25px]" />
              </div>
              <div>
                <div className="font-bold lg:text-xl text-xs">
                  Tech-Led Vision
                </div>
                <div className="text-[9px] lg:text-base">
                  Guiding business excellence through cutting-edge technology,
                  today and tomorrow
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeature;
