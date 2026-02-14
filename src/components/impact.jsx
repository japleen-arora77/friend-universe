import React from "react";
import "./impact.css";

const ImpactSection = () => {
  return (
    <section className="impact-wrapper" data-aos="fade-up" data-aos-delay="100">
      <div className="container">
        <div className="impact-card">

          {/* ROW 1 */} 
          <div className="row mb-5" data-aos="fade-up"
            data-aos-delay="200">
            <div className="col-12">
              <h2 className="impact-title text-start">
                Driving impact where <br />
                India <span>truly leads.</span>
              </h2>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="row text-start">
            <div className="col-12 col-md-4 mb-4 mb-md-0" data-aos="fade-right" data-aos-delay="300">
              <div className="impact-item" >
                <h3>
                  2<span>M+</span>
                </h3>
                <p>
                  users across all platforms
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-4 mb-md-0" data-aos="fade-up" data-aos-delay="300">
              <div className="impact-item" >
                <h3>
                  250<span>+</span>
                </h3>
                <p>
                  districts served across India
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4" data-aos="fade-left" data-aos-delay="300">
              <div className="impact-item">
                <h3>
                  20<span>+</span>
                </h3>
                <p>
                  Indian languages
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
