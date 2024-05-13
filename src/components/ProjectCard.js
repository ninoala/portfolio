import { faHtml5, faCss3Alt, faJs, faReact, faWordpressSimple, faPhp, faShopify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ProjectCard = ( {id, thumbnail, title, briefDescription, tech, github} ) => {

  //a switch statement to apply css classes to each font awesome icon in the project cards below
  const getIconClass = (icon) => {
    switch (icon.iconName) {
      case 'html5':
        return 'featured-project__icon--html';
      case 'css3-alt':
        return 'featured-project__icon--css';
      case 'js':
        return 'featured-project__icon--js';
      case 'react':
        return 'featured-project__icon--react';
      case 'wordpress-simple':
        return 'featured-project__icon--wp';
      case 'php':
        return 'featured-project__icon--php';
      case 'shopify':
        return 'featured-project__icon--shopify';
      default:
        return '';
    }
  };

  return (
    <div className={`project-card ${id}`}>
      <div className='project-card__thumbnail'><img src={thumbnail} alt='Project thumbnail' className='project-card__img'/></div>

      <div className='project-card__info-container'>
        <div className='project-card__description'>
          <h2 className='project-card__title u-margin-bottom-small'>{title}</h2>
          <div className='project-card__icons u-margin-bottom-small'>
            {/*render icons for each technology*/}
              {tech.map((icon, index) => (
                <FontAwesomeIcon 
                  key={index} 
                  icon={icon} 
                  className={`project-card__icon ${getIconClass(icon)}`}
                />
              ))}
          </div>
          <p className='project-card__paragraph u-margin-bottom-small'>{briefDescription}</p>
        </div>

        <div className='project-card__links'>
          <a href='#' className='project-card__link'>Live Site</a>
          <a href={github} className='project-card__link'>GitHub</a>
        </div>
      </div>
    </div>
  )
  }

export default ProjectCard