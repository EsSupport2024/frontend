import React from "react";
import WhatsAppIcon from "@/../public/assets/images/whatsapp.png";

const WhatsApp = () => {
  return (
    <a
      className="fixed right-[100px] bottom-[100px]"
      href="https://wa.me/+919718767374"
    >
      <img src={WhatsAppIcon.src} alt="" />
    </a>
  );
};

export default WhatsApp;
