import React from "react";
import "./footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer mt-20">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <h2 className="logo">EcoQuest</h2>
          <p className="tagline">Learning Sustainability Through Gamification</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/challenges">Challenges</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: support@ecoquest.ai</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Jaipur, India</p>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} EcoQuest AI | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;