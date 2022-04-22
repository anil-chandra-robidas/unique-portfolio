import React, { useEffect, useState } from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import firebase from "../Firebase";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const contactForm = firebase.database().ref("contactFormData");

  const handlerSubmit = (e) => {
    e.preventDefault();

    var newContactForm = contactForm.push();
    newContactForm.set({
      name: name,
      email: email,
      phone: phone,
      message: message,
    });

    if (newContactForm) {
      alert("Data Submitted Successfully!");
    } else {
      alert("Data Submission Failed!");
    }

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="contact" id="contact">
      
      <h2 data-aos="fade-right" className="section-title">
        Contact Me
      </h2>
      <div className="contact-wrapper">
        <div className="contact-map">
          <iframe
            title="myframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8241995617773!2d90.357781514297!3d23.753647694570603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5c7d2ad32d%3A0x4ad0ef1f2366fe9e!2zS2FkZXJhYmFkIEhvdXNpbmcgU29jaWV0eSDgppXgpr7gpqbgp4fgprDgpr7gpqzgpr7gpqYg4Ka54Ka-4KaJ4Kac4Ka_4KaCIOCmuOCni-CmuOCmvuCmh-Cmn-Cmvw!5e0!3m2!1sen!2sbd!4v1643736804162!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-form">
          <form onSubmit={handlerSubmit}>
            <div className="form-field">
              <input
                className="form-input"
                type="text"
                name="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name..."
              />
            </div>
            <div className="form-field">
              <input
                className="form-input"
                type="email"
                name="useremail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email..."
              />
            </div>
            <div className="form-field">
              <input
                className="form-input"
                type="number"
                name="userphone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Phone..."
              />
            </div>
            <div className="form-field">
              <textarea
                className="form-input"
                name="usermessage"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter What In Your Mind..."
                rows="10"
              ></textarea>
            </div>
            <div className="form-field">
              <button className="form-btn">
                <FaRegPaperPlane /> Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
