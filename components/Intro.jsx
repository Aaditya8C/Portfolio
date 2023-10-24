import { motion } from "framer-motion";
import Link from "next/link";

import React, { useEffect } from "react";
import Button from "./Button";
import { FiArrowRight } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { MyImage3 } from "./imageConstant";
import { composeUrl, gitHubProfile, linkedInProfile } from "./linkConstant";
// import {Resume} from "../public/Assets/resume.pdf";

const Intro = () => {
  const { setActiveSection } = useActiveSectionContext();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) setActiveSection("Home");
  }, [inView]);
  return (
    <div className="grid place-items-center gap-6" ref={ref} id="Home">
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
        <p className="text-xl md:text-2xl line-clamp-6">
          <b>Hello, I&apos;m Aaditya.</b> Im a <b>full-stack developer</b> based in
          Mumbai. I enjoy building sites & apps.
        </p>
        <div className="flex flex-col md:flex-row gap-6 py-10">
          <Link href={composeUrl} target="_blank">
            <Button btnText="Contact me here">
              <FiArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <Link download={MyImage3} href={MyImage3}>
            <Button btnText="Download CV" invert>
              <HiDownload className="h-5 w-5" />
            </Button>
          </Link>
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
  );
};

export default Intro;
