import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const ProjectCard = ({ data }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="rounded-3xl bg-gray-100 p-10 gap-20 overflow-hidden relative group flex items-center odd:flex-row-reverse hover:bg-gray-200 transition duration-200"
      data-aos="zoom-in-up"
      data-aos-duration="1500"
    >
      <div className="grid sm:max-w-[50%] gap-8 md:group-odd:ml-[22rem] ">
        <p className="font-semibold text-xl md:text-2xl text-left">
          {data.title}
        </p>
        <p className="text-lg text-left">{data.desc}</p>

        <div className="flex flex-wrap gap-4">
          {data.tech.map((item, index) => {
            return (
              <p
                key={index}
                className="bg-gray-600 text-white py-1 px-3 text-sm rounded-full shrink-0"
              >
                {item}
              </p>
            );
          })}
        </div>
      </div>

      {/* <div className="hidden md:block absolute top-20 shadow-2xl right-0 w-[450px] group-odd:right-[initial] group:odd:left-0">
        <Image
          src={data.logo}
          // width={1000}
          // height={1000}
          alt="project"
          quality={95}
          className="rounded-t-xl"
        />
      </div> */}
      <div
        className="hidden md:block shadow-2xl 
        absolute top-16 bottom-16 -right-8 group-odd:right-[initial] group-odd:-left-8 
        group-hover:scale-105
        group-hover:-translate-x-3
        group-hover:translate-y-3 
        group-hover:-rotate-2 
        group-odd:group-hover:translate-x-3
        group-odd:group-hover:-translate-y-3 
        group-odd:group-hover:rotate-2 
        transition duration-300"
      >
        <Image
          src={data.logo}
          width={2000}
          height={2000}
          alt="project"
          quality={100}
          className="rounded-t-xl w-[20rem] lg:w-[20rem] h-full
          "
        />
      </div>
    </div>
  );
};

export default ProjectCard;
