import React from "react";
import "./contact.css";

const Contact = () => { 
  return (
    <section id="contact-us" className="contact-wrapper pb-5" data-aos="fade-up" data-aos-delay="100">
      <div className="container">
        <div className="contact-card">
          <div className="row align-items-center">

            {/* LEFT COL */}
            <div className="col-12 col-md-5 mb-4 mb-md-0" data-aos="fade-right" data-aos-delay="200">
              <h2 className="contact-title text-start">
                We’d love to hear <br />
                <span>from you.</span>
              </h2>
            </div>

            {/* RIGHT COL */}
            <div className="col-12 col-md-7" data-aos="fade-left" data-aos-delay="200"> 
  <div className="contact-form-box">
    <form className="p-3">

      <div className="mb-4">
        <input
          type="email"
          className="contact-line-input"
          placeholder="Your email"
        />
      </div>

      <div className="mb-4">
        <textarea
          className="contact-line-input"
          placeholder="Your message"
        ></textarea>
      </div>

      <button type="submit" className="contact-btn">
        Send
      </button>

    </form>
  </div>
</div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
