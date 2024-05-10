import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from "../utilities/ScrollToTop";
import PageAbout from '../pages/PageAbout';
import PageContact from '../pages/PageContact';
import PageHome from '../pages/PageHome';
import PageProjects from '../pages/PageProjects';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const App = () => {
  return (
    <Router>
        <ScrollToTop />
        <Header />
        <Sidebar />
        <main className='main'>
          <Routes>
            <Route path="/" exact element={<PageHome />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/projects" element={<PageProjects />} />
            <Route path="/contact" element={<PageContact />} />
          </Routes>
        </main>
        <Footer />
    </Router>
  );
};

export default App;