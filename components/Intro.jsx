import { motion } from "framer-motion";
import Link from "next/link";

import React, { useEffect } from "react";
import Button from "./Button";
import { FiArrowRight } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { composeUrl, gitHubProfile, linkedInProfile } from "./linkConstant";
// import {Resume} from "../public/Assets/resume.pdf";
import useDownloader from "react-use-downloader";
import * as animationData from "../public/Assets/dev.json";
import Lottie from "react-lottie";

const Intro = () => {
  const { setActiveSection } = useActiveSectionContext();
  const { ref, inView } = useInView();
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();
  // const [fileUrl,setFileUrl] = "/public/resume.pdf";
  const fileUrl = "/resume.pdf";
  const fileName = "aaditya-resume.pdf";

  const downloadResume = () => {
    console.log(fileUrl);
    download(fileUrl, fileName);
  };

  useEffect(() => {
    if (inView) setActiveSection("Home");
  }, [inView]);

  const defaultOptions = {
    animationData: animationData,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="grid place-items-center gap-6" ref={ref} id="Home">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="-z-10"
      >
        <Lottie options={defaultOptions} width={300} height={300} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid place-items-center text-slate-200 "
      >
        <p className="text-xl md:text-2xl line-clamp-6">
          <b>Hello, I&apos;m Aaditya.</b> I&apos;m a <b>full-stack developer</b>{" "}
          based in Mumbai. I enjoy building sites & apps.
        </p>
        <div className="flex flex-wrap justify-center  md:flex-row gap-6 py-10">
          <Link href={composeUrl} target="_blank">
            <Button btnText="Contact me here">
              <FiArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <Link href={linkedInProfile}>
            <Button invert>
              <FaLinkedin className="h-7 w-5" />
            </Button>
          </Link>
          <Button btnText="Download CV" invert clickEvent={downloadResume}>
            <HiDownload className="h-5 w-5" />
          </Button>
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
