import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Logo from '../assets/logos/logo.svg';
import { useState, useEffect } from 'react';

const Header = () => {
  //state variable for nav
  const [navOpen, setNavOpen] = useState(false);

  //nav toggle function
  const handleShowHide = () => {
    setNavOpen(!navOpen);
  };

  //function that closes mobile nav on click when whether the menu item is clicked or user clicks anywhere else on the screen
  const closeNav = (e) => {
    if (window.innerWidth < 600) {
      handleShowHide();
    } else {
      e.target.blur();
    }
  };

  //prevent scrolling when mobile nav is open
  useEffect(() => {
    navOpen 
      ? document.body.style.overflow = 'hidden' 
      : document.body.style.overflow = 'unset';
      
    //cleanup function to restore default overflow property
    return () => {
        document.body.style.overflow = 'unset';
    };
  }, [navOpen]);

  return (
    <header className='header'>
      <div className="header__logo-box">
        <NavLink to="/">
          <img className='header__logo' src={Logo} alt='Website logo'/>
        </NavLink>
      </div>

      <nav className={`nav ${navOpen ? 'active' : 'closed'}`} onClick={closeNav}>
        <ul className='nav__list'>
          <li className='nav__item'>
            <NavLink className='nav__link' to="/">Home</NavLink>
          </li>
          <li className='nav__item'>
            <NavLink className='nav__link' to="/about">About</NavLink>
          </li>
          <li className='nav__item'>
            <NavLink className='nav__link' to="/projects">Projects</NavLink>
          </li>
          <li className='nav__item'>
            <NavLink className='nav__link' to="/contact">Contact</NavLink>
          </li>
        </ul>
        {/*at width of 600px and below, render social media icons within the mobile nav*/}
        {navOpen && window.innerWidth < 600 &&(
          <ul className="nav__social-media">
            <li className='nav__item'>
              <a href="https://github.com/ninoala/" target="_blank" rel="noopener noreferrer" className="sidebar__link">
                <FontAwesomeIcon icon={faGithub} className="nav__social-icon"/>
              </a>
            </li>
            <li className='nav__item'>
              <a href="https://www.linkedin.com/in/yegor-nino778/" target="_blank" rel="noopener noreferrer" className="sidebar__link">
                <FontAwesomeIcon icon={faLinkedinIn} className="nav__social-icon"/>   
              </a>
            </li>
            <li className='nav__item'>
              <a href="mailto:yegor.nino@gmail.com" className="sidebar__link">
                <FontAwesomeIcon icon={faEnvelope} className="nav__social-icon"/>
              </a>
            </li>
          </ul>
        )}
      </nav>

      <button className='nav__menu-btn' onClick={handleShowHide}>
        {!navOpen
          ? <FontAwesomeIcon icon={faBars} className='nav__menu-icon' /> 
          : <FontAwesomeIcon icon={faXmark} className='nav__menu-icon' />
        }
      </button>
    </header>
  );
};

export default Header;