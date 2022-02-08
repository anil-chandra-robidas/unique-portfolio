import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./style.scss";
import { FaBars, FaRegWindowClose } from "react-icons/fa";


const Navbar = () => {

    const[icon, setIcon] = useState(false);


  return(
      <div className='navbar'>
          <div className='logo'>
              <Link to="/unique-portfolio">Portfolio</Link>
          </div>
          <div className='mobile-menu-icon' onClick={() => setIcon(!icon)}>{icon ? <FaRegWindowClose /> : <FaBars /> }</div>
          <div className={icon ? 'menu active' : 'menu'} onClick={() => setIcon(false)}>
          <ul>
              <li><Link to="/unique-portfolio">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/experience">Experience</Link></li>
              <li><Link to="/education">Educations</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
  );
}

export default Navbar;
