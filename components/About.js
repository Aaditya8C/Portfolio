import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { setActiveSection } = useActiveSectionContext();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) setActiveSection("About");
  }, [inView]);
  return (
    <motion.div
      id="About"
      className="py-10 grid gap-4 scroll-mt-24 md:px-20 text-slate-200 font-bold"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      ref={ref}
    >
      <p className="font-semibold text-xl md:text-2xl text-orange-200">
        About Me
      </p>
      <p className="text-center text-lg">
        I&apos;m a software enthusiast & love to build interactive websites &
        web apps. Seeking a challenging career in the vast of tech and software
        and I&apos;m ready to work & explore new technologies.
      </p>
    </motion.div>
  );
};

export default About;
