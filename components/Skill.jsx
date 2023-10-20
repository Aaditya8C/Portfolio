import React from "react";
import { NextLogo } from "./imageConstant";
import Image from "next/image";
import { motion } from "framer-motion";
const Skill = ({ data, index }) => {
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
      // viewport={{
      //   once:true // to perform animation only once
      // }}
      custom={index}
      className="flex flex-col gap-4 p-4 flex-wrap items-center"
    >
      <Image src={data.logo} height={80} width={80} alt="my skills" className="shrink-0 grow" />
      <div className="bg-white p-4 text-center border rounded-lg shadow-lg shrink-0">
        <p>{data.label}</p>
      </div>
    </motion.div>
  );
};

export default Skill;
