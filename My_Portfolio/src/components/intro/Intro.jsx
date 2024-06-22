import "./intro.css";
import React from "react";
import img from "../../assets/me11.jpg";

const Intro = () => {
  return (
    <section id="about">
      <h3>Get to know</h3>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Ashwin" />
          </div>
        </div>
        <div className="intro__container">
          <h3 className="profile-summary-heading">Profile Summary</h3>
          <p>
          Passionate and dedicated undergraduate with a strong focus on software engineering, eager to apply and enhance my skills in real-world projects. Proficient in key programming languages including PHP, JavaScript, Python, and C. Eager to contribute to innovative solutions, collaborate effectively in a team environment, and committed to continuous learning to stay at the forefront of software engineering technologies and best practices.</p>
          <br></br>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
      <section id="education">
        <h3 className="education-heading">Education Qualifications</h3>
        <div className="container">
        <div className="edu__container">
          <ul>
          <li>Bachelor of Information and Communication Technology Honors [BICT(Hons)] specializing in software systems technology(ongoing)</li>
          <p>University Of Kelaniya</p>
          <li>G.C.E Advanced Level Examination(2019)</li>
          <p>Norwood Tamil Maha Vidyalaya</p>
            <li>G.C.E Ordinary Level Examination(2016)</li>
            <p>Norwood Tamil Maha Vidyalaya</p>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Intro;
