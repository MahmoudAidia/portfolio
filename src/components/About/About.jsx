import Line from "../../UI/Line";

import personal from "/public/img/me-3.png";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { motion } from "framer-motion";
import "./About.scss";
import { projectsList } from "../../data/data";

function About() {
  return (
    <motion.section className="about" id="about-sec">
      <div className="heading">
        <h2>Simplicity is the soul of efficiency.</h2>
        <Line />
      </div>
      <div className="about-contents">
        <div className="text-box">
          <div className="header-container">
            <h2 className="header">
              <span>About me</span>
              <FormatQuoteIcon />
            </h2>
          </div>

          <div className="intro">
            <p>
              With over 1.5 years of experience as a frontend developer, I
              specialize in crafting responsive and user-friendly web
              applications. I excel in creating intuitive interfaces and enjoy
              working in collaborative, agile environments.
            </p>
          </div>

          <div className="education">
            <div className="education-container">
              <h2>Education</h2>
              <p>Bachelor of Computer Science and Information Technology</p>
              <p>
                GPA:
                <span> 3.38</span>
              </p>
            </div>
          </div>

          <div className="statistics">
            <div className="stats-item">
              <div className="nums">
                <span>1</span>
                <span>+</span>
              </div>
              <p>Year of Experience</p>
            </div>
            <div className="stats-item">
              <div className="nums">
                <span>{projectsList.length}</span>
                <span>+</span>
              </div>
              <p>Projects</p>
            </div>
            <div className="stats-item">
              <div className="nums">
                <span>310</span>
                <span>+</span>
              </div>
              <p>Leetcode Problems</p>
            </div>
          </div>
        </div>
        <div className="img">
          <div>
            <img src={personal} alt="My Image" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
