import React from "react";
import "./supporting.css";
import Languages from "./languages.jsx";
 
const Supporting = () => {
  return (
    <section className="supporting-wrapper" data-aos="fade-up" data-aos-delay="100">  
      <div className="container">
        <div className="supporting-card">
          {/* ROW 1 */}
          <div className="row mb-4">
            <div className="col-12" data-aos="fade-up"
            data-aos-delay="300">
              <p className="supporting-heading text-start ">
              Supporting diverse communities <br />across {" "}
                <span>Bharat.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Languages />
    </section>
  );
};

export default Supporting;
