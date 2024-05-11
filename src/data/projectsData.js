//import project screenshots
import trackerThumbnail from '../assets/project-images/tracker-full.png';
import portfolioThumbnail from '../assets/project-images/portfolio-full.png';
import cinefunThumbnail from '../assets/project-images/cinefun-full.png';

//icons
import { faHtml5, faCss3Alt, faJs, faReact, faWordpressSimple, faPhp, faShopify } from '@fortawesome/free-brands-svg-icons';

export const projectData = [
  {
    id: 'cinefun',
    title: 'CineFun',
    briefDescription: 'A React movie database',
    tech: [faReact, faHtml5, faCss3Alt], 
    thumbnail: cinefunThumbnail,
    github: 'https://github.com/ninoala/portfolio',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    briefDescription: 'A React web developer portfolio',
    tech: [faReact, faHtml5, faCss3Alt],
    thumbnail: portfolioThumbnail,
    github: 'https://github.com/ninoala/portfolio',
  },
  {
    id: 'tracker',
    title: 'Attendance Tracker',
    briefDescription: 'A PHP attendance tracking app',
    tech: [faPhp, faHtml5, faCss3Alt],
    thumbnail: trackerThumbnail,
    github: 'https://github.com/ninoala/college-attendance-tracker'
}
]