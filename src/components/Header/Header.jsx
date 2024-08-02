import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";

import "./Header.scss";
import { useState } from "react";
function Header() {
  const [mode, setMode] = useState(2);
  return (
    <header>
      <div className="header">
        <div className="logo">
          <span>Aidia</span>
          <span>.Dev</span>
        </div>

        <nav>
          <span>About</span>
          <span>Projects</span>
          <span>Blog</span>
          <span>Contacts</span>
        </nav>

        <div className="iconContainer">
          <button>Resume</button>
          <div className="icons">
            {mode === 2 ? (
              <LightModeIcon onClick={() => setMode(1)} />
            ) : (
              <ModeNightIcon onClick={() => setMode(2)} />
            )}
          </div>
          <MenuIcon className="phoneMenu" />
        </div>
      </div>
    </header>
  );
}

export default Header;
