import React from "react";
import WhatsAppIcon from "@/../public/assets/images/whatsapp.png";

const WhatsApp = () => {
  return (
    <a
      className="fixed lg:right-[100px] lg:bottom-[100px] right-[50px] bottom-[50px]"
      href="https://wa.me/+919718767374"
    >
      <img
        src={WhatsAppIcon.src}
        alt="es-support whatsApp link"
        className="h-8 lg:h-full w-auto"
      />
    </a>
  );
};

export default WhatsApp;
