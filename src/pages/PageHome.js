import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faWordpressSimple, faPhp, faShopify } from '@fortawesome/free-brands-svg-icons';
import Profile from '../assets/profile.png';
import HeadingsAnimation from '../components/HeadingsAnimation';
import Scrolldown from '../components/Scrolldown';
import StrategyCard from "../components/StrategyCard";
import FeaturedProject from "../components/FeaturedProject";
import { ReactComponent as ResponsiveDesignIcon } from '../assets/design-icon.svg';
import { ReactComponent as CodeIcon } from '../assets/code-icon.svg';
import { ReactComponent as WebPerformanceIcon } from '../assets/web-icon.svg';
import { ReactComponent as AccessibilityIcon } from '../assets/accessibility-icon.svg';
import { projectData } from "../data/projectsData";

const PageHome = () => {

  // state hook for initial animation and effect hook with timeout to animate headings' letters on hover
  const [letterClassName, setLetterClassName] = useState('animated-text');
  useEffect(() => {
    setTimeout(() => {
      setLetterClassName('animated-text__hover')
    }, 2000)
  }, []);

  //strings and arrays of headings to be animated
  //primary heading in landing section
  const h1 = 'Hi, I am Yegor Nino';
  const h1Array = [...h1];

  //secondary heading in about section
  const h2 = 'One Div at a Time';
  const h2Array = [...h2];

  //secondary heading in featured projects section
  const h2feat = 'Featured Projects';
  const h2FeatArray = [...h2feat];


  return (
    <>
    <section className='section-landing'>
      <div className='section-landing__text'>
        <h1 className='heading-primary'>
          <span className="heading-primary--main">
            <HeadingsAnimation letterClassName={letterClassName} headingArray={h1Array}/>
          </span>
          <span className="heading-primary--sub u-margin-top-small">A <span className='heading-primary--highlight'>web developer</span> based in Ottawa, ON</span>
        </h1>

        <div className='section-landing__tech-stack u-margin-top-small'>
          <span>Tech Stack | </span>
          <div className="section-landing__icons">
            <FontAwesomeIcon icon={faHtml5} className='section-landing__icons--html'/> 
            <FontAwesomeIcon icon={faCss3Alt} className='section-landing__icons--css'/> 
            <FontAwesomeIcon icon={faJs} className='section-landing__icons--js'/> 
            <FontAwesomeIcon icon={faReact} className='section-landing__icons--react'/> 
            <FontAwesomeIcon icon={faPhp} className='section-landing__icons--php'/>
            <FontAwesomeIcon icon={faWordpressSimple} className='section-landing__icons--wp'/> 
            <FontAwesomeIcon icon={faShopify} className='section-landing__icons--shopify'/>
          </div>
        </div>
        <Link to="/projects" className="btn u-margin-top-medium">View My Projects</Link>
      </div>

        <figure className='section-landing__profile'>
          <img src={Profile} alt="Yegor Nino, the man, the myth, the legend" className='section-landing__img'/>
        </figure>
        
        <Scrolldown />
    </section>

    <section className='section-about'>
      <h2 className="heading-secondary u-margin-bottom-medium">
        <HeadingsAnimation letterClassName={letterClassName} headingArray={h2Array}/>
      </h2>

      <p className="section-about__text">
        A self-motivated and passionate front-end web developer with some <Link to="/projects" className="in-text-link">hands-on project experience</Link>. I am striving to build functional, user-friendly, and visually appealing websites and apps. My coding strategy is based on these four aspects: 
      </p>      
      
      <div className="section-about__strategies-container u-margin-top-large">
        <StrategyCard 
          icon={ResponsiveDesignIcon}
          heading="Responsive Design"
          text="Creating fluid layouts, utilizing media queries and responsive images, using correct units, always considering desktop-first vs mobile-first design approach."
        />
        <StrategyCard 
          icon={CodeIcon}
          heading="Sustainable Code"
          text="Crafting clean, reusable, and scalable code that is organized, easy to understand, and follows a clear and maintanable structure."
        />
        <StrategyCard 
          icon={WebPerformanceIcon}
          heading="Web Perfomance"
          text="Striving for an exceptional web performance with concise and compressed code and an array of optimization techniques to deliver a blazingly fast user experience."
        />

        <StrategyCard 
          icon={AccessibilityIcon}
          heading="Accessibility"
          text="Ensuring my websites are accessible to all users by following best practices such as semantic HTML, providing alternative text for images, keyboard navigation support, and focus states."
        />
      </div>
      
      <div className="section-about__btn-box u-margin-top-large">
        <Link to="/about" className="btn btn--about">Learn more about me</Link>
      </div>
    </section>

    <section className="section-featured-projects">
      <h2 className="heading-secondary u-margin-bottom-medium">
        <HeadingsAnimation letterClassName={letterClassName} headingArray={h2FeatArray}/>
      </h2>

      <div className="section-featured-projects__container">
        {projectData.map(project => (
          <FeaturedProject
            key={project.id} //assign a unique key to each FeaturedProject component
            thumbnail={project.thumbnail}
            title={project.title}
            tech={project.tech}
            briefDescription={project.briefDescription}
            github={project.github}
          />
        ))}
      </div>

      <div className="section-featured-projects__btn-box u-margin-top-medium">
        <Link to="/projects" className="btn btn--about">View all my projects</Link>
      </div>
    </section>
    </>
  )
}

export default PageHome