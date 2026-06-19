import React from 'react'

import Contact from './components/Contact'
import Footer from './components/Footer'
import Services from './components/Services'
import Experience from './components/Experience'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'

const App = () => {
  
  return (
    <>
        <Navbar/>
        <Header/>
        <About/>
        <Experience/>
        <Services/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App
