import classes from "./Navbar.module.css";
import { useState } from "react";

const Navbar = ({ getPlayingStatus }) => {
  const [isOn, setIsOn] = useState(true);

  const handleMuteClick = () => {
    setIsOn((prevValue) => !prevValue);
    getPlayingStatus(isOn);
  };

  return (
    <header className={classes.navbar}>
      <div className={classes.titleWrapper}>
        <p className={classes.title}>KAROLINA</p>
        <p className={classes.title}>SOBCZAK</p>
        <p className={classes.subtitle}>CV</p>
      </div>
      <ul className={classes.menu}>
        <li className={classes.menuItem}>
          <a href="/">PORTFOLIO</a>
        </li>
        <li className={classes.menuItem}>
          <a href="/about">ABOUT ME</a>
        </li>
        <li className={classes.menuItem}>
          <a href="/contact">CONTACT</a>
        </li>
      </ul>
      <button onClick={handleMuteClick}>{isOn ? "Mute" : "UNMute"}</button>
    </header>
  );
};

export default Navbar;
