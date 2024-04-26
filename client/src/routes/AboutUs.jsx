import React from "react";
import Navbar from "../component/Navbar";
import ChatbotEmbed from "../component/chatbot";
import "./AboutUs.css";
import githubLogo from "./github-logo.png";
import mailLogo from "./mail-logo.png";

const AboutUs = () => {
  return (
    <div>
      <div className="aboutus">
        <Navbar />
        <div className="contact-container">
          <h2>Contact Us</h2>
          <div className="contact-card">
            <div className="contact-item">
              <h3>Amar Madrewar</h3>
              <p>22BCE0827</p>
              <p>
                <img src={mailLogo} alt="Mail Logo" className="mail-logo" />
                <a href="mailto:amar.madrewar2022@vitstudent.ac.in">email</a>
              </p>
            </div>
          </div>
          <div className="links-container">
            <a
              href="https://github.com/nervewastaken/Inventory-Management"
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
            >
              <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
              GitHub Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
