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
      <div className="container mx-auto px-4 py-16 md:px-24 md:py-32">
        <div className="md:flex w-[273px] md:w-full m-auto md:m-0 pb-5 md:gap-40">
          <div className="text-center md:text-left md:min-w-[410px] font-bold md:text-4xl">
            <div>Key features we</div>
            <div>always taken care of</div>
          </div>
          <div className="text-[9px] text-center md:text-left md:text-base">
            Our dedication goes beyond mere assistance – we excel in
            streamlining your operational expenses by providing skilled
            professionals and innovative technology solutions. Delegate your
            non-core responsibilities to us, and benefit from unmatched
            expertise and cost efficiency.
          </div>
        </div>
        <div className="md:flex space-y-5 md:gap-40 md:items-center">
          <img
            src={Relation.src}
            className="h-[351px] w-auto md:h-[517px] m-auto md:m-0"
          />
          <div className="max-w-[273px] md:max-w-full m-auto md:m-0 text-center md:text-left space-y-5">
            <div className="space-y-2">
              <div className="w-fit bg-[#121B2C] rounded-full px-2 py-3 m-auto md:m-0">
                <img src={stack.src} className="w-6" />
              </div>
              <div>
                <div className="font-bold md:text-xl text-xs">
                  Innovative Excellence
                </div>
                <div className="text-[9px] md:text-base">
                  Pioneering integrated business services across diverse
                  industry sectors
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-fit bg-[#121B2C] rounded-full px-2 py-3 m-auto md:m-0">
                <img src={group.src} className="w-6 h-5" />
              </div>
              <div>
                <div className="font-bold md:text-xl text-xs">
                  Enduring Partnerships
                </div>
                <div className="text-[9px] md:text-base">
                  Cultivating strong customer bonds for sustainable and
                  recurring business success
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-fit bg-[#121B2C] rounded-full px-2 py-3 m-auto md:m-0">
                <img src={idea.src} className="w-6 h-5" />
              </div>
              <div>
                <div className="font-bold md:text-xl text-xs">
                  Strategic Mastery
                </div>
                <div className="text-[9px] md:text-base">
                  Demonstrating proven success through acquiring and integrating
                  lucrative business niches
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-fit bg-[#121B2C] rounded-full px-2 py-3 m-auto md:m-0">
                <img src={graph.src} className="w-6 h-5" />
              </div>
              <div>
                <div className="font-bold md:text-xl text-xs">
                  Nationwide Impact
                </div>
                <div className="text-[9px] md:text-base">
                  Fostering growth through an extensive workforce and robust
                  recruitment prowess
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-fit bg-[#121B2C] rounded-full px-2 py-3 m-auto md:m-0">
                <img src={bulb.src} className="w-6 h-5" />
              </div>
              <div>
                <div className="font-bold md:text-xl text-xs">
                  Tech-Led Vision
                </div>
                <div className="text-[9px] md:text-base">
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
