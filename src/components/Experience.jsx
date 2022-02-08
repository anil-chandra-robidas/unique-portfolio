import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHandPointRight } from "react-icons/fa";

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      className="experience"
      style={{
        background: "url('../images/exbg.jpg')",
        backgroundPosition: "top",
        backgroundAttachment: "fixed",
        backgroundRepeat: "repeat-x",
      }}
    >
      <h2 className="section-title" data-aos="fade-right">
        Experience Areas
      </h2>
      <div className="experince-wrapper">
        <div className="experience-area">
          <h4>WebExperts.Marketing</h4>
          <p>
            <FaHandPointRight /> Position : Front End Development
          </p>
          <p>
            <FaHandPointRight /> Duration : 18th October 2021 Running{" "}
          </p>
          <p>
            <FaHandPointRight /> Location: United States.
          </p>
        </div>
        <div className="experience-area">
          <h4>XpeedStudio</h4>
          <p>
            <FaHandPointRight /> Position : Front End Development
          </p>
          <p>
            <FaHandPointRight /> Duration : 1st January 2020 to 5th September
            2021
          </p>
          <p>
            <FaHandPointRight /> Location: Asad avenue, Nur Jahan Road, Dhaka,
            Bangladesh.
          </p>
        </div>
        <div className="experience-area">
          <h4>HRSOFT BD</h4>
          <p>
            <FaHandPointRight /> Position : Front End Development
          </p>
          <p>
            <FaHandPointRight /> Duration : 27 December 2018 to December 2019
          </p>
          <p>
            <FaHandPointRight /> Location: 12/6, Solimullah Road, Mohammadpur,
            Dhaka 1207, Bangladesh.
          </p>
        </div>
        <div className="experience-area">
          <h4>Unknown</h4>
          <p>
            <FaHandPointRight /> Position : Unknown
          </p>
          <p>
            <FaHandPointRight /> Duration : Unknown
          </p>
          <p>
            <FaHandPointRight /> Location: Unknown.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
