
import styles from "./App.module.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";

function App() {

  return (
    <>
     <div className={styles.App}>
     
      <Navbar/>
      {/* <Hero/> */}
      {/* <About/> */}
      <Skills/>
      
     </div>
    </>
  )
}

export default App
