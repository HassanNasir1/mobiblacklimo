import React from "react";

const WhatsAppIcon = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=923335565809&text=Hi!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-green-500 p-4 rounded-full shadow-lg"
      title="Contact through WhatsApp" // Add the title attribute
    >
      <img
        src="/icons8-whatsapp.svg" // Replace with the correct path to your logo
        alt="WhatsApp Icon"
        className="w-8 h-8"
      />
    </a>
  );
};

export default WhatsAppIcon;
