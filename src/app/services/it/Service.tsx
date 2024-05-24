import React from "react";
import it1 from "@/../public/assets/images/it1.png";
import it2 from "@/../public/assets/images/it2.png";
import it3 from "@/../public/assets/images/it3.png";
import it4 from "@/../public/assets/images/it4.png";
import {serviceList} from "../../page";
import classNames from "classnames";

const Service = () => {
  return (
    <section className="bg-lightOrange">
      <div className="container mx-auto px-4 pt-16 lg:px-24 lg:pt-32">
        <div className="lg:grid lg:grid-cols-2 lg:gap-10">
          <div>
            <div className="lg:text-4xl text-base font-bold text-center lg:text-left">
              Our services
            </div>
            <div className="mt-5 lg:mt-10 text-[9px] w-3/4 lg:w-full lg:text-base text-justify m-auto lg:m-0">
              Welcome to ES SUPPORT&apos;s comprehensive IT Services. We
              specialize in providing tailored solutions to meet all your IT
              needs, including desktop maintenance, software maintenance, and
              hardware work.
            </div>

            <div className="mt-3 lg:mt-10 text-[9px] w-3/4 lg:text-base lg:w-full text-justify m-auto lg:m-0">
              <div className="lg:mx-0 mt-2 lg:mt-5 text-[9px] font-bold lg:text-base">
                a. Desktop Maintenance:
              </div>
              <div>
                Keeping your desktop systems in optimal condition is crucial for
                maintaining productivity and efficiency within your
                organization. Our desktop maintenance services include:
              </div>
              <ul className="ml-5">
                <li className="list-disc">
                  Regular system checks and updates to ensure smooth
                  performance.
                </li>
                <li className="list-disc">
                  Virus and malware protection to safeguard your systems and
                  data.
                </li>
                <li className="list-disc">
                  Troubleshooting and resolution of hardware and software
                  issues.
                </li>
                <li className="list-disc">
                  Data backup and recovery solutions to prevent data loss.
                </li>
                <li className="list-disc">
                  Remote assistance for quick problem resolution without
                  disrupting your workflow.
                </li>
              </ul>
            </div>

            <div className="mt-3 lg:mt-10 text-[9px] w-3/4 lg:text-base lg:w-full text-justify m-auto lg:m-0">
              <div className="lg:mx-0 mt-2 lg:mt-5 text-[9px] font-bold lg:text-base">
                b. Software Maintenance:
              </div>
              <div>
                Software is the backbone of modern businesses, and maintaining
                it is essential for security, performance, and functionality.
                Our software maintenance services encompass:
              </div>
              <ul className="ml-5">
                <li className="list-disc">
                  Installation, configuration, and updates of operating systems
                  and applications.
                </li>
                <li className="list-disc">
                  Patch management to address security vulnerabilities and
                  improve stability.
                </li>
                <li className="list-disc">
                  License management to ensure compliance and optimize costs.
                </li>
                <li className="list-disc">
                  Performance monitoring and optimization to enhance efficiency
                </li>
                <li className="list-disc">
                  Technical support and help desk services for software-related
                  issues.
                </li>
              </ul>
            </div>

            <div className="mt-3 lg:mt-10 text-[9px] w-3/4 lg:text-base lg:w-full text-justify m-auto lg:m-0">
              <div className="lg:mx-0 mt-2 lg:mt-5 text-[9px] font-bold lg:text-base">
                c. Hardware Work:
              </div>
              <div>
                Your hardware infrastructure forms the foundation of your IT
                environment, and keeping it in top condition is vital for
                seamless operations. Our hardware work services include:
              </div>
              <ul className="ml-5">
                <li className="list-disc">
                  Installation, configuration, and upgrades of desktops,
                  laptops, servers, and networking equipment.
                </li>
                <li className="list-disc">
                  Hardware diagnostics and repairs to resolve issues quickly and
                  minimize downtime.
                </li>
                <li className="list-disc">
                  Hardware procurement assistance to help you choose the right
                  equipment for your needs.
                </li>
                <li className="list-disc">
                  Preventive maintenance to prolong the lifespan of your
                  hardware and reduces the risk of failures.
                </li>
                <li className="list-disc">
                  Infrastructure planning and design to ensure scalability and
                  reliability.
                </li>
              </ul>
            </div>

            <div className="mt-3 lg:mt-10 text-[9px] w-3/4 lg:text-base lg:w-full text-justify m-auto lg:m-0">
              <div>
                At ES SUPPORT, we understand the importance of reliable IT
                services in today&apos;s business landscape. With our expertise
                and commitment to excellence, we ensure that your IT
                infrastructure remains robust, secure, and efficient, allowing
                you to focus on your core business objectives. Contact us today
                to learn more about how we can support your IT needs.
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 pb-20 pt-10 gap-2">
              <div className="lg:col-span-2">
                <img src={it1.src} />
              </div>
              <div>
                <img src={it2.src} className="h-full" />
              </div>
              <div>
                <img src={it3.src} className="h-full" />
              </div>
              <div className="lg:col-span-2">
                <img src={it4.src} />
              </div>
            </div>
          </div>
          <div className="border-l-4 border-orange rounded-box relative hidden lg:block">
            <div className="flex flex-col gap-5 h-full">
              <div className="h-[200px] flex items-end justify-start p-10 lg:text-2xl font-bold">
                Our Services
              </div>
              {serviceList.map((item, idx) => (
                <a className="list-before" href={item.url} key={idx}>
                  <span
                    className={classNames("ml-16", {
                      "font-bold": item.url === "/it",
                    })}
                  >
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
