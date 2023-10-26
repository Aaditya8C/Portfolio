import Image from "next/image";
import React, { useEffect } from "react";
import Lottie from "react-lottie";
import Aos from "aos";
import "aos/dist/aos.css";

const WorkCards = ({ data }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="bg-gray-100 p-10 rounded-tl-3xl rounded-br-3xl shadow- grid gap-6"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
    >
      <div className="flex flex-col justify-center items-center gap-10">
        {/* <Image src={data.logo} width={200} height={200} /> */}
        <Lottie options={data.options} width={200} height={200} />
        <p className="font-semibold text-xl md:text-2xl text-center">
          {data.org}
        </p>
      </div>
      <p className="text-xl font-semibold">{data.position}</p>
      <p className="text-lg text-justify tracking-normal">{data.desc}</p>
    </div>
  );
};

export default WorkCards;
