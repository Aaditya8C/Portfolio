import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { FaShareFromSquare } from "react-icons/fa6";
import Button from "./Button";

const ProjectCard = ({ data }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="ripple-bg rounded-3xl bg-cyan-950 text-white p-10 gap-4 overflow-hidden relative group flex flex-col items-center  transition-all duration-500 "
      // className="rounded-3xl bg-gray-600 text-white p-10 gap-4 overflow-hidden relative group flex flex-col items-center transition-all duration-500 hover:bg-gray-700"
      data-aos="zoom-in-up"
      data-aos-duration="1500"
    >
      <div className="flex justify-center">
        <Image
          src={data.logo}
          width=""
          height=""
          alt="project"
          quality={100}
          className="rounded-3xl  w-[85%] h-64 object-contain hover:scale-110 hover:rounded-none  transition duration-300
          "
        />
      </div>
      <div className="grid lg:max-w-full place-content-center place-items-center gap-4 ">
        <p className="font-semibold text-xl lg:text-2xl text-left text-orange-200">
          {data.title}
        </p>
        <p className="text-lg text-left text-slate-200">{data.desc}</p>

        <div className="flex flex-wrap gap-4">
          {data.tech.map((item, index) => {
            return (
              <p
                key={index}
                className="bg-cyan-900 font-semibold text-orange-200 py-2 px-4 text-sm rounded-full shrink-0 "
              >
                {item}
              </p>
            );
          })}
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <Link href={data.liveLink} target="_blank">
            <Button
              btnText="Live Demo"
              invert
              className="text-gray-500  text-sm"
            >
              <FaShareFromSquare className="h-4 w-4" />
            </Button>
          </Link>
          <Link href={data.gitLink} target="_blank">
            <Button
              btnText="View Github"
              invert
              className="text-gray-500 text-sm"
            >
              <FaShareFromSquare className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* <div
        className="hidden lg:block shadow-2xl 
        absolute top-32 bottom-10 -right-8 group-odd:right-[initial] group-odd:-left-8 h-fit
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
          width={0}
          height={0}
          alt="project"
          quality={100}
          className="rounded-t-xl w-[20rem] object-contain 
          "
        />
      </div> */}
    </div>
  );
};

export default ProjectCard;
