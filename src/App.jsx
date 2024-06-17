
import styles from "./App.module.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";

function App() {

  return (
    <>
     <div className={styles.App}>
      <Navbar/>
      {/* <Hero/> */}
      <Skills/>
     </div>
    </>
  )
}

export default App
