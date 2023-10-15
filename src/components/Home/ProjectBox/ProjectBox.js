import classes from "./ProjectBox.module.css";

const ProjectBox = ({ imageSrc, gitHubLink, netlifyLink, description }) => {
  return (
    <div className={classes.projectsWrapper}>
      <img src={imageSrc} className={classes.projectPhoto} alt="project" />
      <div className={classes.infoWrapper}>
        <p className={classes.projectInfo}>
          <a href={gitHubLink} rel="noreferrer" target={"_blank"}>
            🔗 Click and see on GitHub
          </a>
        </p>
        <p className={classes.projectInfo}>
          <a href={netlifyLink} rel="noreferrer" target={"_blank"}>
            🔗 Click and see on Netlify
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProjectBox;
