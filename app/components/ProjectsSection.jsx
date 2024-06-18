"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "My final project in the framework-based programming course, I created an e-commerce using Laravel which was inspired by Facebook Marketplace, implemented it in the Onion architecture, Jobs, Scheduling, Queue and Broadcasting.",
    image: "/images/projects/e-commerce.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rifqol/fp-pbkk2023-kelompok5.git",
    previewUrl: "https://dwauidawi.mine.bz/",
  },
  {
    id: 2,
    title: "Rif-blog",
    description: "My personal project on a web application built with Laravel 11, a popular PHP framework. It includes essential features for a blogging platform, such as user authentication, post creation, editing, deletion, and comment functionality. The project also employs Tailwind CSS for styling, enhancing its visual appearance and responsiveness. Additionally, the repository's codebase demonstrates modern web development practices, making it a valuable reference for learning or showcasing skills in Laravel and full-stack web development.",
    image: "/images/projects/rif-blog.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rifqol/rif-blog",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Buy/Sell recommendation system for hedge fund manager",
    description: " The final project in an independent study program aims to help hedge fund managers determine which stocks are good to invest in. We carry out two methods, namely forecasting and fundamental analysis. We carry out forecasting using the LSTM model because it is more suitable for short- and medium-term investments, while we carry out fundamental analysis because it is more suitable for long-term investments",
    image: "/images/projects/fp-startup-campus.png",
    tag: ["All", "Data Science"],
    gitUrl: "https://github.com/rifqol/fp-startup-campus",
    previewUrl: "https://public.tableau.com/app/profile/ni.nyoman.bintang.marscelina/viz/DashboardFinalProject_17176479920750/Dashboard1",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Data Science"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data Science"
          isSelected={tag === "Data Science"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
