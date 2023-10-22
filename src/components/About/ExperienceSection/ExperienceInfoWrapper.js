import classes from "./ExperienceInfoWrapper.module.css";

const ExperienceInfoWrapper = () => {
  return (
    <div className={classes.boxWrapper}>
      <div className={classes.infoBox}>Knowledge</div>
      <div className={classes.infoBox}>Education</div>
      <div className={classes.infoBox}>Experience</div>
    </div>
  );
};

export default ExperienceInfoWrapper;
