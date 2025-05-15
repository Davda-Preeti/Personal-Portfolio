import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "../style/Home.css"; // Import the external CSS file

function Home() {
  return (
    <div className="container-fluid home-container d-flex align-items-center justify-content-center text-center">
      <div className="content p-5 rounded">
        <img
          src="/images/preetidavda.jpg"
          alt="preetidavda"
          className="profile-img rounded-circle img-fluid mb-4"
        />
        <h1 className="mb-3">Hello, I'm Preeti Davda</h1>
        <p className="lead">
          As a dedicated Full-Stack Developer, <br />I specialize in crafting
          dynamic and responsive web applications that provide seamless user
          experiences. With a strong foundation in both front-end and back-end
          technologies, <br />I have successfully developed and deployed
          projects ranging from interactive user interfaces to robust
          server-side applications. My passion lies in continuously exploring
          new technologies and methodologies to deliver innovative solutions
          that meet and exceed client expectations.
        </p>
        <div className="d-flex justify-content-center gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/davda-preeti-b18801315/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={40} />
          </a>
         
          <a
            href="https://github.com/Davda-Preeti"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <FaGithub size={40} />
          </a>
        </div>
        <a
          href="/resume/preetidavdapcv.pdf"
          download
          className="btn btn-custom btn-lg mt-4"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}

export default Home;
