import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from './assets/Section/Navbars/navbar';
import { Hero } from './assets/Section/Hero/Hero';
import { Feature } from './assets/Section/Feature/Feature';
import { Footer } from './assets/Section/Footer/Footer';

function App() {
  return (
    <>
    <React.Fragment>
      <Nav/>
      <Hero/>
      <Feature/>
      <Footer/>
    </React.Fragment>
    </>
  )
}

export default App