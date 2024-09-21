
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
     <div className={styles.App} style={{ 
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 85%, rgba(0, 0, 0, 1) 100%),linear-gradient(to top, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 1) 90%), radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 1) 80%), 
                         url(${space2020})`}}>
      <Navbar/>
      
      <Hero/>
      <About/>
      <Skills/>
      {/* <Projects/>
      <Footer/> */}
     </div>
     
    </>
  )
}

export default App
