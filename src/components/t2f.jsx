import React from "react";
import "./t2f.css";
import t2f from "../assets/imgs/t2f.png"; 

const T2f = () => {
  return (
    <section className="t2f-wrapper"  data-aos="fade-up" data-aos-delay="100">
      <div className="container">
        <div className="t2f-card">

          {/* ROW 1 */}
          <div className="row mb-4">
            <div className="col-12" data-aos="fade-up"
            data-aos-delay="300">
              <p className="t2f-heading text-start ">
              Talk to Friend — 
              {" "}
                <span>Find Your friend Circle</span>
              </p>
            </div>
          </div>

         {/* ROW 2 */}
<div className="row align-items-center">

{/* RIGHT COL (TEXT) → show FIRST on mobile */}
<div
  className="col-12 col-md-9 order-2 order-md-2" 
  data-aos="fade-left"
  data-aos-delay="400"
>
  <p className="t2f-text">
  Talk to Friend allows users to connect through one-to-one conversations
based on interest, skills and experience. 
Safe and secured Platform with real people, to have real conversation..

  </p>

  <div className="t2f-buttons">
    <button className="t2f-btn dark">App</button>
    <button className="t2f-btn dark">Website</button>
  </div>
</div>

{/* LEFT COL (LOGO) → show AFTER paragraph on mobile */}
<div
  className="col-12 col-md-3 text-center order-3 order-md-1"
  data-aos="flip-left"
  data-aos-delay="200"
>
  <img
    src={t2f}
    alt="T2F Logo"
    className="t2f-logo"
  />
</div>

</div>


        </div>
      </div>
    </section>
  );
};

export default T2f;
 