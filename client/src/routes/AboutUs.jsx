import React from "react";
import Navbar from "../component/Navbar";

const AboutUs = () => {
  return (
    <div>
      <div className="aboutus">
        <Navbar />
        <div style={{ textAlign: "center" }}>
          <h2>Contact Us</h2>
          Krish Verma (22BCE2382) <br></br>
          krishverma2004@gmail.com<br></br>
          <br></br>V Hemal Sri (22BDS0432)<br></br>
          hemal4sri@gmail.com<br></br>
          <br></br>
          Muhammed Sirfan (22BKT0147)<br></br>
          sirfan.salam@gmail.com
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
              backgroundColor: "rgba(240, 240, 240, 0.5)",
              border: "1px solid #ccc",
              borderRadius: "15px",
              width: "250px",
            }}
          >
            <p>
              <span>GitHub Link: </span>
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
              <span>Krish's GitHub: </span>
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
    </div>
  );
};

export default AboutUs;
