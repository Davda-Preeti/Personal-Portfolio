import React from "react";
import "../style/Projects.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ticTacToeImg from "../assets/images/tic_tac_toe_app_img.png";
import ReactCrud from '../assets/images/image.png'
import Calc from '../assets/images/Calc.png'
const projects = [
  {
    title: "Interactive Caluclator Application",
    description:
      "Developed a dynamic Caluclator web application using HTML, CSS, and JavaScript, with real-time task management features.",
    image: Calc,
    link: "https://mathzy.netlify.app/",
  },
  
  {
    title: "Tic-Tac-Toe Game",
    description:
      "Designed and developed a fully functional Tic-Tac-Toe game with HTML, CSS, and JavaScript, incorporating real-time game updates.",
    image: ticTacToeImg,
    link: "https://fungame11.netlify.app/",
  },
  {
    title: "Dummy Application with CRUD Features and ReactJS",
    description:
      "Built a CRUD application using ReactJS, Firebase, JSON Server, and Axios API, demonstrating expertise in dynamic UI design.",
    image: ReactCrud,
    link: "https://redux-toolkit-nine-taupe.vercel.app/",
  },
  
];

function Projects() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // auto slide enable
    autoplaySpeed: 3000, // 3000 ms = 3 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="project-container">
      <h2>Projects</h2>
      <Slider {...sliderSettings} className="project-slider">
        {projects.map((project, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="flip-card-back">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={project.image} alt={project.title} />
                  <p>Click to View Project</p>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Projects;
