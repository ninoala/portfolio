import { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import HeadingsAnimation from '../components/HeadingsAnimation';
import aiLogo from '../assets/logos/ai-logo.svg';
import bootstrapLogo from '../assets/logos/bootstrap-logo.svg';
import cssLogo from '../assets/logos/css-logo.svg';
import figmaLogo from '../assets/logos/figma-logo.svg';
import githubLogo from '../assets/logos/github-logo.svg';
import htmlLogo from '../assets/logos/html-logo.svg';
import jsLogo from '../assets/logos/js-logo.svg';
import mySqlLogo from '../assets/logos/mysql-logo.svg';
import phpLogo from '../assets/logos/php-logo.svg';
import psLogo from '../assets/logos/ps-logo.svg';
import reactLogo from '../assets/logos/react-logo.svg';
import restLogo from '../assets/logos/rest-logo.svg';
import sassLogo from '../assets/logos/sass-logo.svg';
import shopifyLogo from '../assets/logos/shopify-logo.svg';
import wpLogo from '../assets/logos/wp-logo.svg';


const PageAbout = () => {
  // state variable for initial animation and useEffect with timeout to animate headings' letters on hover
  const [letterClassName, setLetterClassName] = useState('animated-text');
  useEffect(() => {
    setTimeout(() => {
      setLetterClassName('animated-text__hover')
    }, 2000)
  }, []);

  //strings and arrays of headings to be animated
  //primary heading in the about section
  const h1 = 'About Me';
  const h1Array = [...h1];

  const h2 = 'My Toolkit';
  const h2Array = [...h2];

  return (
    <div className='about-page'>
      <section className='section-about-me'>      
        <h1 className="heading-secondary heading-secondary--align-left u-margin-top-large">
          <HeadingsAnimation letterClassName={letterClassName} headingArray={h1Array}/>
        </h1>

        <p className='section-about-me__paragraph'>
          Hey there, I'm Yegor Nino 👋, I'm on a lookout for a Web Developer role. My journey into web development started at BCIT's Front-End Web Developer program, where I dove headfirst into the world of coding and web design. This hands-on experience helped me to develop skills and passion for creating beautiful, user-friendly websites. I thrive in the dynamic world of web development, especially when working with React, PHP, JavaScript, HTML5, and CSS (Sass), these languages are  my creative toolkit.
        </p>

        <p className='section-about-me__paragraph'>
          Before diving into coding, I pursued a Bachelor of Arts in Psychology at Simon Fraser University. The combination of education and years of experience working in different office environments gives me a unique perspective blending creativity with analytical thinking. I'm all about attention to detail, creative problem-solving, and diving deep into logical puzzles.
        </p>

        <p className='section-about-me__paragraph'>
          When I'm not deep in code, you'll likely find me hanging out with my kids, hitting the gym, or exploring biking trails of Ottawa. I'm a bit of a travel enthusiast, always up for discovering new places. And when it's time to unwind, you can catch me enjoying good music, diving into a captivating book, or catching up on the latest binge-worthy TV shows.
        </p>
      </section>

      <section className='section-toolkit'>
        <h2 className="heading-secondary heading-secondary--align-left u-margin-top-large">
          <HeadingsAnimation letterClassName={letterClassName} headingArray={h2Array}/>
        </h2>

        <div className='section-toolkit__img-container'>
          <img src={htmlLogo} alt='HTML5 Logo' className='section-toolkit__img'/>
          <img src={cssLogo} alt='CSS3 Logo' className='section-toolkit__img'/>
          <img src={jsLogo} alt='JavaScript Logo'className='section-toolkit__img'/>
          <img src={reactLogo} alt='React Logo' className='section-toolkit__img'/>
          <img src={phpLogo} alt='PHP Logo' className='section-toolkit__img'/>
          <img src={wpLogo} alt='Wordpress Logo' className='section-toolkit__img'/>
          <img src={shopifyLogo} alt='Shopify Logo' className='section-toolkit__img'/>
          <img src={sassLogo} alt='SASS Logo' className='section-toolkit__img'/>
          <img src={bootstrapLogo} alt='Bootstrap Logo' className='section-toolkit__img'/>
          <img src={mySqlLogo} alt='MySQL Logo' className='section-toolkit__img'/>
          <img src={restLogo} alt='Rest API Logo' className='section-toolkit__img'/>
          <img src={githubLogo} alt='GitHub Logo' className='section-toolkit__img'/>
          <img src={figmaLogo} alt='Figma Logo' className='section-toolkit__img'/>
          <img src={psLogo} alt='Adobe Photoshop Logo' className='section-toolkit__img'/>
          <img src={aiLogo} alt='Adobe Illustrator Logo' className='section-toolkit__img'/>
        </div>
      </section>

      <section className='section-interests'>
        <h3 className='heading-tertiary heading-tertiary--interests'>These are some things I'm interested in...</h3>

        <p className="section-interests__text">
          <ReactTyped
            strings={['Coding...',
                      'Web Design...',
                      'Technology...', 
                      'Artificial Intelligence...', 
                      'Health and Fitness...', 
                      'Cooking...', 
                      'Travelling...',
                      'Liverpool FC...']}
            typeSpeed={100}
            loop
            backSpeed={20}
            cursorChar="|"
            showCursor={true}
          />
        </p>
      </section>
     </div>
  )
}

export default PageAbout