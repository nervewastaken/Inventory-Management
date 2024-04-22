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
              <h3>Krish Verma</h3>
              <p>22BCE2382</p>
              <p>
                <img src={mailLogo} alt="Mail Logo" className="mail-logo" />
                krishverma2004@gmail.com
              </p>
            </div>
            <div className="contact-item">
              <h3>V Hemal Sri</h3>
              <p>22BDS0432</p>
              <p>
                <img src={mailLogo} alt="Mail Logo" className="mail-logo" />
                hemal4sri@gmail.com
              </p>
            </div>
            <div className="contact-item">
              <h3>Muhammed Sirfan</h3>
              <p>22BKT0147</p>
              <p>
                <img src={mailLogo} alt="Mail Logo" className="mail-logo" />
                sirfan.salam@gmail.com
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
            <a
              href="https://github.com/nervewastaken/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
            >
              <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
              Krish's GitHub
            </a>
          </div>
        </div>
      </div>
      <ChatbotEmbed />
    </div>
  );
};

export default AboutUs;
