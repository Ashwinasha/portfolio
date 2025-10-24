import "./portfolio.css";

import IMG1 from "../../assets/lms.png";
import IMG2 from "../../assets/job.png";
import IMG3 from "../../assets/te.png";
import IMG4 from "../../assets/stu.png";
import IMG5 from "../../assets/bmi.png";
import IMG6 from "../../assets/sms.png";
import IMG7 from "../../assets/mec.png";
import IMG8 from "../../assets/course.png";
import IMG9 from "../../assets/hale.png";
import IMG10 from "../../assets/trez.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "HaleNature e-commerce website",
      img: IMG9,
      description:
        "An e-commerce platform developed using Laravel, JavaScript, Bootstrap, CSS, and MySQL. It includes features such as user registration and login, admin management, product management, slider management, and secure backend operations for efficient online store management.",
      technologies: "HTML | CSS | Bootstrap | JS | PHP | Mysql | Laravel",
      link: "https://www.halenature.com/",
    },
    {
      id: 2,
      title: "Trezzer travel booking website",
      img: IMG10,
      description:
        "A travel booking platform built with Laravel, JavaScript, Bootstrap, CSS, and MySQL. It allows users to explore destinations, register and log in, and includes modules for admin and agent management, dynamic content sliders, and robust backend functionality for managing travel packages.",
      technologies: "HTML | CSS | Bootstrap | JS | PHP | Mysql | Laravel",
      link: "https://www.trezzert.com/",
    },
    {
      id: 3,
      title: "Library Management System",
      img: IMG1,
      description:
        "Library Management System developed using HTML, CSS, JavaScript, and PHP. This system provides full CRUD functionality for managing library members, books, and users",
      technologies: "HTML | CSS | Bootstrap | JS | PHP | Mysql",
      link: "https://github.com/Ashwinasha/LMS.git",
    },
    {
      id: 4,
      title: "Intern Finder",
      img: IMG2,
      description:
        "Job Finder website developed using Python Django. It features user authentication, job search functionalities, and job posting capabilities.",
      technologies: "Python | Django | HTML | CSS | Bootstrap | JS",
      link: "https://github.com/Ashwinasha/job_finder.git",
    },
    {
      id: 5,
      title: "Text Editor",
      img: IMG3,
      description:
        "Text editor developed with React JS, HTML, CSS, and JavaScript. Includes undo/redo actions, text formatting features, and indentation options.",
      technologies: "React JS |HTML | CSS | Bootstrap | JS ",
      link: "https://github.com/Ashwinasha/react-text-editor",
    },
    {
      id: 6,
      title: "Student Management System",
      img: IMG4,
      description:
        "Student Management System developed with Python Django for student administration tasks including registration, profiles, and information management.",
      technologies: "Python | Django | HTML | CSS | Bootstrap | JS",
      link: "https://github.com/Ashwinasha/SMS.git",
    },
    {
      id: 7,
      title: "BMI Calculator",
      img: IMG5,
      description:
        "The BMI (Body Mass Index) Calculator, created using React, offers a seamless and interactive way for individuals to determine their BMI, a key indicator of body fat based on height and weight.",
      technologies: "REACT | HTML | CSS | Bootstrap | JS",
      link: "https://github.com/Ashwinasha/bmi_cal.git",
    },
    {
      id: 8,
      title: "SMS using Laravel",
      img: IMG6,
      description:
      "The Student Management System, crafted using PHP Laravel, empowers educators and administrators with efficient CRUD operations alongside register and login functionalities.",
      technologies: "Laravel | HTML | CSS | Bootstrap | PHP",
      link: "https://github.com/Ashwinasha/laravel-sms.git",
    },
    {
      id: 9,
      title: "Mobile Shop E-commerce website frontend",
      img: IMG7,
      description:
      "The Mobile Shop E-commerce website frontend, developed using React.js, HTML, CSS, and Bootstrap, features a carousel slider and grid to showcase product items. This project enhances user experience with dynamic product displays and efficient navigation.",
      technologies: "React Js | HTML | CSS | Bootstrap ",
      link: "https://github.com/Ashwinasha/ecom-front.git",
    },
    {
      id: 10,
      title: "Course Management Application",
      img: IMG8,
      description:
      "The Course Management System, developed with React.js and Spring Boot, enables CRUD operations for courses, students, and marks. Integrated with MySQL, it streamlines academic management and enhances usability for efficient record and performance tracking.",
      technologies: "React Js | HTML | CSS | Bootstrap | Spring Boot | Java  ",
      link: "https://github.com/Ashwinasha/course",
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
