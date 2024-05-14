const ProjectCard = ( {id, thumbnail, title, briefDescription, tech, github} ) => {
  return (
    <div className={`project-card ${id}`}>
      <div className='project-card__thumbnail'><img src={thumbnail} alt='Project thumbnail' className='project-card__img'/></div>

      <div className='project-card__info-container'>
        <div className='project-card__description'>
          <h2 className='project-card__title u-margin-bottom-small'>
            {title}
          </h2>

          <div className='project-card__icons u-margin-bottom-small'>
            {/*render icons for each technology*/}
              {tech.map((logo, index) => (
                <li key={index} className='project-card__list'>
                  <img src={logo} alt='Tech Logo' className='project-card__icon mysql-logo'/>
                </li>
              ))}
          </div>

          <p className='project-card__paragraph u-margin-bottom-small'>
            {briefDescription}
          </p>
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