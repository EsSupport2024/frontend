import Csri from "@/../public/assets/images/csir.png";
import genpact from "@/../public/assets/images/Genpact.png";
import hcl from "@/../public/assets/images/HCL.png";
import future from "@/../public/assets/images/Future-group.png";
import amrita from "@/../public/assets/images/amrita.png";
import bhel from "@/../public/assets/images/BHEL.png";
import cognizant from "@/../public/assets/images/Cognizant.png";
import dmrc from "@/../public/assets/images/dmrc.png";
import drdo from "@/../public/assets/images/DRDO.png";
import eli from "@/../public/assets/images/EIL.png";
import fortis from "@/../public/assets/images/Fortis.png";
import indianOil from "@/../public/assets/images/Indian-Oil.png";
import maxLife from "@/../public/assets/images/Max-Life.png";
import pnb from "@/../public/assets/images/PNB.png";
import samsumg from "@/../public/assets/images/Samsung.png";

const partnerList = [
  Csri.src,
  genpact.src,
  hcl.src,
  future.src,
  amrita.src,
  bhel.src,
  cognizant.src,
  dmrc.src,
  drdo.src,
  eli.src,
  fortis.src,
  indianOil.src,
  maxLife.src,
  pnb.src,
  samsumg.src,
];

const OurClients = () => {
  return (
    <section className="bg-lightOrange">
      <div className="container mx-auto px-4 py-16 md:px-24 md:py-32">
        <div className="text-center md:text-left font-bold md:text-4xl">
          Our Clients
        </div>
        <div className="mt-10">
          <div className="whitespace-nowrap h-[42px] overflow-x-auto sm:scroll-box flex space-x-4 no-scrollbar">
            {partnerList.map((partner, key) => (
              <img src={partner} key={key} className="" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
