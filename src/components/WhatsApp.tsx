import React from "react";
import WhatsAppIcon from "@/../public/assets/images/whatsapp.png";

const WhatsApp = () => {
  return (
    <a
      className="fixed md:right-[100px] md:bottom-[100px] right-[50px] bottom-[50px]"
      href="https://wa.me/+919718767374"
    >
      <img src={WhatsAppIcon.src} alt="es-support whatsApp link" className="h-8 md:h-full w-auto" />
    </a>
  );
};

export default WhatsApp;
