import React from "react";
import "./footer.css";
import footer_fu_logo from "../assets/imgs/footer_fu_logo.png";
import location from "../assets/imgs/location_icon.png";
import phn from "../assets/imgs/phn_icon.png";
import email from "../assets/imgs/email_icon.png";
import fb from "../assets/imgs/fb_icon.png";
import ig from "../assets/imgs/ig_icon.png";
import x from "../assets/imgs/x_icon.png";
 
const Footer = () => {
  return (
    <footer className="footer-wrapper" data-aos="fade-up" data-aos-delay="100">
      <div className="container footer-card">

        {/* ROW 1 */}
        <div className="row align-items-center footer-row-1">
          <div className="col-12 col-md-7" data-aos="fade-right" data-aos-delay="300">
            <h2 className="footer-title-fu text-start">Friend universe.</h2>
            <p className="footer-desc text-start" data-aos="fade-up" data-aos-delay="300">
            Friends Universe is a technology-driven ecosystem that designs, develops,
             and promotes high-performance mobile and web applications, helping startups and businesses to  launch faster,
              operate efficiently, and scale confidently. We provide end-to-end support—from product strategy and
               UI/UX design performance optimization, analytics, and growth marketing—transforming ideas into reality.
            </p>
          </div>

          <div className="col-12 col-md-5 text-md-end text-center" data-aos="fade-left" data-aos-delay="300">
            <img src={footer_fu_logo} alt="FU Logo" className="footer-logo" />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="row footer-row-2 mt-4">

          {/* COL 1 */}
        <div className="col-12 col-md-5 footer-contact-col"  data-aos="fade-right" data-aos-delay="200">
          <div className="footer-contact-item">
            <img src={location} alt="location" />
            <a href="https://www.google.com/maps/search/?api=1&query=BHIVE+Premium+Campus+AKR+Tech+Park+HSR+Layout+Bangalore+560068" 
            target="_blank" rel="noopener noreferrer" className="footer-contact-link" >
              BHIVE Premium Campus, AKR Tech Park,
              HSR Layout, Bangalore – 560068.
            </a>
          </div>
          <div className="footer-contact-item">
            <img src={phn} alt="phone" />
            <a href="tel:+919513474123" className="footer-contact-link">
              +91 9513474123
            </a>
          </div>
          <div className="footer-contact-item">
            <img src={email} alt="email" />
            <a href="mailto:support@talktofriend.in" className="footer-contact-link">
              support@talktofriend.in
            </a>
          </div>
                <div className="footer-socials">
                <a href="https://www.facebook.com/people/Talk-to-Friend/61584473585818/"  target="_blank" rel="noopener noreferrer">
                  <img src={fb} alt="facebook" />
                </a>
                <a href="https://www.instagram.com/talk_to_friend_/" target="_blank" rel="noopener noreferrer">
                  <img src={ig} alt="instagram" />
                </a>
                <a href="https://x.com/talktofriend_01?s=21" target="_blank" rel="noopener noreferrer" >
                  <img src={x} alt="x" />
                </a>

              </div>
        </div>


         {/* COL 2 */}
<div className="col-6 col-md-2 footer-links-col text-start"  data-aos="fade-right" data-aos-delay="400">
  <h6 className="footer-title">Quick Links</h6>
  <ul className="footer-links">
    <li>
      <span className="arrow">›</span>
      <span>Home</span>
    </li>
    <li>
      <span className="arrow">›</span>
      <span>About Us</span>
    </li>
  </ul>
</div>

{/* COL 3 */}
<div className="col-6 col-md-3 footer-links-col text-start"  data-aos="fade-right" data-aos-delay="600">
  <h6 className="footer-title">Info</h6>
  <ul className="footer-links">
    <li>
      <span className="arrow">›</span>
      <span>Privacy Policy</span>
    </li>
    <li>
      <span className="arrow">›</span>
      <span>Terms & Conditions</span>
    </li>
  </ul>
</div>

{/* COL 4 */}
<div className="col-12 col-md-2 footer-links-col text-start"  data-aos="fade-right" data-aos-delay="800">
  <h6 className="footer-title">Product</h6>
  <ul className="footer-links">
    <li>
      <span className="arrow">›</span>
      <span>Talk to Friend</span>
    </li>
  </ul>
</div>


        </div>

        {/* ROW 3 */}
        <div className="footer-bottom text-center" >
          Copyrights@reserved.f.u.t.u.r.e.in
        </div>

      </div>
    </footer>
  );
};

export default Footer;
