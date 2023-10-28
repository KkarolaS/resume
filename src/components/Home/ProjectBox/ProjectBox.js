import classes from "./ProjectBox.module.css";

const ProjectBox = ({ imageSrc, gitHubLink, netlifyLink, isHovered }) => {
  return (
    <div className={classes.projectsWrapper}>
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
