// import './App.css'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App'
import Navbar from './components/Navbar'
import Home from './pages/home'
import About from './pages/about'
import Skills from './pages/skills'
import Project from './pages/project'
import Contact from './pages/contact'


function App() {

  return (
    <div 
    // style={{backgroundColor: 'black'}}
    >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  )
}

export default App
