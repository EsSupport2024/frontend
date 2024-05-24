import React from "react";
import getInTouch from "@/../public/assets/images/getInTouch.png";

const GetInTouch = ({
  bg,
  containerCss,
}: {
  bg?: string;
  containerCss?: string;
}) => {
  return (
    <section className={bg || "bg-lightOrange"}>
      <div
        className={
          containerCss || "container mx-auto px-4 py-16 lg:px-24 lg:py-32"
        }
      >
        <div
          style={{"--image-url": `url(${getInTouch.src})`} as {}}
          className="bg-[image:var(--image-url)] lg:h-[375px] h-36 flex items-center justify-center text-[#EFFEFF] bg-[#FF7100] rounded-lg"
        >
          <div className="text-center lg:space-y-10 space-y-5" id="connectNow">
            <div>
              <div className="lg:text-[48px] font-bold">Get in Touch</div>
              <div className="text-[9px] lg:text-base">
                To connect with more people and discuss in strategy
              </div>
            </div>

            <div>
              <a href="/contact-us">
                <button className="bg-[#EFFEFF] text-black lg:py-4 lg:px-8 px-4 py-2 rounded-md text-[9px] lg:text-base font-bold">
                  Connect now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
