import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ data }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Link
      className="rounded-3xl bg-gray-100 p-10 gap-20 overflow-hidden relative group flex flex-row items-center odd:flex-row-reverse hover:bg-gray-200 transition duration-200 md:cursor-pointer"
      data-aos="zoom-in-up"
      data-aos-duration="1500"
      href={data.link}
      target="_blank"
    >
      <div className="grid lg:max-w-[50%] place-content-center place-items-center gap-8 lg:group-odd:ml-[22rem] ">
        <p className="font-semibold text-xl lg:text-2xl text-left">
          {data.title}
        </p>
        <Image
          src={data.logo}
          width={2000}
          height={2000}
          alt="project"
          quality={100}
          className="lg:hidden rounded-t-xl w-[20rem] lg:w-[20rem] h-full
          "
        />
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

      <div
        className="hidden lg:block shadow-2xl 
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
    </Link>
  );
};

export default ProjectCard;
