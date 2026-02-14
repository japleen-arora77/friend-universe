import React from "react";
import "./section2.css";
import ParticleText from "./particalText";

const Section2 = () => {
  return (
    <section className="section2-wrapper">
      <div className="section2-card">
        <div className="container-fluid">

          {/* ROW 1 */}
          <div className="row section2-row1 align-items-center">
            <div className="col-12 col-md-9 ">
              <p className="building text-start">
              From product strategy and UI/UX to development and marketing — everything
              under the roof for your need to build <span>successful digital products.</span>  
              </p>
            </div>

            <div className="col-12 col-md-3 d-flex justify-content-center">
              
            </div>
          </div>

          {/* ROW 2 */}
<div className="row section2-row2 align-items-center mt-4">

{/* PARAGRAPH - shows 2nd on mobile */}
<div className="col-12 col-md-7 order-2 order-md-2">
  <p className="text-start bring">
    <ul>
      <li> Mobile App Development </li>
      <li> Web Application Development </li>
      <li> UI/UX Product Design </li>
      <li> Growth & Digital Marketing (Support Service)</li>
    </ul>
  </p>
</div>

{/* PARTICLE - shows 3rd on mobile */}
<div className="col-12 col-md-5 text-center order-3 order-md-1">
  <ParticleText />
</div>

</div>

        </div>
      </div>
    </section>
  );
};

export default Section2;
