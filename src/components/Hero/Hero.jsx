import CodeOffIcon from "@mui/icons-material/CodeOff";
import BugReportIcon from "@mui/icons-material/BugReport";
import MouseIcon from "@mui/icons-material/Mouse";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { motion } from "framer-motion";
import "./Hero.scss";
function Hero() {
  return (
    <section className="hero" id="hero-sec">
      <div className="left-img">
        <CodeOffIcon className="icon" />
      </div>

      <div className="hero-bg">
        <h1>It's Mahmoud Aidia</h1>
        <h2>
          A <span>Front-end</span> Developer
        </h2>
        <p>
          Passionate and detail-oriented frontend developer with a knack for
          creating visually appealing and user-friendly web interfaces
        </p>
        <h3>Where creativity meets functionality.</h3>
        <a href="#contacts-sec">Contact Me &rarr;</a>
      </div>

      <div className="right-img">
        <BugReportIcon className="icon" />
      </div>

      <motion.a
        href="#about-sec"
        className="down"
        animate={{ y: [-3, -30, -3] }}
        transition={{
          duration: 2,
          ease: "easeOut",
          repeat: Infinity,
        }}
      >
        <MouseIcon />
        <ArrowDownwardIcon />
      </motion.a>
    </section>
  );
}

export default Hero;
