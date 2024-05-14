
const FeaturedProject = ( {thumbnail, title, subTitle, tech, github} ) => {
  return (
    <div className='featured-project'>
      <img src={thumbnail} alt='Featured project thumbnail' className='featured-project__img'/>

        <div className='featured-project__description'>
          <div className='featured-project__flex-container'>
            <h3 className='featured-project__heading'>{title}</h3>

            <div className='featured-project__icons-container'>
              {tech.slice(0, 3).map((logo, index) => (
                <li key={index} className='featured-project__list'>
                  <img src={logo} alt='Tech Logo' className='featured-project__icon'/>
                </li>
              ))}
            </div>
          </div>

        <p className='featured-project__text'>{subTitle}</p>
      </div>

      <div className='featured-project__links-container'>
        <a href='#' className='featured-project__link'>Live Site</a>
        <a href={github} className='featured-project__link'>GitHub</a>
      </div>
    </div>
  )
}

export default FeaturedProject