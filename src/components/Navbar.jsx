import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import { Link } from "react-scroll";

import "./style.scss";
import { FaBars, FaRegWindowClose } from "react-icons/fa";

const Navbar = () => {
  const [icon, setIcon] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Portfolio
        </Link>
      </div>
      <div className="mobile-menu-icon" onClick={() => setIcon(!icon)}>
        {icon ? <FaRegWindowClose /> : <FaBars />}
      </div>
      <div className={icon ? 'menu active' : 'menu'} >
        <ul>
          {/* <li><Link to="/unique-portfolio">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/experience">Experience</Link></li>
              <li><Link to="/education">Educations</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact Me</Link></li> */}

          <Link activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            Home
          </Link>

          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000} onClick={() => setIcon(false)}
          >
            About Me
          </Link>

          <Link
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000} onClick={() => setIcon(false)}
          >
            Skills
          </Link>

          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000} onClick={() => setIcon(false)}
          >
            Experiences
          </Link>

          <Link
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000} onClick={() => setIcon(false)}
          >
            Educations
          </Link>

          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000} onClick={() => setIcon(false)}
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000} onClick={() => setIcon(false)}
          >
            Contact Me
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
