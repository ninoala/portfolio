//import project screenshots
import trackerThumbnail from '../assets/project-images/tracker-full.png';
import portfolioThumbnail from '../assets/project-images/portfolio-full.png';
import cinefunThumbnail from '../assets/project-images/cinefun-full.png';
import natoursThumbnail from '../assets/project-images/natours-full.png';
import trilloThumbnail from '../assets/project-images/trillo-full.png';
import nexterThumbnail from '../assets/project-images/nexter-full.png';
import bootstrapLogo from '../assets/logos/bootstrap-logo.svg';
import githubLogo from '../assets/logos/github-logo.svg';
import htmlLogo from '../assets/logos/html-logo.svg';
import jsLogo from '../assets/logos/js-logo.svg';
import mySqlLogo from '../assets/logos/mysql-logo.svg';
import phpLogo from '../assets/logos/php-logo.png';
import reactLogo from '../assets/logos/react-logo.svg';
import restLogo from '../assets/logos/rest-logo.svg';
import sassLogo from '../assets/logos/sass-logo.svg';

export const projectData = [
  {
    id: 'cinefun',
    title: 'CineFun',
    subTitle: 'A React movie database',
    briefDescription: 'A dynamic React web app that utilizes TMDB API and allows users to browse and save their favourite movies.',
    tech: [reactLogo, htmlLogo, sassLogo, restLogo, bootstrapLogo, githubLogo],
    thumbnail: cinefunThumbnail,
    github: 'https://github.com/ninoala/portfolio',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    subTitle: 'A React web developer portfolio',
    briefDescription: 'A portfolio website created to display my design and development skills as a web developer.',
    tech: [reactLogo, htmlLogo, sassLogo, githubLogo],
    thumbnail: portfolioThumbnail,
    github: 'https://github.com/ninoala/portfolio',
  },
  {
    id: 'tracker',
    title: 'Attendance Tracker',
    subTitle: 'A PHP attendance tracking app',
    briefDescription: "A PHP application designed for tracking attendance with a secure login system that allows users to manage student records by adding, deleting, or editing entries in the database.",
    tech: [phpLogo, htmlLogo, sassLogo, mySqlLogo, githubLogo],
    thumbnail: trackerThumbnail,
    github: 'https://github.com/ninoala/college-attendance-tracker'
  },
  {
    id: 'natours',
    title: 'Natours Agency',
    subTitle: 'A landing page for a travel agency',
    briefDescription: "A landing page for a travel agency with an emphasis on modern CSS techniques and CSS animations.",
    tech: [htmlLogo, sassLogo, jsLogo, githubLogo],
    thumbnail: natoursThumbnail,
    github: 'https://github.com/ninoala/natours'
  },
  {
    id: 'trillo',
    title: 'Trillo Booking App',
    subTitle: 'A UI interface for a travel booking website',
    briefDescription: "A landing page for a travel booking app with an emphasis on utilizing the CSS Flexbox technique.",
    tech: [htmlLogo, sassLogo, jsLogo, githubLogo],
    thumbnail: trilloThumbnail,
    github: 'https://github.com/ninoala/trillo'
  },
  {
    id: 'nexter',
    title: 'Nexter Real Estate',
    subTitle: 'A landing page for a real estate agency',
    briefDescription: "A landing page for a real estate agency with an emphasis on utilizing the CSS Grid technique.",
    tech: [htmlLogo, sassLogo, jsLogo, githubLogo] ,
    thumbnail: nexterThumbnail,
    github: 'https://github.com/ninoala/nexter'
  },
]