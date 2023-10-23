import React, { useEffect } from "react";
import Skill from "./Skill";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";

const SkillSet = ({ data }) => {
  const { setActiveSection } = useActiveSectionContext();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) setActiveSection("Skills");
  }, [inView]);
  return (
    <div ref={ref} className="py-20 relative scroll-mt-10" id="SkillSet">
      <p className="text-xl md:text-2xl font-semibold">My SkillSet</p>
      <div className="mt-10 flex gap-6 flex-wrap justify-center">
        {data.map((item, index) => {
          return <Skill data={item} key={index} index={index} />;
        })}
      </div>
    </div>
  );
};

export default SkillSet;
