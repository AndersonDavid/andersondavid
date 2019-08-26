import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

/* pages */
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import AboutSite from './pages/AboutSite';
import Contact from './pages/Contact';
import NoRoute from './pages/NoRoute';


function SwitchPages() {
  const { pageNumber } = useSelector(state => state);

  const [topPage1, setTopPage1] = useState(100);
  const [topPage2, setTopPage2] = useState(100);
  const [topPage3, setTopPage3] = useState(100);
  const [topPage4, setTopPage4] = useState(100);
  const [topPage5, setTopPage5] = useState(100);

  useEffect(() => {
    switchPage(pageNumber);

  }, [pageNumber]);


  function switchPage (currentPage){

    setTopPage1(100);
    setTopPage2(100);
    setTopPage3(100);
    setTopPage4(100);
    setTopPage5(100);
  

    switch (currentPage) {
      case 1:
        setTopPage1(0)
        break;
      case 2:
        setTopPage2(0)
        break;
      case 3:
        setTopPage3(0)
        break;
      case 4:
        setTopPage4(0)
        break;
      default:
        setTopPage5(0)
        break;
    }
  }
  

  return (
    <div className='switch-pages'>
      <div className="page" style={{top: topPage1 + 'vh'}}  >
        <Home />
      </div>
      <div className="page" style={{top: topPage2 + 'vh'}} >
        <AboutMe />
      </div>
      <div className="page" style={{top: topPage3 + 'vh'}} >
        <Contact />
      </div>
      <div className="page" style={{top: topPage4 + 'vh'}} >
        <AboutSite />
      </div>
      <div className="page" style={{top: topPage5 + 'vh'}} >
        <NoRoute />
      </div>
    </div>
  )
}

export default SwitchPages;