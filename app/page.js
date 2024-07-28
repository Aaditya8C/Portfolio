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
  StudyNexLogo,
  GdriveLogo,
  IgCloneLogo,
  SolidityLogo,
  EtherLogo,
} from "@/components/imageConstant";
import { NextLogo } from "@/components/imageConstant";
import About from "@/components/About";
import Projects from "@/components/Projects";
import SkillSet from "@/components/SkillSet";
import Work from "@/components/Work";
import * as animationData from "../public/Assets/work.json";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import { TracingBeam } from "@/components/animateedUi/TracingBeam";

export default function Home() {
  const projectData = [
    {
      title: "GDrive Dapp",
      desc: "Decentralized platfrom where user can connect to metamask wallet and can store the images on ipfs storage. Also users have the ability to grant and revoke the access to their content to different metamask users.",
      logo: GdriveLogo,
      tech: [
        "Ethers JS",
        "Next Js",
        "Typescript",
        "Tailwind CSS",
        "Material UI",
        "Solidity",
        "Metamask Wallet",
        "Alchemy",
      ],
      liveLink: "https://gdrive-dapp.vercel.app/",
      gitLink: "https://github.com/Aaditya8C/GDrive-Dapp-Client",
    },
    {
      title: "StudyNex",
      desc: "StudyNex is a powerful online platform that combines all the tools needed to run a successful class of school or college",
      logo: StudyNexLogo,
      tech: [
        "Next Js",
        "Tailwind CSS",
        "Material UI",
        "Socket & WebRTC",
        "Node Js",
        "Express Js",
        "Flask",
        "MongoDB",
      ],
      liveLink: "https://study-nex.vercel.app/",
      gitLink: "https://github.com/COD-23/StudyNex---Frontend",
    },
    {
      title: "SmartChat",
      desc: "SmartChat is a web based chat application that allows users to authenticate using their Github credentials & chat with other random github users.",
      logo: SmartChat,
      tech: [
        "Next Js",
        "Tailwind CSS",
        "GraphQL",
        "Apollo Client",
        "Github OAuth Apps",
      ],
      liveLink: "https://smart-chat-rho.vercel.app/",
      gitLink: "https://github.com/Aaditya8C/SmartChat",
    },
    {
      title: "TravelKing",
      desc: "Currently a static webpage,TravelKing is the web platform dedicated to the famous tourist spot Alibag. Using this platform tourists can book explore various activities & book stays in Alibag.",
      logo: TkFrontEnd,
      tech: ["Next Js", "Tailwind CSS", "Framer Motion", "AOS"],
      liveLink: "https://travel-king.vercel.app/",
      gitLink: "https://github.com/Aaditya8C/TravelKing",
    },
    {
      title: "TravelKing Admin",
      desc: "It is the admin panel for TravelKing platform that allows the lodge owners to register their lodge & update,track booking status for individual lodge/hotel.",
      logo: TkAdmin,
      tech: ["Next Js", "Tailwind CSS", "Node Js", "Express Js", "MongoDB"],
      liveLink: "https://travel-king-admin.vercel.app/",
      gitLink: "https://github.com/Aaditya8C/TravelKing-Admin",
    },
    {
      title: "Instagram Clone",
      desc: "This is the clone of Instagram's mobile app (work in progress)",
      logo: IgCloneLogo,
      tech: [
        "React Native",
        "Nativewind",
        "Typescript",
        "Yupp",
        "Formik",
        "Firebase",
      ],
      liveLink: "",
      gitLink: "https://github.com/Aaditya8C/Instagram_Clone_React_Native",
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
      label: "Tailwind",
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
      label: "React Native",
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
      label: "EthersJs",
      logo: EtherLogo,
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
      desc: "I've worked as a full stack web developer intern at this organization. Organization is having their own product so I've worked on development side of that product. Worked on live projects such as creating new pages for the website, fixing bugs in the live website,creating API's & much more. I've worked on technologies such as Next js, React js, Tailwind CSS, Laravel & MySQL etc.",
      options: defaultOptions,
      // tech: ["Next Js", "Tailwind CSS",],
    },
  ];

  return (
    // <TracingBeam>
    <div className="grid place-items-center m-auto">
      <div className="grid gap-10 pt-5 px-6 lg:w-3/4 text-center">
        {/* Intro */}
        <Intro />
        <About />

        {/* Projects */}
        <Projects data={projectData} />

        <SkillSet data={skillSet} />

        <Work data={workExperience} />
      </div>
      <Contact />
    </div>
    // </TracingBeam>
  );
}
