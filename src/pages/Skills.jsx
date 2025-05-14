import React from "react";
import "../style/Skills.css"; // Import the external CSS file
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb, SiJquery } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
  { name: "React.js", icon: <FaReact color="#61DAFB" /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
  { name: "jQuery", icon: <SiJquery color="#0769AD" /> },
  { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
];

function Skills() {
  return (
    <div className="container-fluid skills-container">
      <h1>Skills & Technologies</h1>
      <div className="skills-content">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
