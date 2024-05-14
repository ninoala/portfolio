import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <a href="https://github.com/ninoala/" target="_blank" rel="noopener noreferrer" className="sidebar__link">
        <FontAwesomeIcon icon={faGithub} className="sidebar__icon"/>
      </a>
      <a href="https://www.linkedin.com/in/yegor-nino778/" target="_blank" rel="noopener noreferrer" className="sidebar__link">
        <FontAwesomeIcon icon={faLinkedinIn} className="sidebar__icon"/>   
      </a>
      <a href="mailto:yegor.nino@gmail.com" className="sidebar__link">
        <FontAwesomeIcon icon={faEnvelope} className="sidebar__icon"/>
      </a>
    </nav>
  )
}

export default Sidebar;