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
        background: "url('../unique-portfolio/images/exbg.jpg')",
        backgroundPosition: "top",
        backgroundAttachment: "fixed",
        backgroundRepeat: "repeat-x",
      }} id="experience"
    >
      <h2 className="section-title" data-aos="fade-right">
        Experience Areas
      </h2>
      <div className="experince-wrapper">
      <div className="experience-area">
          <h4>ARN Tech Limited</h4>
          <p>
            <FaHandPointRight /> Position : WordPress Developer
          </p>
          <p>
            <FaHandPointRight /> Duration : 13th July 2022 to Running
          </p>
          <p>
            <FaHandPointRight /> Location: Merul Badda, Dhaka, Bangladesh.
          </p>
        </div>
        <div className="experience-area">
          <h4>WebExperts.Marketing</h4>
          <p>
            <FaHandPointRight /> Position : WordPress Theme Developer
          </p>
          <p>
            <FaHandPointRight /> Duration : 18th 2021 October 30 June 2022{" "}
          </p>
          <p>
            <FaHandPointRight /> Location: United States.
          </p>
        </div>
        <div className="experience-area">
          <h4>XpeedStudio</h4>
          <p>
            <FaHandPointRight /> Position : WordPress Theme Developer
          </p>
          <p>
            <FaHandPointRight /> Duration : 1st January 2020 to 5th September
            2021
          </p>
          <p>
            <FaHandPointRight /> Location: Nur Jahan Road, Asad avenue, Dhaka,
            Bangladesh.
          </p>
        </div>
        <div className="experience-area">
          <h4>HRSoft Bd</h4>
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
      </div>
    </div>
  );
};

export default Experience;
