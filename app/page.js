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
  CpClubLogo,
  NftAuctionLogo,
} from "@/components/imageConstant";
import { NextLogo } from "@/components/imageConstant";
import About from "@/components/About";
import Projects from "@/components/Projects";
import SkillSet from "@/components/SkillSet";
import Work from "@/components/Work";
import * as animationData from "../public/Assets/work.json";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import { RiReactjsLine, RiJavaFill } from "react-icons/ri";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiLaravel,
  SiEthers,
  SiGithub,
  SiPython,
} from "react-icons/si";
import { TbBrandReactNative, TbBrandMysql, TbBrandCpp } from "react-icons/tb";
import { BiLogoJava } from "react-icons/bi";
import { IoMdCloudy } from "react-icons/io";

export default function Home() {
  const projectData = [
    {
      title: "StudyNex – Real-Time Group Study Platform",
      desc: "Built a scalable real-time collaboration platform with WebSocket-based chat (text, images, files via Cloudinary) and Discord-like dynamic channels. Integrated gamified leaderboard using Recharts to drive engagement and retention.",
      logo: StudyNexLogo,
      tech: [
        "Next.js",
        "Node.js",
        "Express.js",
        "WebSockets",
        "MongoDB",
        "Cloudinary",
        "Recharts",
      ],
      liveLink: "https://study-nex.vercel.app/",
      gitLink: "https://github.com/COD-23/StudyNex---Frontend",
    },
    {
      title: "Multimodal Depression Detection System",
      desc: "Developed an AI-driven system to detect depression signals using multimodal inputs including facial expressions, speech patterns, and textual sentiment. Combined computer vision, NLP, and audio analysis to improve prediction robustness over single-modality systems. Designed the system to be extensible with EEG-based brain signal analysis for future clinical-grade insights.",
      logo: null, // optional: add AI/brain themed logo
      tech: [
        "Python",
        "TensorFlow / PyTorch",
        "OpenCV",
        "NLP",
        "Speech Processing",
        "Flask",
      ],
      liveLink: "",
      gitLink:
        "https://github.com/Aaditya8C/Depression_Detection_Using_Fusion_Models",
    },
    {
      title: "DSync – Decentralized File Sharing Platform",
      desc: "Engineered a blockchain-based file sharing system where users authenticate via MetaMask and upload files to IPFS using Pinata. Implemented fine-grained access control (grant/revoke permissions) using smart contracts, eliminating reliance on centralized storage.",
      logo: GdriveLogo,
      tech: [
        "Next.js",
        "TypeScript",
        "Solidity",
        "Ethers.js",
        "IPFS",
        "Pinata",
        "MetaMask",
      ],
      liveLink: "https://gdrive-dapp.vercel.app/",
      gitLink: "https://github.com/Aaditya8C/GDrive-Dapp-Client",
    },
    {
      title: "Competitive Programming Analytics Platform",
      desc: "Built a centralized analytics platform for the college’s CP club, aggregating data from multiple platforms like LeetCode, Codeforces, and CodeChef to provide a unified dashboard. Implemented features such as global leaderboard, topic-wise problem analysis, heatmaps, and contest calendar to help members track progress and stay consistent. Optimized data fetching using GraphQL (LeetCode) and caching via localStorage to reduce API calls and improve performance.",
      logo: CpClubLogo,
      tech: ["Next.js", "Tailwind CSS", "Axios", "GraphQL", "LocalStorage"],
      liveLink: "https://cp-club-vjti.vercel.app/",
      gitLink: "https://github.com/Aaditya8C/CP-CLUB-Website",
    },
    {
      title: "NFT Auction Platform (On-Chain)",
      desc: "Built a blockchain-based NFT auction system where users can mint, bid, and trade digital assets on-chain. Implemented smart contracts for bidding logic, ownership transfer, and auction lifecycle, ensuring transparency and trustless execution.",
      logo: NftAuctionLogo,
      tech: ["Solidity", "Ethers.js", "Next.js", "IPFS", "MetaMask"],
      liveLink: "eth-nft-auction.vercel.app",
      gitLink: "https://github.com/Aaditya8C/COC_NFT_Auction",
    },
    {
      title: "TravelKing – Tourism Booking Platform",
      desc: "Built a responsive tourism platform for Alibag with animated UI (Framer Motion) and an admin dashboard for lodge owners to manage listings and bookings, simulating a real-world booking ecosystem.",
      logo: TkFrontEnd,
      tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      liveLink: "https://travel-king.vercel.app/",
      gitLink: "https://github.com/Aaditya8C/TravelKing",
    },
    // {
    //   title: "SmartChat – GitHub-Based Real-Time Chat",
    //   desc: "Designed a real-time chat platform with GitHub OAuth authentication and GraphQL-based data layer. Enabled users to connect and chat instantly with other GitHub users using a scalable API architecture.",
    //   logo: SmartChat,
    //   tech: [
    //     "Next.js",
    //     "GraphQL",
    //     "Apollo Client",
    //     "GitHub OAuth",
    //   ],
    //   liveLink: "https://smart-chat-rho.vercel.app/",
    //   gitLink: "https://github.com/Aaditya8C/SmartChat",
    // },
    // {
    //   title: "Instagram Clone (React Native)",
    //   desc: "Developing a mobile-first social media app with authentication, media uploads, and real-time interactions using Firebase. Focused on scalable architecture and smooth UI/UX.",
    //   logo: IgCloneLogo,
    //   tech: [
    //     "React Native",
    //     "TypeScript",
    //     "Firebase",
    //     "Formik",
    //     "Yup",
    //   ],
    //   liveLink: "",
    //   gitLink: "https://github.com/Aaditya8C/Instagram_Clone_React_Native",
    // },
  ];

  const skillSet = [
    {
      label: "Next.js",
      logo: SiNextdotjs,
    },
    {
      label: "React Js",
      logo: RiReactjsLine,
    },
    {
      label: "Tailwind",
      logo: SiTailwindcss,
    },
    {
      label: "Node.js",
      logo: SiNodedotjs,
    },
    {
      label: "Express Js",
      logo: SiExpress,
    },
    {
      label: "MongoDB",
      logo: SiMongodb,
    },
    {
      label: "React Native",
      logo: TbBrandReactNative,
    },
    {
      label: "MySQL",
      logo: TbBrandMysql,
    },
    {
      label: "Laravel",
      logo: SiLaravel,
    },
    {
      label: "EthersJs",
      logo: IoMdCloudy,
    },
    {
      label: "C++",
      logo: TbBrandCpp,
    },
    {
      label: "Java",
      logo: BiLogoJava,
    },
    {
      label: "Python",
      logo: SiPython,
    },
    {
      label: "Github",
      logo: SiGithub,
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
      org: "JPMorgan Chase",
      position: "Software Engineering Intern",
      desc: "Worked on building a micro-frontend from scratch and integrating it into an existing enterprise system. Also developed a backend service in Spring Boot to connect with internal APIs. Gained hands-on experience deploying the application to AWS ECS using Terraform and Jenkins, understanding how production systems are built and shipped end-to-end.",
      options: defaultOptions,
    },
    {
      org: "MediSage E-learning Pvt. Ltd.",
      position: "Full Stack Web Developer Intern",
      desc: "Worked across the stack on a live product — from improving the search experience using Next.js to adding multi-language support for a broader user base. Also contributed to fixing production issues and building features like medical calculators that are actively used by healthcare professionals.",
      options: defaultOptions,
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
