import React from "react";

const techStack = [
  { name: "React", icon: "🌐" },
  { name: "Node.js", icon: "🟢" },
  { name: "ASP.NET Core", icon: "💻" },
  { name: "Tailwind CSS", icon: "💅" },
  { name: "JavaScript", icon: "📜" },
  { name: "TypeScript", icon: "🔷" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "☸️" },
];

const TechStack = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {techStack.map((tech) => (
        <div
          key={tech.name}
          className="flex flex-col items-center bg-gray-100 dark:bg-slate-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <span className="text-4xl mb-2">{tech.icon}</span>
          <span className="text-lg font-semibold text-gray-900 dark:text-slate-200">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
