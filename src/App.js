import React, {useEffect} from 'react';
import Navbar from './components/navbar.jsx';
import SectionHero from './components/sectionHero.jsx';
import Section2 from './components/section2.jsx';
import T2f from './components/t2f.jsx';
import Supporting from './components/supporting.jsx';
import VisionMission from './components/visionMission.jsx';
import ImpactSection from './components/impact.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles/color.css';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,      // animation happens only once
      offset: 120,     // distance from bottom before triggering
    });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <SectionHero />
      <Section2 />
      <T2f />
      <Supporting />
      <VisionMission />
      <ImpactSection />
      <Contact />
      <Footer />
      {/* <ParticleText/> */}

    </div>
  );
}

export default App;
