import React from "react";
import facility1 from "@/../public/assets/images/facility1.png";
import facility2 from "@/../public/assets/images/facility2.png";
import facility3 from "@/../public/assets/images/facility3.png";
import facility4 from "@/../public/assets/images/facility4.png";

const Service = () => {
  return (
    <section className="bg-lightOrange">
      <div className="container mx-auto px-4 pt-16 md:px-24 md:pt-32">
        <div className="md:grid md:grid-cols-2 md:gap-10">
          <div>
            <div className="md:text-4xl text-base font-bold text-center md:text-left">
              Our services
            </div>
            <div className="mt-5 md:mt-10 text-[9px] w-3/4 md:w-full md:text-base text-justify m-auto md:m-0">
              Elevate Your Workspace with ES Support&apos;s Exceptional Soft
              Services in Facility Management. At ES Support, we redefine
              excellence in Facility Management through our comprehensive Soft
              Services, tailored to create optimal environments for your
              business. Soft Services encompass a spectrum of non-technical yet
              crucial services that contribute to the overall well-being,
              productivity, and aesthetics of your facility.
            </div>
            <div className="mt-3 md:mt-10 text-[9px] w-3/4 md:w-full md:text-base text-justify m-auto md:m-0">
              Our Soft Services portfolio includes janitorial and cleaning
              services, landscaping, pest control, waste management, and more.
              With a commitment to excellence, ES Support ensures that your
              workspace remains not only visually appealing but also conducive
              to a healthy and productive atmosphere. Our experienced and
              dedicated teams are equipped to handle diverse facility
              requirements, offering flexibility and scalability to meet the
              unique needs of your business.
            </div>
            <div className="mt-3 md:mt-10 text-[9px] w-3/4 md:text-base md:w-full text-justify m-auto md:m-0">
              ES Support believes in creating environments that leave a lasting
              positive impression on occupants and visitors alike. Our Soft
              Services are designed to enhance the overall experience within
              your facility, promoting cleanliness, comfort, and a welcoming
              atmosphere.
            </div>
            <div className="mt-3 md:mt-10 text-[9px] w-3/4 md:text-base md:w-full text-justify m-auto md:m-0">
              Partner with ES Support for Soft Services in Facility Management
              and experience a transformation in your workspace. With our
              commitment to quality and customer satisfaction, we ensure that
              your facility operates seamlessly, leaving you free to focus on
              your core business activities. Trust ES Support to redefine
              excellence in Soft Services, making your workspace an optimal and
              inviting place for everyone.
            </div>
            <div className="mt-3 md:mt-10 text-[9px] w-3/4 md:text-base md:w-full text-justify m-auto md:m-0">
              <div className="md:mx-0 mt-2 md:mt-5 text-[9px] font-bold md:text-base">
                Our Facility Management -SOFT SERVICES includes
              </div>
              <ul className="ml-5 font-semibold">
                <li className="list-disc">Cleaning and Janitorial Services</li>
                <li className="list-disc">Facade cleaning Services</li>
                <li className="list-disc">Pest Control Services</li>
                <li className="list-disc">
                  Landscaping and Grounds Maintenance SERVICES
                </li>
                <li className="list-disc">Reception and Concierge Services</li>
                <li className="list-disc">Carpet & Upholstery services</li>
                <li className="list-disc">House keeping services</li>
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 pb-20 pt-10 gap-2">
              <div className="md:col-span-2">
                <img src={facility1.src} />
              </div>
              <div>
                <img src={facility2.src} />
              </div>
              <div>
                <img src={facility3.src} />
              </div>
              <div className="md:col-span-2">
                <img src={facility4.src} />
              </div>
            </div>
          </div>
          <div className="border-l-4 border-orange rounded-box relative hidden md:block">
            <div className="flex flex-col gap-5 h-full">
              <div className="h-[200px] flex items-end justify-start p-10 md:text-2xl font-bold">
                Our Services
              </div>
              <li className="list-before list-none">
                <span className="ml-16">
                  Operation and Maintenance Services
                </span>
              </li>
              <li className="list-before list-none">
                <span className="ml-16 font-bold">
                  Facility Management (Soft Services)
                </span>
              </li>
              <li className="list-before list-none">
                <span className="ml-16">IT Services</span>
              </li>
              <li className="list-before list-none">
                <span className="ml-16">Security Services</span>
              </li>
              <li className="list-before list-none">
                <span className="ml-16">MEP Services</span>
              </li>
              <li className="list-before list-none">
                <span className="ml-16">
                  Civil Engineering & Maintenance Services
                </span>
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
