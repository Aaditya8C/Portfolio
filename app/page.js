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
} from "@/components/imageConstant";
import Button from "@/components/Button";
import { FiArrowRight } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import Skill from "@/components/Skill";
import Link from "next/link";
import { gitHubProfile, linkedInProfile } from "@/components/linkConstant";
import { NextLogo } from "@/components/imageConstant";

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
      logo: NextLogo
    },
    {
      label: "React Js",
      logo: ReactLogo
    },
    {
      label: "Tailwind CSS",
      logo: TailwindLogo

    },
    {
      label: "Node.js",
      logo: NodeLogo

    },
    {
      label: "Express Js",
      logo: ExpressLogo

    },
    {
      label: "MongoDB",
      logo: MongoLogo

    },
    {
      label: "MySQL",
      logo: MysqlLogo

    },
    {
      label: "Laravel",
      logo: LaravelLogo

    },
    {
      label: "C++",
      logo: CppLogo

    },
    {
      label: "Java",
      logo: JavaLogo

    },
    {
      label: "Python",
      logo: PythonLogo

    },
    {
      label: "Github",
      logo: GithubLogo

    }
  ];
  return (
    <div className="grid place-items-center lg:w-[60%] m-auto">
      {/* <Navbar /> */}
      <div className="grid gap-10 py-20 px-6 lg:w-3/4 text-center">
        {/* Intro */}
        <div className="grid place-items-center gap-6">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="-z-10"
          >
            <Image
              src={MyImage3}
              alt="My Image"
              width={80}
              height={80}
              className="rounded-full relative border-violet-400 border-[3px]"
            />
            <motion.span
              initial={{ scale: 0, opacity: 0, y: "-120%", x: "40%" }}
              animate={{ scale: 1, opacity: 1, y: "-120%", x: "40%" }}
              transition={{ duration: 0.5, delay: 0.1, type: "tween" }}
              className="absolute text-2xl"
            >
              👋
            </motion.span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid place-items-center"
          >
            <p className="text-xl md:text-3xl line-clamp-6">
              <b>Hello, Im Aaditya.</b> Im a <b>full-stack developer</b> based
              in Mumbai. I enjoy building sites & apps.
            </p>
            <div className="flex flex-col md:flex-row gap-6 py-10">
              <Button btnText="Contact me here">
                <FiArrowRight className="h-5 w-5" />
              </Button>
              <Button btnText="Download CV" invert>
                <HiDownload className="h-5 w-5" />
              </Button>
              <Link href={linkedInProfile}>
                <Button invert>
                  <FaLinkedin className="h-7 w-5" />
                </Button>
              </Link>
              <Link href={gitHubProfile}>
                <Button invert>
                  <FaGithub className="h-7 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="py-10 grid place-items-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="bg-gray-400 h-16 w-[6px] rounded-full" />
        </motion.div>

        {/* About Section */}
        <motion.div
          id="About"
          className="py-10 grid gap-4 scroll-mt-28"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="font-semibold text-xl md:text-3xl">About Me</p>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            nobis tempora iste reiciendis dolore inventore vel est delectus
            aliquam dicta quos dolores perferendis ut quam fugit aspernatur
            quaerat dolor, consectetur deserunt sapiente velit deleniti maxime
            modi? Enim veritatis ab cumque. Temporibus praesentium
            exercitationem harum molestias sed aliquam nemo reprehenderit ab?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            itaque error inventore cupiditate adipisci, maxime obcaecati non
            quidem sed rerum.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="py-10 grid gap-10 scroll-mt-28" id="Projects">
          <p className="text-xl md:text-3xl font-semibold">My Projects</p>
          {projectData.map((item, index) => {
            return <ProjectCard key={index} data={item} />;
          })}
        </div>

        <div className="py-20 relative" id="Skills">
          <p className="text-xl md:text-3xl font-semibold">My Skills</p>
          <div className="mt-10 flex gap-6 flex-wrap justify-center">
            {skillSet.map((item, index) => {
              return <Skill data={item} key={index} index={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
