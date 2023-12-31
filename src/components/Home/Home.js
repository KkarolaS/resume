import classes from "./Home.module.css";
import { portfolioData } from "../../data/portfolioData";
import ProjectBox from "./ProjectBox/ProjectBox";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { isMuted } from "../../data/isMuted";

const Home = () => {
  const [isMute, setIsMute] = useState(isMuted);

  const handlePlaying = (status) => {
    setIsMute(status);
  };

  return (
    <div className={classes.homePage}>
      <Navbar getPlayingStatus={handlePlaying} />
      <section className={classes.homeSection}>
        {portfolioData.map((item) => (
          <ProjectBox
            key={item.id}
            imageSrc={item.src}
            gitHubLink={item.gitHubLink}
            netlifyLink={item.netlifyLink}
            isPlaying={isMute}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
