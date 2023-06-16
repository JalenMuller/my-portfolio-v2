import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  StarsCanvas,
} from "./components";
import "./app.css";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 700) {
      // alert(
      //   "Not all content will be present on mobile and some models might not load properly."
      // );
      setIsMobile(true);
    }
    console.log(isMobile);
  }, []);
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Projects />
        <div className="relative z-0">
          <Contact isMobile={isMobile} />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
