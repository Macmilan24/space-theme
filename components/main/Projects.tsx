import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Prortifolio"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia autem odit ea accusamus culpa soluta molestias laudantium voluptatibus recusandae iure suscipit explicabo repellat pariatur est, veritatis nobis et ipsum sunt."
        />
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Prortifolio"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia autem odit ea accusamus culpa soluta molestias laudantium voluptatibus recusandae iure suscipit explicabo repellat pariatur est, veritatis nobis et ipsum sunt."
        />
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Prortifolio"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia autem odit ea accusamus culpa soluta molestias laudantium voluptatibus recusandae iure suscipit explicabo repellat pariatur est, veritatis nobis et ipsum sunt."
        />
      </div>
    </div>
  );
};

export default Projects;
