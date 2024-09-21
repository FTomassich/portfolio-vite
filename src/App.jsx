
import styles from "./App.module.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import space2020 from "./assets/space2020.jpg";
import Footer from "./components/Footer/Footer";


function App() {

  return (
    <>
     <div className={styles.App} >
      <Navbar/>
      
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
     </div>
     
    </>
  )
}

export default App
