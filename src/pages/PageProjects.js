import { useState, useEffect } from "react";
import HeadingsAnimation from '../components/HeadingsAnimation';
import { projectData } from "../data/projectsData"; 
import ProjectCard from "../components/ProjectCard";

const PageProjects = () => {
  // state hook for initial animation and effect hook with timeout to animate headings' letters on hover
  const [letterClassName, setLetterClassName] = useState('animated-text');
  useEffect(() => {
    setTimeout(() => {
      setLetterClassName('animated-text__hover')
    }, 2000)
  }, []);

  //a string and an array for heading on the page to be animated
  const h1 = 'Projects';
  const h1Array = [...h1];

  return (
    <div className='page-projects'>
      <h1 className='heading-secondary heading-secondary--large u-margin-top-large u-margin-bottom-medium'>
        <HeadingsAnimation letterClassName={letterClassName} headingArray={h1Array}/>
      </h1>

      <section className='section-projects'>
        <p className='section-projects__paragraph u-margin-bottom-medium'>Browse through my project showcase below and get a feel for the work that I've been doing so far:</p>

        <div className='section-projects__container'>
        {projectData.map(project => (
          <ProjectCard
            key={project.id}
            id={project.id}
            thumbnail={project.thumbnail}
            title={project.title}
            tech={project.tech}
            briefDescription={project.briefDescription}
            github={project.github}
          />
        ))}
        </div>

      </section>
    </div>
  )
}

export default PageProjects