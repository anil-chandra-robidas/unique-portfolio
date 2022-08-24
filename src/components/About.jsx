import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  
  const [info, setInfo] = useState({
    phone       : "+8801755448113",
    email      : "anilkumer.cse@gmail.com",
    nationality: "Bangladeshi",
    language   : "Bangla, English",
    height     : "5 Feet 6 Inches",
    age        : "29 Years"
  });

  useEffect(() => {
    AOS.init({
        duration: 1000
    })
}, []);

  return (
    <div className="about" id="about">
      <div className="meProfile">
        <img data-aos="fade-right" src="/unique-portfolio/images/demo4.jpg" alt="aboutmeprofile" />
      </div>
      <div className="meInfo">
        <h3 className="section-title" data-aos="fade-left">About Me</h3>
        <p>This is anil chandra robidas. I completed B.Sc Graduation in Computer Science and Engineering (CSE) from Hajee Mohammad Danesh Science and Technology University. Professionally, I'm a Front End and WordPress Developer since 2019 and have 3+ years of job experience. </p>

        <div className="meAdditional">
         {
           Object.keys(info).map((value, index) => {
            return <p key={index}><span>{value}</span>: {info[value]}</p>
           })
         }
          
        </div>
        <div className="meLinks">
        <a className='userbio-cvlink' href="https://anilkumer.github.io/portfolio/resume/Anil_Chandra_Robidas_CV.pdf" download="Anil_Chandra_Robidas">Download CV</a>
        <a className='hireme' href="https://www.linkedin.com/in/anil-kumer/?fbclid=IwAR0zrNBZ-VWpR3JmmyE1WWj8BOenCYvBbuYfW56wO3HE6kcoih5c8vYfZY8" target="_blank" rel="noreferrer">Hire Me</a>
        </div>
          
      </div>
    </div>
  );
};

export default About;
