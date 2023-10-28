import { useState } from "react";
import classes from "./Home.module.css";
import { portfolioData } from "../../data/portfolioData";
import ProjectBox from "./ProjectBox/ProjectBox";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const [isHover, setIsHover] = useState(true);

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  return (
    <div className={classes.homePage}>
      <Navbar />
      <section
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className={classes.homeSection}
      >
        {portfolioData.map((item) => (
          <ProjectBox
            key={item.id}
            imageSrc={item.src}
            gitHubLink={item.gitHubLink}
            netlifyLink={item.netlifyLink}
            isHovered={isHover}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
