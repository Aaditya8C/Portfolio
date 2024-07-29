import React from "react";
import { NextLogo } from "./imageConstant";
import Image from "next/image";
import { motion } from "framer-motion";
const Skill = ({ data, index, ItemLogo }) => {
  const animationData = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  return (
    <motion.div
      variants={animationData}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true, // to perform animation only once
      }}
      custom={index}
      className="flex flex-col  gap-4 justify-center items-center"
    >
      {/* <Image
        src={data.logo}
        height={60}
        width={60}
        alt="my skills"
        className="rounded-full"
      /> */}
      {/* {data.logo} */}
      {ItemLogo && <ItemLogo size={40} color="cyan" />}

      <div className="bg-cyan-800 text-orange-200 p-2 text-center border-violet-950 rounded-lg shadow-lg">
        <p>{data.label}</p>
      </div>
    </motion.div>
  );
};

export default Skill;
