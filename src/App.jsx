import React from 'react'
import Header from './Header/Header';
import Intro from './Intro/Intro';
import Reproductions from './Reproductions/Reproductions';
import NewCollection from './NewCollection/NewCollection';
import AboutTeam from './AboutTeam/AboutTeam';
import Footer from './Footer/Footer';

import { Link, animateScroll as scroll } from "react-scroll";

export default function App() {

  return (
    <>
      <Header />
      <Intro />
      <Reproductions />
      <div>
        <NewCollection />
        <AboutTeam />
        <Link to="intro" smooth={true} offset={-111}>
          <img src="src/assets/Footer/icons-top.png" alt="" className="Footer_iconTop_img" />
        </Link>
      </div>
      <Footer />
    </>
  )
}


