import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaPhoneAlt, FaHome, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
      <div className='footer'>
          <div className='top-footer'>
              <div className='footer-widget first-widget'>
                  <h4 className='section-title'>Follow Me</h4>
                  <ul className='footer-address'>
                      <li><span><FaHome /></span> Salambagh Jame Masjid, East Rampura, Dhaka, Bangladesh.</li>
                      <li><span><FaPhoneAlt/></span> +8801755448113</li>
                      <li><span><FaEnvelope/></span> anilkumer.cse@gmail.com</li>
                  </ul>
                  <ul className='footer-social'>
                      <li><a href="https://www.facebook.com/anil.cse" target="_blank" rel="noreferrer"><FaFacebookF /></a></li>
                      <li><a href="https://www.linkedin.com/in/anil-kumer/?fbclid=IwAR0zrNBZ-VWpR3JmmyE1WWj8BOenCYvBbuYfW56wO3HE6kcoih5c8vYfZY8" target="_blank" rel="noreferrer"><FaLinkedinIn /></a></li>
                      <li><a href="https://github.com/anil-chandra-robidas" target="_blank" rel="noreferrer"><FaGithub /></a></li>
                  </ul>
              </div>
              <div className='footer-widget second-widget'>
                  <h4 className='section-title'>Technologies</h4>
                  <ul className='technology-list'>
                      <li>Wordpress</li>
                      <li>php</li>
                      <li>javascript</li>
                      <li>jquery</li>
                      <li>react</li>
                      <li>elementor</li>
                  </ul>
              </div>
              <div className='footer-widget third-widget'>
                  <h4 className='section-title'>Technologies</h4>
                  <ul className='technology-list'>
                      <li>bootstrap</li>
                      <li>tailwind</li>
                      <li>html</li>
                      <li>flexbox</li>
                      <li>css</li>
                      <li>github</li>
                  </ul>
              </div>
          </div>
          <div className='bottom-footer'>
              <p>© Copyright 2022. All Rights are Reserved.</p>
          </div>
      </div>
  );
}

export default Footer;
