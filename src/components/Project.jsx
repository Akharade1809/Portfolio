import React from 'react';
import { PROJECTS } from '../constants';
import { FaGithub } from 'react-icons/fa'; // Import the GitHub icon from react-icons/fa

const Project = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl'>Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className="w-full lg:w-1/4">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <img className='rounded mb-6' src={project.image} width={150} height={150} alt={project.title} />
              </a>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <div className="flex items-center mb-2">
                <FaGithub className="mr-2 text-purple-500" /> {/* GitHub icon */}
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">{project.title}</a>
              </div>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              <div>
                {project.technologies.map((tech, index) => (
                  <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500'>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
