import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";

import "./Header.scss";
import { useState } from "react";
import MobileNav from "../MobileNav/MobileNav";
function Header() {
  // const [mode, setMode] = useState(2);
  const [openNav, setOpenNav] = useState(false);
  console.log(openNav);

  return (
    <header>
      <div className="header">
        <a href="#hero-sec" className="logo">
          <span>Aidia</span>
          <span>.Dev</span>
        </a>

        <nav>
          <a href="#about-sec">About</a>
          <a href="#projects-sec">Projects</a>
          <a href="#contacts-sec">Contacts</a>
        </nav>

        <div className="iconContainer">
          <a
            href="/src/file/Mahmoud-Mostafa-Aidia.pdf"
            download="Mahmoud-Mostafa-Aidia.pdf"
          >
            Resume
          </a>
          {/*
           <div className="icons">
            {mode === 2 ? (
              <LightModeIcon onClick={() => setMode(1)} />
            ) : (
              <ModeNightIcon onClick={() => setMode(2)} />
            )}
          </div>
          */}
          <MenuIcon
            className="phoneMenu"
            onClick={() => setOpenNav((prev) => !prev)}
          />
        </div>
      </div>

      {openNav && <MobileNav setOpenNav={setOpenNav} />}
    </header>
  );
}

export default Header;
