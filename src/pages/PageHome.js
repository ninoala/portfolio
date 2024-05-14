import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import HeadingsAnimation from '../components/HeadingsAnimation';
import Scrolldown from '../components/Scrolldown';
import StrategyCard from "../components/StrategyCard";
import FeaturedProject from "../components/FeaturedProject";
import { ReactComponent as ResponsiveDesignIcon } from '../assets/icons/design-icon.svg';
import { ReactComponent as CodeIcon } from '../assets/icons/code-icon.svg';
import { ReactComponent as WebPerformanceIcon } from '../assets/icons/web-icon.svg';
import { ReactComponent as AccessibilityIcon } from '../assets/icons/accessibility-icon.svg';
import { projectData } from "../data/projectsData";
import profile from '../assets/profile.png';
import cssLogo from '../assets/logos/css-logo.svg';
import htmlLogo from '../assets/logos/html-logo.svg';
import jsLogo from '../assets/logos/js-logo.svg';
import phpLogo from '../assets/logos/php-logo.png';
import reactLogo from '../assets/logos/react-logo.svg';

const PageHome = () => {
  // state variable for initial animation and effect hook with timeout to animate headings' letters on hover
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
            <img src={htmlLogo} alt="HTML logo" className='section-landing__icon' />
            <img src={cssLogo} alt="CSS logo" className='section-landing__icon' />
            <img src={jsLogo} alt="JavaScript logo" className='section-landing__icon' />
            <img src={reactLogo} alt="React logo" className='section-landing__icon' />
            <img src={phpLogo} alt="PHP logo" className='section-landing__icon' />
          </div>
        </div>
        <Link to="/projects" className="btn u-margin-top-medium">View My Projects</Link>
      </div>

        <figure className='section-landing__profile'>
          <img src={profile} alt="Yegor Nino, the man, the myth, the legend" className='section-landing__img'/>
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
        {/*map through project data and output first three projects*/}
        {projectData.slice(0, 3).map(project => (
          <FeaturedProject
            key={project.id}
            thumbnail={project.thumbnail}
            title={project.title}
            tech={project.tech}
            subTitle={project.subTitle}
            github={project.github}
            livesite={project.livesite}
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

export default PageHome;