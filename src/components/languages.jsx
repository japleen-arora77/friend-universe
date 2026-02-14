import React from "react";
import "./supporting.css";
import supporting_img from "../assets/imgs/supporting_img.png";
import "./languages.css";

const Languages = () => {
  return (
    <div className="language-wrapper">
      <div className="marquee" data-aos="fade-left"
            data-aos-delay="300">
        <img src={supporting_img} alt="languages" />
        <img src={supporting_img} alt="languages duplicate" />
      </div>
    </div>
  );
};

export default Languages;
