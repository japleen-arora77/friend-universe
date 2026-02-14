import React from "react";
import "./sectionHero.css";

import g1 from "../assets/imgs/g1.png";  
import g2 from "../assets/imgs/g2.png";
//import demoVideo from "../assets/videos/demo.mp4";

const SectionHero = () => {
  return (
    <section className="hero-wrapper">
      <div className="container">

        {/* ROW 1 – VIDEO */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 d-flex justify-content-center" data-aos="zoom-in" data-os-delay="100">
            <div className="video-glow">
              <video
                // src={demoVideo}
                controls
                className="hero-video"
              />
            </div>
          </div>
        </div>

        {/* ROW 2 – CONTENT */}
        <div className="row align-items-center text-center mb-5">

          <div className="col-12 col-md-3 d-none d-md-block" data-aos="flip-right"
            data-aos-delay="300">
            <div className="tilt-wrapper">
              <img src={g1} alt="feature left" className="side-img tilt-left" />
            </div>
          </div>

          <div className="col-12 col-md-6" data-aos="fade-up"
            data-aos-delay="300">
            <h1 className="hero-title">
              Turn Your Startup Idea Into a Powerful <span>app</span>
            </h1>

            <p className="hero-text regular-text">
            We design, develop and promote high-performance mobile
            and web applications that helps startup and businesses
            to launch, grow, and scale faster.

            </p>
          </div>

          <div className="col-12 col-md-3 d-none d-md-block" data-aos="flip-left"
            data-aos-delay="300">
            <div className="tilt-wrapper">
              <img src={g2} alt="feature right" className="side-img tilt-right" />
            </div>
          </div>
        </div>

        {/* ROW 3 – BUTTON */}
        <div className="row">
          <div className="col-12 d-flex justify-content-center" data-aos="fade-up"
            data-aos-delay="400">
              <button className="cta-btn"
                      onClick={() => {
                        const section = document.getElementById("contact-us");
                        section?.scrollIntoView({ behavior: "smooth" });
                      }} >
                  Begin your journey now
                <span className="arrow">→</span>
              </button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default SectionHero;
