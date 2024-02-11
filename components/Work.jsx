import { useActiveSectionContext } from "@/context/active-section-context";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import WorkCards from "./WorkCards";
import { MdOutlineWorkOutline } from "react-icons/md";

const Work = ({ data }) => {
  const { setActiveSection } = useActiveSectionContext();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) setActiveSection("Experience");
  }, [inView]);
  return (
    <div
      className="py-10 md:px-20 grid gap-10 md:scroll-mt-24"
      id="Experience"
      ref={ref}
    >
      <div className="flex justify-center gap-4">
        <p className="text-xl md:text-2xl font-semibold text-orange-200">
          Work Experience
        </p>
        <MdOutlineWorkOutline className="w-8 h-8 text-orange-200" />
      </div>
      {data.map((item, index) => {
        return <WorkCards key={index} data={item} />;
      })}
    </div>
  );
};

export default Work;
