'use client'
import Image from "next/image";
import logo from "../../public/RYU.png";
import Link from "next/link";
import { useState, useEffect } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Actualizar el año actual cuando el componente se monte
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="w-full shadow-sm flex items-right justify-between gap-2 px-3 z-50 pb-4 max-w-screen-lg mx-auto lg:px-20 ">
      <p>
        &copy; {currentYear} Enzo Cámera ——{" "}
        <span className="text-xl">
          🇦🇷
        </span>
      </p>
    </div>
  );
};

export default Footer;
