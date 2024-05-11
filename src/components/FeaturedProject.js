import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeaturedProject = ( {thumbnail, title, briefDescription, tech} ) => {
  //a switch statement to apply css classes to each font awesome icon in the featured project below
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
    <div className='featured-project'>
      <img src={thumbnail} alt='Featured project thumbnail' className='featured-project__img'/>

        <div className='featured-project__description'>
          <div className='featured-project__flex-container'>
            <h3 className='featured-project__heading'>{title}</h3>

            <div className='featured-project__icons-container'>
              {/*render icons for each technology*/}
              {tech.map((icon, index) => (
                <FontAwesomeIcon 
                  key={index} 
                  icon={icon} 
                  className={`featured-project__icon ${getIconClass(icon)}`}
                />
              ))}
            </div>
          </div>
        <p className='featured-project__text'>{briefDescription}</p>
      </div>

      
    </div>
  )
}

export default FeaturedProject