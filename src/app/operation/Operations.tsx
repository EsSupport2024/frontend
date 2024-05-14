"use client";
import Accordion, {AccordionItem} from "@/components/Accordion";
import React from "react";
import operation1 from "@/../public/assets/images/operation1.png";
import operation2 from "@/../public/assets/images/operation2.png";
import operation3 from "@/../public/assets/images/operation3.png";
import operation4 from "@/../public/assets/images/operation4.png";

const Operations = () => {
  return (
    <section className="bg-lightOrange">
      <div className="container mx-auto px-4 pt-16 md:px-24 md:pt-32">
        <div className="md:grid md:grid-cols-2 md:gap-10">
          <div>
            <div className="md:text-4xl text-base font-bold text-center md:text-left">
              Our services
            </div>
            <div className="mt-5 md:mt-10 text-[9px] w-3/4 md:w-full md:text-base text-justify m-auto md:m-0">
              Dive into unparalleled technical prowess with ES SUPPORT. Our
              commitment is to align seamlessly with the unique needs of
              enterprises and organizations of all sizes, delivering a diverse
              range of operational and maintenance services alongside top-notch
              engineering consultancy. At ES SUPPORT, we don&apos;t just provide
              services – we embark on a journey with our clients, determined to
              exceed expectations and deliver desired results.
            </div>
            <div className="mt-3 md:mt-10 text-[9px] w-3/4 md:w-full md:text-base text-justify m-auto md:m-0">
              With a seasoned technical team boasting extensive experience
              across various industries, we tailor solutions to the distinct
              nuances of our client&apos;s industries. From comprehensive fleet
              management to robust quality assurance, ES SUPPORT ensures clients
              not only meet but exceed their operational goals.
            </div>
            <div className="mt-3 md:mt-10 text-[9px] w-3/4 md:text-base md:w-full text-justify m-auto md:m-0">
              Choose ES SUPPORT for a transformative journey towards operational
              excellence, where technical expertise meets unwavering commitment
              to client success.
            </div>
            <div className="w-3/4 md:w-full m-auto">
              <Accordion title="A. HVAC plant maintenance">
                <AccordionItem>
                  <div className="space-y-5">
                    <div className="text-[9px] md:text-base w-full text-justify">
                      Discover our specialized HVAC(HEATING VENTILATION AND AIR
                      CONDITIONING SERVICE) plant maintenance services at ES
                      SUPPORT, surpassing conventional solutions. Our skilled
                      technicians ensure peak performance and longevity for your
                      HVAC systems. From routine inspections to proactive
                      repairs and optimization, we prioritize seamless
                      operation.
                    </div>
                    <div className="text-[9px] md:text-base w-full text-justify">
                      With precision and attention to detail, our approach to
                      HVAC maintenance acknowledges the pivotal role these
                      systems play in maintaining comfort and productivity.
                      Through regular assessments and preventive measures, we
                      detect potential issues early, minimizing downtime and
                      costly repairs.
                    </div>
                    <div className="text-[9px] md:text-base w-full text-justify">
                      At ES SUPPORT, we customize our HVAC plant maintenance
                      services to suit your facility&apos;s unique needs,
                      whether commercial, industrial, or residential. Our aim is
                      to enhance energy efficiency, indoor air quality, and
                      equipment lifespan.
                    </div>
                    <div className="text-[9px] md:text-base">
                      <div>Our HVAC services include:</div>
                      <li className="list-disc">
                        AMC (Annual Maintenance Contract)
                      </li>
                      <li className="list-disc">Chiller Installation</li>
                      <li className="list-disc">AHU Installation</li>
                      <li className="list-disc">TFA Installation</li>
                      <li className="list-disc">VRF/VRV Units</li>
                      <li className="list-disc">
                        Package/Ductable/Split/Windows
                      </li>
                    </div>
                  </div>
                </AccordionItem>
              </Accordion>
              <Accordion title="B. Substation maintenance">
                <AccordionItem>
                  <div className="space-y-5">
                    <div className="text-[9px] md:text-base w-full text-justify">
                      Enhance your electrical infrastructure with ES
                      Support&apos;s premier Maintenance Solutions. Specializing
                      in comprehensive electrical maintenance, our skilled
                      professionals ensure seamless operation across commercial,
                      industrial, and residential settings. Our services include
                      proactive measures like routine inspections, diagnostic
                      assessments, and targeted repairs to optimize efficiency
                      and prevent downtime. We understand the vital role of
                      electrical systems and are committed to extending their
                      operational life.
                    </div>
                    <div className="text-[9px] md:text-base w-full text-justify">
                      Our comprehensive approach includes routine inspections,
                      proactive repairs, and advanced diagnostics to safeguard
                      your critical assets. Recognizing the importance of
                      substations in power distribution, we employ cutting-edge
                      techniques to address issues before they impact
                      operations.
                    </div>
                    <div className="text-[9px] md:text-base w-full text-justify">
                      At ES Support, we understand the unique challenges of each
                      substation. Our tailored solutions cater to the specific
                      needs of your facility, whether utility-scale, industrial,
                      or commercial. Partner with us for resilience, efficiency,
                      and longevity in your electrical infrastructure.
                    </div>
                    <div className="text-[9px] md:text-base w-full text-justify">
                      Choose ES Support for trusted Substation Maintenance,
                      where technical expertise meets operational excellence.
                      With us, your electrical systems are in capable hands,
                      ensuring uninterrupted power supply and sustained success.
                    </div>
                  </div>
                </AccordionItem>
              </Accordion>
              <Accordion title="C. Electric maintenance">
                <AccordionItem>
                  <div className="space-y-5">
                    <div className="text-[9px] md:text-base w-full text-justify">
                      Enhance your electrical infrastructure with ES
                      Support&apos;s premier Maintenance Solutions. Specializing
                      in comprehensive electrical maintenance, our skilled
                      professionals ensure seamless operation across commercial,
                      industrial, and residential settings. Our services include
                      proactive measures like routine inspections, diagnostic
                      assessments, and targeted repairs to optimize efficiency
                      and prevent downtime. We understand the vital role of
                      electrical systems and are committed to extending their
                      operational life.
                    </div>
                    <div className="text-[9px] md:text-base w-full text-justify">
                      ES Support tailors solutions to your unique needs, whether
                      for power distribution panels, lighting systems, or other
                      components. Choose us as your trusted partner for
                      operational excellence and peace of mind in your
                      electrical infrastructure&apos;s reliability and
                      longevity.
                    </div>
                  </div>
                </AccordionItem>
              </Accordion>
              <Accordion title="D. Lifts/elevator maintenance">
                <AccordionItem>
                  <div className="text-[9px] md:text-base w-full text-justify">
                    We recognize the pivotal role elevators and lifts play in
                    the smooth operation of your commercial or residential
                    premises. Our specialized elevator maintenance services are
                    crafted to optimize the performance of your vertical
                    transportation systems, providing a steadfast commitment to
                    safety, reliability, and efficiency.
                  </div>
                </AccordionItem>
              </Accordion>
              <Accordion title="E. CCTV maintenance">
                <AccordionItem>
                  <div className="text-[9px] md:text-base w-full text-justify">
                    At our company, we understand the critical importance of
                    maintaining a secure and vigilant environment for your
                    business or residential space. Our dedicated CCTV
                    maintenance services are designed to ensure that your
                    surveillance systems function optimally, providing
                    continuous protection and peace of mind.
                  </div>
                </AccordionItem>
              </Accordion>
              <Accordion title="F. Fire fighting maintenance">
                <AccordionItem>
                  <div className="text-[9px] md:text-base w-full text-justify">
                    we understand the critical significance of sustaining a
                    strong and dependable fire fighting system to protect lives
                    and property. Our unwavering commitment to fire fighting
                    maintenance is crafted to guarantee that your fire
                    protection infrastructure consistently operates at its best,
                    offering you the assurance and tranquility you deserve.
                  </div>
                </AccordionItem>
              </Accordion>
              <Accordion title="G. Housekeeping service"></Accordion>
              <Accordion title="H. Sewage treatment plant maintenance">
                <AccordionItem>
                  <div className="text-[9px] md:text-base w-full text-justify">
                    At ES Support, we understand the critical role that sewage
                    treatment plants play in maintaining environmental
                    sustainability and public health. Our specialized sewage
                    treatment plant maintenance services are tailored to ensure
                    that your infrastructure operates efficiently, promoting a
                    clean and safe environment for all.
                  </div>
                </AccordionItem>
              </Accordion>
              <Accordion title="I. Water maintenance">
                <AccordionItem>
                  <div className="text-[9px] md:text-base w-full text-justify">
                    At ES Support, we recognize the vital role that water
                    treatment plants play in ensuring access to clean and safe
                    water. Our specialized water treatment plant maintenance
                    services are meticulously crafted to guarantee the
                    consistent and efficient operation of your infrastructure,
                    promoting the well-being of communities and the environment.
                  </div>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 pb-20 pt-10 gap-2">
              <div className="md:col-span-2">
                <img src={operation1.src} />
              </div>
              <div>
                <img src={operation4.src} />
              </div>
              <div>
                <img src={operation3.src} />
              </div>
              <div className="md:col-span-2">
                <img src={operation2.src} />
              </div>
            </div>
          </div>
          <div className="border-l-4 border-orange rounded-box relative hidden md:block">
            <div className="flex flex-col gap-5 h-full">
              <div className="h-[200px] flex items-end justify-start p-10 md:text-2xl font-bold">
                Our Services
              </div>
              <li className="list-before list-none">
                <span className="ml-16 font-bold">
                  Operation and Maintenance Services
                </span>
              </li>
              <li className="list-before list-none">
                <span className="ml-16">
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

export default Operations;
