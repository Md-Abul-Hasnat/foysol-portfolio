import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-wrapper">
        <div class="footer-socials">
          <a href="#">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="copyright">
        <small>© All rights reserved by Foysol Ahmed || 2022</small>
      </div>
    </section>
  );
};

export default Footer;
