"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PiSunBold, PiMoonBold } from "react-icons/pi";

const Navbar = () => {
  const navbarItems = [
    {
      tab: "Home",
      redirect: "#Home",
    },
    {
      tab: "About",
      redirect: "#About",
    },
    {
      tab: "Projects",
      redirect: "#Projects",
    },
    {
      tab: "Skills",
      redirect: "#Skills",
    },
    {
      tab: "Experience",
      redirect: "#Experience",
    },
    {
      tab: "Contact",
      redirect: "#Contact",
    },
  ];

  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="sticky top-0 z-[999] md:py-6">
      <div className="absolute px-14 py-1">
        <div
          className="p-3 rounded-full bg-white cursor-pointer"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {
            isDarkMode? (
              <PiSunBold className="text-gray-500" />
            ) : (
              <PiMoonBold className="text-gray-500" />
            )
          }
        </div>
      </div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // transition={{duration:.5,type:'spring'}}
        className="flex md:justify-center "
      >
        <div className="bg-gray-100 bg-opacity-90 backdrop-blur-sm md:rounded-full shadow-lg px-6 py-2">
          <ul className="flex gap-10 flex-wrap">
            {navbarItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className="grow hover:bg-gray-200 d:cursor-pointer  rounded-tl-2xl rounded-br-2xl transition-all duration-300  p-3"
                >
                  <Link href={item.redirect}>{item.tab}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
