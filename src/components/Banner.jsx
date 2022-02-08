import React, { useEffect, useState } from 'react';
import { FaPhoneAlt, FaHome, FaRegEnvelope, FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Banner = () => {
    
    const[url, setUrl] = useState({
        facebook: "https://www.facebook.com/anil.cse",
        linkedIn: "https://www.linkedin.com/in/anil-kumer/?fbclid=IwAR0zrNBZ-VWpR3JmmyE1WWj8BOenCYvBbuYfW56wO3HE6kcoih5c8vYfZY8",
        github: "https://github.com/anil-chandra-robidas"
    });

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, []);

  return (
      <div className='banner'>
          <div className='userbio' data-aos="fade-right">
              <h4 className='userbio-welcome-text'>Hello There!</h4>
              <h2 className='userbio-name'>I am <span>anil chandra robidas</span></h2>
              <h3 className='userbio-position'>Front end developer</h3>
              <ul className='userbio-addtional'>
                  <li>
                   <span><FaHome /></span> 
                   House# 10, Road# 06, Kaderabad Housing, Mohammadpur, Dhaka, Bangladesh.
                  </li>
                  <li><span><FaPhoneAlt/></span> +8801755448113</li>
                  <li><span><FaRegEnvelope/></span> anilkumer.cse@gmail.com</li>
              </ul>
              <h4 className='userbio-social-title'>Follow Me: </h4>
              <ul className='userbio-social'>
                  <li><a target="_blank" href={url.facebook}><FaFacebookSquare /></a></li>
                  <li><a target="_blank" href={url.linkedIn}><FaLinkedin /></a></li>
                  <li><a target="_blank" href={url.github}><FaGithubSquare /></a></li>
              </ul>
          </div>
          <div className='userprofile' data-aos="fade-left">
              <img src="/unique-portfolio/images/profile1.png" alt="" />
          </div>
      </div>
  );
}

export default Banner;
