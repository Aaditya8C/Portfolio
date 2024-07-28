import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { setActiveSection } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  useEffect(() => {
    if (inView) setActiveSection("About");
  }, [inView]);
  return (
    <motion.div
      id="About"
      className="py-10 grid gap-4 scroll-mt-24 md:px-20 text-slate-200 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      ref={ref}
    >
      <p className=" text-xl md:text-2xl text-orange-200 font-bold">About Me</p>
      <p className="text-center text-lg">
        I&apos;m a passionate software enthusiast with a keen interest in
        building interactive websites and web applications. Currently exploring
        the blockchain domain, I aspire to work with Web3.0 technologies and am
        eager to pursue a challenging career in the tech and software industry.
        As a highly motivated software developer, I bring a strong academic
        foundation in computer science and a deep passion for coding. I&apos;m
        skilled in full-stack web development and am eager to contribute my
        problem-solving abilities and dedication to delivering efficient and
        innovative software solutions. I&apos;m ready to embrace new
        technologies and continuously learn to stay at the forefront of the
        industry.
      </p>
    </motion.div>
  );
};

export default About;
