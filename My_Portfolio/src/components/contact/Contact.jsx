import "./contact.css";
import React, { useRef } from "react";
import { MdOutlineEmail, MdLocationCity } from "react-icons/md";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "portfolio", 
        "template_portfolio", 
        form.current,
        "-obkfeEFVDx6Kmjbq" 
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h3>Get In Touch</h3>
      <h3>
        I do receive your messages and will respond asap if the valid email is
        provided :)
      </h3>
      <br></br>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <div className="contact__option-children">
              <MdOutlineEmail className="contact__option-icon" />
              <MdLocationCity className="contact__option-icon" />
            </div>
            <div className="contact__option-children">
              <h5>ashwinvenu68@gmail.com</h5>
              <h5>Colombo, Sri Lanka</h5>
            </div>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
        </div>
    </section>
  );
};

export default Contact;
