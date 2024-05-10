import Thumbnail from '../assets/thumbnail.webp'

const FeaturedProject = () => {
  return (
    <div className='featured-project'>
      <img src={Thumbnail} alt='Featured project thumbnail' className='featured-project__img'/>
      <div className='featured-project__description'>
        <h3 className='featured-project__heading'>CineFun</h3>
        <p className='featured-project__text'>React Movie Database</p>
      </div>
    </div>
  )
}

export default FeaturedProject