//import project screenshots
import trackerThumbnail from '../assets/project-images/tracker-full.png';
import portfolioThumbnail from '../assets/project-images/portfolio-full.png';
import cinefunThumbnail from '../assets/project-images/cinefun-full.png';
import natoursThumbnail from '../assets/project-images/natours-full.png';
import trilloThumbnail from '../assets/project-images/trillo-full.png';
import nexterThumbnail from '../assets/project-images/nexter-full.png';

//icons
import { faHtml5, faCss3Alt, faJs, faReact, faWordpressSimple, faPhp, faShopify } from '@fortawesome/free-brands-svg-icons';

export const projectData = [
  {
    id: 'cinefun',
    title: 'CineFun',
    subTitle: 'A React movie database',
    briefDescription: 'A dynamic React web app that utilizes TMDB API and allows users to browse and save their favourite movies.',
    tech: [faReact, faHtml5, faCss3Alt], 
    thumbnail: cinefunThumbnail,
    github: 'https://github.com/ninoala/portfolio',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    subTitle: 'A React web developer portfolio',
    briefDescription: 'A portfolio website created to display my design and development skills as a web developer.',
    tech: [faReact, faHtml5, faCss3Alt],
    thumbnail: portfolioThumbnail,
    github: 'https://github.com/ninoala/portfolio',
  },
  {
    id: 'tracker',
    title: 'Attendance Tracker',
    subTitle: 'A PHP attendance tracking app',
    briefDescription: "A PHP application designed for tracking attendance with a secure login system that allows users to manage student records by adding, deleting, or editing entries in the database.",
    tech: [faPhp, faHtml5, faCss3Alt],
    thumbnail: trackerThumbnail,
    github: 'https://github.com/ninoala/college-attendance-tracker'
  },
  {
    id: 'natours',
    title: 'Natours Agency',
    subTitle: 'A landing page for a travel agency',
    briefDescription: "A landing page for a travel agency with an emphasis on modern CSS techniques and nice CSS animations.",
    tech: [faPhp, faHtml5, faCss3Alt],
    thumbnail: natoursThumbnail,
    github: 'https://github.com/ninoala/natours'
  },
  {
    id: 'trillo',
    title: 'Trillo Booking App',
    subTitle: 'A UI interface for a travel booking website',
    briefDescription: "A landing page for a travel booking app with an emphasis on utilizing the CSS Flexbox technique.",
    tech: [faPhp, faHtml5, faCss3Alt],
    thumbnail: trilloThumbnail,
    github: 'https://github.com/ninoala/trillo'
  },
  {
    id: 'nexter',
    title: 'Nexter Real Estate',
    subTitle: 'A landing page for a real estate agency',
    briefDescription: "A landing page for a real estate agency with an emphasis on utilizing the CSS Grid technique.",
    tech: [faPhp, faHtml5, faCss3Alt],
    thumbnail: nexterThumbnail,
    github: 'https://github.com/ninoala/nexter'
  },
]