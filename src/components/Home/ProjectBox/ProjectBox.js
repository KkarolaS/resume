import classes from "./ProjectBox.module.css";
import whoosh from "../../../assets/sounds/whoosh.wav";
import { useSound } from "use-sound";
import { useState } from "react";

const ProjectBox = ({ imageSrc, gitHubLink, netlifyLink }) => {
  const [playWhoosh, { stop }] = useSound(whoosh, {
    volume: 0.6,
    interrupt: true,
  });

  const [isHovered, setIsHovered] = useState(true);

  const handleMouseOver = () => {
    playWhoosh();
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    stop();
    setIsHovered(false);
  };

  return (
    <div
      className={classes.projectsWrapper}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <p className={classes.projectInfo}>
        <a href={netlifyLink} rel="noreferrer" target={"_blank"}>
          <img src={imageSrc} className={classes.projectPhoto} alt="project" />
        </a>
      </p>
      <div className={classes.infoWrapper}>
        <p className={classes.projectInfo}>
          <a href={gitHubLink} rel="noreferrer" target={"_blank"}>
            <i
              style={isHovered ? { transform: "scale(1.2)" } : null}
              className="fa-brands fa-github fa-2xl"
            ></i>{" "}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProjectBox;
