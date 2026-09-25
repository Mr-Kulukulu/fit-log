
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-400 bg-black py-7 ">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="FitLog logo"
            width={20}
            height={20}
          />
          <h2 className="font-bold">FITLOG</h2>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 sm:text-right">
          <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

