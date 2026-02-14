import React from "react";
import "./visionMission.css";

const VisionMission = () => { 
  return (
    <section className="vm-wrapper pb-5" data-aos="fade-up" data-aos-delay="100">
      <div className="container">
        <div className="vm-card">
          <div className="row align-items-stretch ">

            {/* COL 1 */}
            <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex align-items-center " data-aos="fade-up"
            data-aos-delay="300">
              <h2 className="vm-title text-start ">
                Local roots <br />
                <span>Global reach</span>
              </h2>
            </div>

            {/* COL 2 */}
            <div className="col-12 col-md-4 mb-4 mb-md-0" data-aos="flip-right"
            data-aos-delay="600">
              <div className="vm-box">
                <h4>Vision</h4>
                <p className="text-start ">
                To build a global ecosystem for digital platforms that make {" "}
                <span>meaningful communication, authentic connections, and trusted social interactions </span> 
                accessible to everyone.
                </p>
              </div>
            </div> 

            {/* COL 3 */}
            <div className="col-12 col-md-4" data-aos="flip-left"
            data-aos-delay="700">
              <div className="vm-box ">
                <h4>Mission</h4>
                <p className="text-start">
                To design and develop innovative mobile and web applications. Technology-driven environment Through
product innovation, scalable technology, and user-focused experiences. Friends Universe aims to
<span>create digital solutions that make start ups more meaningful in the modern world.</span>

                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
