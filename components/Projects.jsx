import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";

const Projects = ({data}) => {
    const {setActiveSection} = useActiveSectionContext();
    const {ref,inView} = useInView();

    useEffect(() => {
        if(inView)
            setActiveSection("Projects")
    }, [inView])
    
  return (
    <div className="py-10 md:px-20 grid gap-10 md:scroll-mt-24" id="Projects" ref={ref}>
      <p className="text-xl md:text-2xl font-semibold">My Projects</p>
      {data.map((item, index) => {
        return <ProjectCard key={index} data={item} />;
      })}
    </div>
  );
};

export default Projects;
