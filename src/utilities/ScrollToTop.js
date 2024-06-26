import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//handle scroll restoration to top when router changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;