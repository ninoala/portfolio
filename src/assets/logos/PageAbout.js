import React from 'react'
import aiLogo from '../assets/logos/ai-logo.png'
import asanaLogo from '../assets/logos/asana-logo.png'
import bootstrapLogo from '../assets/logos/bootstrap-logo.png'
import canvaLogo from "../assets/logos/canva-logo.png"
import cssLogo from '../assets/logos/css-logo.png'
import figmaLogo from '../assets/logos/figma-logo.png'
import githubLogo from '../assets/logos/github-logo.png'
import htmlLogo from '../assets/logos/html-logo.png'
import invisionLogo from '../assets/logos/invision-logo.png'
import jsLogo from '../assets/logos/js-logo.png'
import laravelLogo from '../assets/logos/laravel-logo.png'
import mampLogo from '../assets/logos/mamp-logo.png'
import mysqlLogo from '../assets/logos/mysql-logo.png'
import phpLogo from '../assets/logos/php-logo.png'
import psLogo from '../assets/logos/ps-logo.png'
import reactLogo from '../assets/logos/react-logo.png'
import restLogo from '../assets/logos/rest-logo.webp'
import sassLogo from '../assets/logos/sass-logo.jpg'
import shopifyLogo from '../assets/logos/shopify-logo.png'
import slackLogo from '../assets/logos/slack-logo.png'
import wpLogo from '../assets/logos/wp-logo.png'
import xdLogo from '../assets/logos/xd-logo.png'

function PageAbout() {
  return (
    <div id="about">
      <section className='about-text'>      
        <h1>About Me</h1>
        <p>Hi, my name is Yegor Nino. I am currently looking to get into a Front-End developer role. I have experience in responsive design with mobile-first approach. My training and hands-on projects experience at BCIT Front-End Web Developer Program, have allowed me to further develop my passion and skillsets in the web development industry. 
          With solid fundamentals in various front-end programming languages as well as web design, I mostly enjoy working with React JS, Redux, JavaScript, Web Components, HTML5 and CSS(Sass).
          Graduated with a Bachelor of Science Statistics major at University of Victoria and gained a few years of working experience, I have developed a detail-oriented mindset, creative problem-solving skills and strong logical thinking ability.
          In addition to web development, one of my greatest interests is landscape photography. I enjoy the process of slowing down and capturing the point of aesthetics.
        </p>
      </section>
      <section className='toolkit'>
        <h2>My Toolkit</h2>
        <figure className='toolkit-grid'>
          <img src={htmlLogo} />
          <img src={cssLogo} />
          <img src={jsLogo} />
          <img src={reactLogo} />
          <img src={wpLogo} />
          <img src={phpLogo} />
          <img src={figmaLogo} />
          <img src={xdLogo} />
          <img src={psLogo} />
          <img src={aiLogo} />
          <img src={invisionLogo} />
          <img src={shopifyLogo} />
          <img src={githubLogo} />
          <img src={restLogo} />
          <img src={mampLogo} />
          <img src={mysqlLogo} />
          <img src={laravelLogo} />
          <img src={bootstrapLogo} />
          <img src={sassLogo} />
          <img src={asanaLogo} />
          <img src={slackLogo} />
        </figure>
      </section>
    </div>
  )
}

export default PageAbout 