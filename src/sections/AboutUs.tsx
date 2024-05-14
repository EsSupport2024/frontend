import {SectionHead} from "@/components/utilityComponents";
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-orange text-white">
      <div className="container mx-auto px-4 py-16 md:px-24 md:py-32">
        <div className="text-center md:text-left font-bold md:text-4xl">
          About us
        </div>

        <div className="text-center text-[9px] md:text-base md:text-justify mt-10">
          Elevating work environments across the nation through professional
          facilities management. Established in January 2022, ES Support has
          firmly established itself in India as a delivering professional
          solutions ranging from new setup as well as operation and maintenance
          of
          <span className="font-semibold">
            existing Electrical, Facilities Management, Civil & Interiors, IT,
            MEP and Security systems
          </span>
          .We are working with extreme slogan   SOLUTION UPTO SATISFACTION. our
          influence extends across PAN INDIA locations With a steadfast
          commitment, we cater to a diverse clientele, playing a pivotal role in
          the evolution of workspaces into hubs of excellence.
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
