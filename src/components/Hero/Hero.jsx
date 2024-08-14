import CodeOffIcon from "@mui/icons-material/CodeOff";
import BugReportIcon from "@mui/icons-material/BugReport";
import MouseIcon from "@mui/icons-material/Mouse";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { motion } from "framer-motion";
import "./Hero.scss";
function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="hero"
      id="hero-sec"
    >
      <div className="left-img">
        <CodeOffIcon className="icon" />
      </div>

      <div className="hero-bg">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          It's Mahmoud Aidia
        </motion.h1>
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          A <span>Front-end</span> Developer
        </motion.h2>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Passionate and detail-oriented frontend developer with a knack for
          creating visually appealing and user-friendly web interfaces
        </motion.p>
        <motion.h3
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          Where creativity meets functionality.
        </motion.h3>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          href="#contacts-sec"
        >
          Contact Me &rarr;
        </motion.a>
      </div>

      <motion.div className="right-img">
        <BugReportIcon className="icon" />
      </motion.div>

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
    </motion.section>
  );
}

export default Hero;
