import { useState, useEffect } from "react";
import HeadingsAnimation from './HeadingsAnimation';
import CopyEmailButton from './CopyEmailButton';
import { Link } from 'react-router-dom';

const Footer = () => {

  // state hook for initial animation and effect hook with timeout to animate headings' letters on hover
  const [letterClassName, setLetterClassName] = useState('animated-text');
  useEffect(() => {
    setTimeout(() => {
      setLetterClassName('animated-text__hover')
    }, 2000)
  }, []);
  

  //heading in the footer
  const h2 = "Let's talk code";
  const h2Array = [...h2];

  return (
    <footer className='footer'>
    
        <h2 className="heading-secondary heading-secondary--footer u-margin-top-medium"><HeadingsAnimation letterClassName={letterClassName} headingArray={h2Array}/></h2>

        <p className='footer__text'>
            I'm all here for new opportunities, latest tech discussions, or just to chat! Don't hesitate to drop me a message via email or use a <Link className="in-text-link" to="/contact">contact form</Link> instead.
        </p>

        <div class="footer__btn">
            <CopyEmailButton />
        </div>

        <p className='footer__trademark'>&copy;2024 Yegor Nino</p>
    </footer>
  )
}

export default Footer