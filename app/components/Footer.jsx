import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container mx-auto p-8 flex justify-between items-center">
        <Image
          src="/images/hmtc.png"
          alt="Company Logo"
          className="w-12 h-12 lg:w-16 lg:h-16"
          width={64}
          height={64}
        />
        <p className="text-slate-600 text-sm md:text-base">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
