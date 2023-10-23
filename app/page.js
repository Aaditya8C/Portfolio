"use client";
import Image from "next/image";
import {
  MyImage3,
  TkFrontEnd,
  TkAdmin,
  SmartChat,
  ReactLogo,
  TailwindLogo,
  NodeLogo,
  ExpressLogo,
  MongoLogo,
  MysqlLogo,
  LaravelLogo,
  CppLogo,
  JavaLogo,
  PythonLogo,
  GithubLogo,
  Medisage,
} from "@/components/imageConstant";
import Button from "@/components/Button";
import { FiArrowRight } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { composeUrl, gitHubProfile, linkedInProfile } from "@/components/linkConstant";
import { NextLogo } from "@/components/imageConstant";
import About from "@/components/About";
import Projects from "@/components/Projects";
import SkillSet from "@/components/SkillSet";
import Work from "@/components/Work";
import * as animationData from "../public/Assets/work.json";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";

export default function Home() {
  
  const projectData = [
    {
      title: "SmartChat",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus iure,consectetur cum magni fugit praesentium unde nihil error eos recusandae.",
      logo: SmartChat,
      tech: [
        "Next Js",
        "Tailwind CSS",
        "GraphQL",
        "Apollo Client",
        "Github OAuth Apps",
      ],
    },
    {
      title: "TravelKing",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus iure,consectetur cum magni fugit praesentium unde nihil error eos recusandae.",
      logo: TkFrontEnd,
      tech: ["Next Js", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "TravelKing Admin",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus iure,consectetur cum magni fugit praesentium unde nihil error eos recusandae.",
      logo: TkAdmin,
      tech: ["Next Js", "Tailwind CSS", "Node Js", "Express Js", "MongoDB"],
    },
  ];

  const skillSet = [
    {
      label: "Next.js",
      logo: NextLogo,
    },
    {
      label: "React Js",
      logo: ReactLogo,
    },
    {
      label: "Tailwind CSS",
      logo: TailwindLogo,
    },
    {
      label: "Node.js",
      logo: NodeLogo,
    },
    {
      label: "Express Js",
      logo: ExpressLogo,
    },
    {
      label: "MongoDB",
      logo: MongoLogo,
    },
    {
      label: "MySQL",
      logo: MysqlLogo,
    },
    {
      label: "Laravel",
      logo: LaravelLogo,
    },
    {
      label: "C++",
      logo: CppLogo,
    },
    {
      label: "Java",
      logo: JavaLogo,
    },
    {
      label: "Python",
      logo: PythonLogo,
    },
    {
      label: "Github",
      logo: GithubLogo,
    },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const workExperience = [
    {
      org: "MediSage E-learning Pvt. Ltd.",
      position: "Full Stack Web Developer",
      desc: "I've worked as a full stack web developer intern at this organis=zation. Organization is having their own product so I've worked on development side of that product. Worked on live projects such as creating new pages for the website, fixing bugs in the live website,creating API's & much more. I've worked on technologies such as Next js, React js, Tailwind CSS, Laravel & MySQL etc.",
      options: defaultOptions,
      // tech: ["Next Js", "Tailwind CSS",],
    },
  ];

  return (
    <div className="grid place-items-center lg:w-[80%] m-auto">
      <div className="grid gap-10 py-20 px-6 lg:w-3/4 text-center">
        {/* Intro */}
        <Intro/>
        <About />

        {/* Projects */}
        <Projects data={projectData} />

        <SkillSet data={skillSet} />

        <Work data={workExperience} />

      </div>
        <Contact/>
    </div>
  );
}
