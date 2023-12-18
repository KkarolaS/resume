import classes from "./AboutMeSection.module.css";

const AboutMeSection = ({ handlePlaying, handleStopPlaying }) => {
  return (
    <section
      className={classes.aboutMe}
      onMouseOver={() => handlePlaying()}
      onMouseOut={() => handleStopPlaying()}
    >
      <img
        src={require("../../../assets/photo/my_cv_photo.jpg")}
        className={classes.photo}
        alt="cv photography"
      ></img>
      <div className={classes.dataWrapper}>
        <div className={classes.addressData}>
          <p className={`${classes.title} ${classes.addressText}`}>
            <i className="fa-solid fa-house-chimney-window fa-lg"></i>Tychy
          </p>
          <p className={`${classes.title} ${classes.addressText}`}>
            <i className="fa-solid fa-envelope fa-lg"></i>
            <a href="mailto:kkarolinasobczak@gmail.com">
              kkarolinasobczak@gmail.com
            </a>
          </p>
          <p className={`${classes.title} ${classes.addressText}`}>
            <i className="fa-solid fa-phone fa-lg"></i>+48 693 926 943
          </p>
        </div>
        <div className={classes.skillsWrapper}>
          <h3 className={classes.title}>
            <i className="fa-solid fa-gears fa-lg"></i>Personal Skills
          </h3>
          <ul className={classes.skillsList}>
            <li>Quick learnings skills</li>
            <li>Time management skills</li>
            <li>Good communication skills</li>
            <li>Team working</li>
            <li>Ability to work under pressure</li>
            <li>Ability to deal with conflict situation</li>
            <li>Ability to lead projects</li>
          </ul>
        </div>
        <div className={classes.languageInfo}>
          <h3 className={classes.title}>
            <i className="fa-solid fa-earth-americas fa-lg"></i>Language
          </h3>
          <p>English</p>
          <div className={classes.levelWrapper}>
            <div className={`${classes.levelEng} ${classes.level}`}>C1</div>
          </div>
          <p>German</p>
          <div className={classes.levelWrapper}>
            <div className={`${classes.levelGe} ${classes.level}`}>B2</div>
          </div>
          <p>Polish</p>
          <div className={classes.levelWrapper}>
            <div className={classes.level}>Native</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
