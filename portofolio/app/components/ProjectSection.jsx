import React from 'react'
import ProjectCard from './ProjectCard'

const projectData = [
  {
    id: 1,
    title: "Dukun Modern",
    description: "GimJam Projects",
    image:"/images/projects/DukunModern.png",
    tag: ["All", "Game"],
    url: "https://lotsadelight.itch.io/dukun-modern",
  },
  {
    id: 2,
    title: "Lintas Sumatra",
    description: "Gim Projects",
    image:"/images/projects/LintasSumatra.png",
    tag: ["All", "Game"],
    url:"https://lotsadelight.itch.io/lintas-sumatera",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className='py-4 px-4 xl:gap-8 sm:py-8 xl:px-16'>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-10 px-4'>My Projects</h2>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
          {projectData.map((project) => 
          <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image}
            url={project.url}
          />)}
        </div>
    </section>
  )
}

export default ProjectSection