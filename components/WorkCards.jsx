"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import LottiePlayer from "./LottiePlayer";

const WorkCards = ({ data }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="ripple-bg bg-cyan-950 text-violet-950 p-10 rounded-tl-3xl rounded-br-3xl shadow- grid gap-6"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
    >
      <div className="flex flex-col justify-center items-center gap-10">
        {/* <Image src={data.logo} width={200} height={200} /> */}
        <LottiePlayer
          animationData={data.options?.animationData}
          width={200}
          height={200}
        />
        <p className="font-semibold text-xl md:text-2xl text-center text-orange-200">
          {data.org}
        </p>
      </div>
      <p className="text-xl font-semibold text-white">{data.position}</p>
      <p className="text-lg text-justify tracking-normal text-slate-200">
        {data.desc}
      </p>
    </div>
  );
};

export default WorkCards;
