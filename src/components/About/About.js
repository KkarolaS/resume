import classes from "./About.module.css";
import Navbar from "../Navbar/Navbar";
import AboutMeSection from "./AboutMeSection/AboutMeSecion";
import ExperienceInfoWrapper from "./ExperienceSection/ExperienceInfoWrapper";
import whoosh from "../../assets/sounds/whoosh.wav";
import { useSound } from "use-sound";
import { useState } from "react";

const About = () => {
  const [isMute, setIsMute] = useState(false);

  const [playWhoosh, { stop }] = useSound(whoosh, {
    volume: 0.6,
    interrupt: true,
    soundEnabled: !isMute,
  });

  console.log(isMute);

  const handlePlaying = (status) => {
    console.log(status);
    setIsMute(status);
  };

  const handleMouseOver = () => {
    playWhoosh();
  };

  const handleMouseOut = () => {
    stop();
  };

  return (
    <div className={classes.aboutPage}>
      <Navbar getPlayingStatus={handlePlaying} />
      <section className={classes.aboutSection}>
        <AboutMeSection
          handlePlaying={handleMouseOver}
          handleStopPlaying={handleMouseOut}
        />
        <ExperienceInfoWrapper
          handlePlaying={handleMouseOver}
          handleStopPlaying={handleMouseOut}
        />
      </section>
    </div>
  );
};

export default About;
