import "./portfolio.css";

import IMG1 from "../../assets/lms.png";
import IMG2 from "../../assets/job.png";
import IMG3 from "../../assets/te.png";
import IMG4 from "../../assets/stu.png";
import IMG5 from "../../assets/bmi.png";
import IMG6 from "../../assets/sms.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Library Management System",
      img: IMG1,
      description:
        "Library Management System developed using HTML, CSS, JavaScript, and PHP. This system provides full CRUD functionality for managing library members, books, and users",
      technologies: "HTML | CSS | Bootstrap | JS | PHP | Mysql",
      link: "https://github.com/Ashwinasha/LMS.git",
    },
    {
      id: 2,
      title: "Job Finder",
      img: IMG2,
      description:
        "Job Finder website developed using Python Django. It features user authentication, job search functionalities, and job posting capabilities.",
      technologies: "Python | Django | HTML | CSS | Bootstrap | JS",
      link: "https://github.com/Ashwinasha/job_finder.git",
    },
    {
      id: 3,
      title: "Text Editor",
      img: IMG3,
      description:
        "Text editor developed with HTML, CSS, and JavaScript. Includes undo/redo actions, text formatting features, and indentation options.",
      technologies: "HTML | CSS | Bootstrap | JS ",
      link: "https://github.com/Ashwinasha/Text-Editor-Final.git",
    },
    {
      id: 4,
      title: "Student Management System",
      img: IMG4,
      description:
        "Student Management System developed with Python Django for student administration tasks including registration, profiles, and information management.",
      technologies: "Python | Django | HTML | CSS | Bootstrap | JS",
      link: "https://github.com/Ashwinasha/SMS.git",
    },
    {
      id: 5,
      title: "BMI Calculator",
      img: IMG5,
      description:
        "The BMI (Body Mass Index) Calculator, created using React, offers a seamless and interactive way for individuals to determine their BMI, a key indicator of body fat based on height and weight.",
      technologies: "REACT | HTML | CSS | Bootstrap | JS",
      link: "https://github.com/Ashwinasha/bmi_cal.git",
    },
    {
      id: 6,
      title: "SMS using Laravel",
      img: IMG6,
      description:
      "The Student Management System, crafted using PHP Laravel, empowers educators and administrators with efficient CRUD operations alongside register and login functionalities.",
      technologies: "Laravel | HTML | CSS | Bootstrap | PHP",
      link: "https://github.com/Ashwinasha/laravel-sms.git",
    },
  ];

  return (
    <section id="portfolio">
      <h3>My Project Works</h3>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
              <a href={pro.link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
