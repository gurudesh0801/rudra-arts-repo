import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Quick Links */}
        <div className="footer-column">
          <h3 className="footer-title">Quick Links</h3>
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/products">Products</a>
            <a href="/blog">Blogs</a>
            <a href="/contact">Contact Us</a>
          </div>
        </div>

        {/* Google Map */}
        <div className="footer-column">
          <h3 className="footer-title">Our Location</h3>
          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.905637468456!2d144.95605511578965!3d-37.81621897975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df3f39f3d%3A0xa63d9d0c4b29f4f5!2sVictoria%20Market!5e0!3m2!1sen!2sus!4v1632835554865!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Social Media */}
        <div className="footer-column">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* WhatsApp Contact */}
        <div className="footer-column">
          <h3 className="footer-title">Contact Us</h3>
          <div className="whatsapp-container">
            <a
              href="https://wa.me/917028996666"
              className="whatsapp-contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Rudra Arts. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
