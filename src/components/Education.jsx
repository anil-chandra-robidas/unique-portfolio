import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHandPointRight } from "react-icons/fa";

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      className="experience education">
      <h2 className="section-title" data-aos="fade-right">
        Educational Qualifications
      </h2>
      <div className="experince-wrapper">
        <div className="experience-area">
          <h4>B.Sc in CSE</h4>
          <p>From Hajee Mohammad Danesh Science and Technology University, Dinajpur</p>
          <p>
            <FaHandPointRight /> Cgpa : 2.76 out of 4.00
          </p>
          <p>
            <FaHandPointRight /> Location: Dinajpur.
          </p>
          <p>
            <FaHandPointRight /> Passing Years : 2016
          </p>
        </div>
        <div className="experience-area">
          <h4>H.S.C</h4>
          <p>From Joypurhat Government College, Joypurhat</p>
          <p>
            <FaHandPointRight /> Gpa :5.00 out of 5.00
          </p>
          <p>
            <FaHandPointRight /> Location: Joypurhat.
          </p>
          <p>
            <FaHandPointRight /> Passing Years : 2010
          </p>
        </div>
        
        <div className="experience-area">
          <h4>S.S.C</h4>
          <p>From Teghor High School, Joypurhat</p>
          <p>
            <FaHandPointRight /> Gpa :5.00 out of 5.00
          </p>
          <p>
            <FaHandPointRight /> Location: Joypurhat.
          </p>
          <p>
            <FaHandPointRight /> Passing Years : 2008
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

export default Education;
