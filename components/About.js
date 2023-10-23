import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";

const About = () => {
    const {setActiveSection} = useActiveSectionContext();
    const {ref,inView} = useInView();

    useEffect(() => {
        if(inView)
            setActiveSection("About")
    }, [inView])
  return (
    <motion.div
      id="About"
      className="py-10 grid gap-4 scroll-mt-24 md:px-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      ref={ref}
    >
      <p className="font-semibold text-xl md:text-2xl">About Me</p>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis
        tempora iste reiciendis dolore inventore vel est delectus aliquam dicta
        quos dolores perferendis ut quam fugit aspernatur quaerat dolor,
        consectetur deserunt sapiente velit deleniti maxime modi? Enim veritatis
        ab cumque. Temporibus praesentium exercitationem harum molestias sed
        aliquam nemo reprehenderit ab?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione itaque
        error inventore cupiditate adipisci, maxime obcaecati non quidem sed
        rerum.
      </p>
    </motion.div>
  );
};

export default About;
