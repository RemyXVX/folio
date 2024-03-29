import React from 'react';

const TechStack = () => {
  const techStack = [
    'React',
    'Vite',
    'Next',
    'Node',
    'ASP.Net',
    'Tailwind',
    'Chakra',
    'Redux',
    'Prisma',
    'Entity',
    'Postgres',
    'MySQL',
    'TS',
    'JS',
    'C#',
    'CSS',
    'HTML',
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
      {techStack.map((tech, index) => (
        <button
          key={index}
          className="relative bg-slate-500 bg-opacity-90 text-rose-200 px-3 py-2 text-center font-medium rounded-md whitespace-nowrap overflow-hidden transition-transform transform-gpu hover:-translate-y-1 focus:outline-none"
          disabled
          style={{ maxWidth: '100%', textOverflow: 'ellipsis' }}
        >
          {tech}
        </button>
      ))}
    </div>
  );
};

export default TechStack;
