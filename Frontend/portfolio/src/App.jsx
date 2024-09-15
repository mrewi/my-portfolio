import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/home'
import About from './pages/about'
import Skills from './pages/skills'
import Project from './pages/project'
import Contact from './pages/contact'


function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  )
}

export default App
