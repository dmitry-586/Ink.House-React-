import React from 'react'
import './App.scss'
import Header from './Header/Header';
import Intro from './Intro/Intro';
import Reproductions from './Reproductions/Reproductions';
import NewCollection from './NewCollection/NewCollection';
import AboutTeam from './AboutTeam/AboutTeam';
import Footer from './Footer/Footer';


export default function App() {

  return (
    <>
      <Header />
      <Intro />
      <Reproductions />
      <NewCollection />
      <AboutTeam />
      <Footer />
    </>
  )
}


