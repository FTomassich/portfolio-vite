
import styles from "./App.module.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import spacex from './assets/spacex.jpg';
function App() {

  return (
    <>
     <div className={styles.App} >
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
     </div>
    </>
  )
}

export default App
