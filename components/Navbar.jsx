"use client";

import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PiSunBold, PiMoonBold } from "react-icons/pi";
import classNames from "classnames";
import { useActiveSectionContext } from "@/context/active-section-context";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const { activeSection, setActiveSection } = useActiveSectionContext();
  const [isShow, setIsShow] = useState(false);
  const navbarItems = [
    {
      name: "Home",
      link: "#Home",
    },
    {
      name: "About",
      link: "#About",
    },
    {
      name: "Projects",
      link: "#Projects",
    },
    {
      name: "Skills",
      link: "#Skills",
    },
    {
      name: "Experience",
      link: "#Experience",
    },
    {
      name: "Contact",
      link: "#Contact",
    },
  ];

  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="sticky top-0 z-[999] md:py-6 lg:w-[50%] m-auto">
      <div className="absolute px-8 md:px-14 py-1 hidden">
        <div
          className="p-2 rounded-full bg-white cursor-pointer"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? (
            <PiSunBold className="text-gray-500" />
          ) : (
            <PiMoonBold className="text-gray-500" />
          )}
        </div>
      </div>
      <div className="absolute right-6">
        <HiMenuAlt3
          className="h-8 w-8 md:hidden"
          onClick={() => setIsShow(true)}
        />
      </div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // transition={{duration:.5,type:'spring'}}
        className="md:justify-center z-[999]"
      >
        <div
          className={classNames(
            " bg-gray-50 bg-opacity-90 backdrop-blur-sm md:rounded-full shadow-lg px-6 py-2 transition-all duration-300",
            isShow ? "translate-y-0" : "-translate-y-80 md:translate-y-0"
          )}
        >
          <ul className="flex gap-6 md:gap-10 flex-wrap justify-center">
            {navbarItems.map((item, index) => {
              return (
                <motion.li
                  key={index}
                  className={classNames(
                    "grow md:cursor-pointer transition-all duration-300 p-3 relative",
                    activeSection == item.name ? "text-black" : "text-gray-600 "
                  )}
                  onClick={() => setActiveSection(item.name)}
                >
                  {item.name === activeSection && (
                    <motion.span
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      className="absolute -z-10 inset-0 bg-gray-200 rounded-tl-2xl rounded-br-2xl"
                    ></motion.span>
                  )}
                  <Link href={item.link}>{item.name}</Link>
                </motion.li>
              );
            })}
            <AiOutlineCloseCircle className="w-8 h-8 text-gray-500 md:hidden" onClick={() => setIsShow(false)}/>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
