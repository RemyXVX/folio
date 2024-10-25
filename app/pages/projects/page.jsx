'use client';
import React from 'react';
import ProjectCard from './projectCard';
import projectsData from './projectData';

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-800">
      <div className="w-full max-w-screen-xl bg-gray-100 dark:bg-slate-800 py-2 px-4 rounded-lg">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-2 text-gray-900 dark:text-slate-200 text-center">
          My Projects
        </h1>
      </div>
      <div className="flex-1 bg-gray-100 dark:bg-slate-800 py-2 w-full">
        <div className="max-w-6xl mx-auto h-[450px] overflow-y-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                images={project.images}
                codeLink={project.codeLink}
                liveLink={project.liveLink}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
