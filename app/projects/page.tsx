import React from "react";
import ProjectCard from "@/components/sub/ProjectCard";

const FullProjectsPage = () => {
  const projects = [
    {
      src: "/apple.png",
      title: "Apple Website Clone",
      description:
        "This project is a pixel-perfect clone of the Apple website, showcasing the sleek design and refined aesthetics Apple is known for. Built with the latest web technologies, it includes responsive layouts, smooth animations, and interactive elements that replicate the look and feel of the official Apple site.",
      link: "#",
    },
    {
      src: "/emp.png",
      title: "Employee Management System",
      description:
        "A straightforward Employee Management System featuring CRUD functionality, built using MongoDB for data storage, Next.js for a fast, modern front end, and NextAuth for secure authentication. This application allows users to add, update, view, and delete employee information with ease, providing an intuitive interface for efficient employee management.",
      link: "https://prodigy-fs-02-rho.vercel.app/",
    },
    {
      src: "/flashcard.png",
      title:
        "AI-Powered Flashcard Generator with Next.js, Clerk, Stripe, and OpenAI",
      description:
        "A dynamic flashcard generator that uses Next.js for a smooth and responsive user experience, Clerk for seamless user authentication, Stripe for secure payment processing, and OpenAI to generate personalized flashcards based on user input.",
      link: "https://flashcard-generator-sooty.vercel.app/",
    },
    // Add more projects here as needed
  ];

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        All Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row flex-wrap gap-10 px-10 justify-center items-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FullProjectsPage;
