// import ModeNightIcon from "@mui/icons-material/ModeNight";
// import LightModeIcon from "@mui/icons-material/LightMode";
import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import MobileNav from "../MobileNav/MobileNav";

import "./Header.scss";
import { motion } from "framer-motion";

function Header() {
  // const [mode, setMode] = useState(2);
  const [openNav, setOpenNav] = useState(false);

  if (openNav) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }

  return (
    <motion.header
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="header">
        <motion.a
          initial={{ x: -150 }}
          animate={{ x: 0 }}
          transition={{ delay: 1 }}
          href="#hero-sec"
          className="logo"
        >
          <span>Aidia</span>
          <span>.Dev</span>
        </motion.a>

        <nav>
          <motion.a
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
            href="#about-sec"
          >
            About
          </motion.a>
          <motion.a
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.6 }}
            href="#projects-sec"
          >
            Projects
          </motion.a>
          <motion.a
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 1 }}
            href="#contacts-sec"
          >
            Contacts
          </motion.a>
        </nav>

        <div className="iconContainer">
          <motion.a
            initial={{ x: 150 }}
            animate={{ x: [150, -10, 0] }}
            transition={{ delay: 1 }}
            href="/public/MAHMOUD MOSTAFA-1.pdf"
            target="_blank"
            download="MAHMOUD MOSTAFA-1.pdf"
          >
            Download CV{" "}
          </motion.a>
          {/*
           <div className="icons">
            {mode === 2 ? (
              <LightModeIcon onClick={() => setMode(1)} />
            ) : (
              <ModeNightIcon onClick={() => setMode(2)} />
            )}
          </div>
          */}

          <motion.div
            initial={{ x: 150 }}
            animate={{ x: [150, -10, 0] }}
            transition={{ delay: 1.3 }}
          >
            <MenuIcon
              className="phoneMenu"
              onClick={() => setOpenNav((prev) => !prev)}
            />
          </motion.div>
        </div>
      </div>

      {openNav && <MobileNav setOpenNav={setOpenNav} />}
    </motion.header>
  );
}

export default Header;
