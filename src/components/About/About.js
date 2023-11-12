import classes from "./About.module.css";
import Navbar from "../Navbar/Navbar";
import AboutMeSection from "./AboutMeSection/AboutMeSecion";
import ExperienceInfoWrapper from "./ExperienceSection/ExperienceInfoWrapper";

const About = () => {
  return (
    <div className={classes.aboutPage}>
      <Navbar contactLink={"/"} />
      <section className={classes.aboutSection}>
        <AboutMeSection />
        <ExperienceInfoWrapper />
      </section>
    </div>
  );
};

export default About;
