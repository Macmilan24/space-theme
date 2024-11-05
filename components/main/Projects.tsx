"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Projects = () => {
  const router = useRouter();

  const projects = [
    {
      src: "/apple.png",
      title: "Apple Website Clone",
      description:
        "This project is a pixel-perfect clone of the Apple website, showcasing the sleek design and refined aesthetics Apple is known for. Built with the latest web technologies, it includes responsive layouts, smooth animations, and interactive elements that replicate the look and feel of the official Apple site.",
      link: "https://apple-uk-clone.vercel.app/",
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

  const handleViewMore = () => {
    router.push("/projects"); // Navigate to full projects page
  };

  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {projects.slice(0, 3).map((project, index) => (
          <div key={index} className=" w-1/3 flex flex-col ">
            <ProjectCard
              src={project.src}
              title={project.title}
              description={project.description}
            />
            <Link
              href={project.link}
              className=" Welcome-box py-[8px] px-[17px] border border-[#7042f88b] opacity-[0.9] text-white mt-5 z-40"
            >
              See More
            </Link>
          </div>
        ))}
      </div>
      <button
        onClick={handleViewMore}
        className="mt-10 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 z-50"
      >
        View More
      </button>
    </div>
  );
};

export default Projects;
