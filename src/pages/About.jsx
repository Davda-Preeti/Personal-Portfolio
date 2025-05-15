import React from "react";
import "../style/About.css"; // Import the external CSS file

const skills = [
  {
    title: "Front-End Development",
    description:
      "Crafting responsive and dynamic user interfaces using HTML, CSS, JavaScript, React.js, and Bootstrap.",
  },
  {
    title: "Back-End Development",
    description:
      "Developing robust server-side applications with Node.js and managing databases like MongoDB and MySQL.",
  },
  {
    title: "Programming Languages",
    description:
      "Proficient in C enabling versatile software development solutions.",
  },
];

function About() {
  return (
    <div className="container-fluid about-container">
      <div className="main-content">
        <section className="about-me">
          <img
            src="/images/preetidavda.jpg"
            alt="preetidavda"
            className="profile-img"
          />
          <div className="about-text">
            <h1>About Me</h1>
            <p>
             Hello! I'm Preeti Davda, a dedicated Full-Stack Developer with a strong foundation in Computer Information Technology. I have honed my skills in programming languages such as C and JavaScript, as well as in working with databases like MySQL.
            </p>
            <p>
              To further enhance my expertise, I enrolled in a Full-Stack Development course at Red & White Education. Through this program, I have gained proficiency in front-end technologies such as HTML, CSS, JavaScript, React.js, and Bootstrap. Currently, I am expanding my knowledge in back-end technologies, with a focus on Node.js and MongoDB.
            </p>
            <p>
              My goal is to leverage this comprehensive skill set to build
              seamless and efficient web applications that provide exceptional
              user experiences.
            </p>
          </div>
        </section>
      </div>

      <section className="skills">
        <h2>Skills and Technologies</h2>  
        <div className="cards-container">
          {skills.map((skill, index) => (
            <div className="card" key={index}>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="education">
        <h2>Education and Certifications</h2>
        <div className="cards-container">
          <div className="card">
            <h3>12th(HSC)</h3>
            <p>
              Aum Vidya Mandir
              Gandhidham,Kutchchh
              <br /> [2015]
            </p>
          </div>
          <div className="card">
            <h3>Full-Stack Development Certification</h3>
            <p>
              Red and White Education, Completed
              <br /> [2024-2025]
            </p>  
          </div>
          <div className="card">
            <h3>Tally ERP9 and Ofiice Automation</h3>
            <p>
              Indian Red Cross Society, 
              Gandhidham,Kutchchh
              <br/>Completed
              <br /> [2015]
            </p>  
          </div>
          
        </div>
      </section>

      <section className="resume">
        <h2>Resume</h2>
        <p>
          Download my resume to learn more about my professional journey and
          accomplishments.
        </p>
        <a href="/resume/preetidavdapcv.pdf" download className="resume-button">
          Download
        </a>
      </section>
    </div>
  );
}

export default About;
