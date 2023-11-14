import classes from "./Navbar.module.css";
import { useState } from "react";

const Navbar = ({ getPlayingStatus, isDisabled }) => {
  const [isMute, setIsMute] = useState(false);

  console.log(isMute);

  const handleMuteClick = () => {
    setIsMute((prevValue) => !prevValue);
    getPlayingStatus(!isMute);
    console.log(!isMute);
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
      <button
        className={classes.soundBtn}
        onClick={isDisabled ? null : () => handleMuteClick()}
        disabled={isDisabled}
      >
        {isMute ? "🔕" : "🔔"}
      </button>
    </header>
  );
};

export default Navbar;

//  TODO add flow for mute/unmute status during diffrent pages
