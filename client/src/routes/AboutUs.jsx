import React from "react";
import Navbar from "../component/Navbar";

const AboutUs = () => {
  return (
    <div>
      <div className="aboutus">
        <Navbar />
        <div style={{ textAlign: "center" }}>
          <h2>About Us</h2>
          <h3>Project for Web Programming</h3>
          <p>Made by</p>
          Krish Verma - 22BCE2382
          <br></br>V Hemal Sri - 22BDS0432
          <br></br>
          Muhammed Sirfan -22BKT0147
        </div>
        <div>
          <p>
            <span>GitHub Link:</span>
            <a
              href="https://github.com/nervewastaken/Inventory-Management"
              style={{
                paddingRight: "10px",
                color: "#0366d6",
                textDecoration: "none",
              }}
            >
              Inventory-Management
            </a>
          </p>

          <p>
            Krish's GitHub:
            <a
              href="https://github.com/nervewastaken/"
              style={{
                paddingRight: "10px",
                color: "#0366d6",
                textDecoration: "none",
              }}
            >
              nervewastaken
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
