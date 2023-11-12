import classes from "./Home.module.css";
import { portfolioData } from "../../data/portfolioData";
import ProjectBox from "./ProjectBox/ProjectBox";
import Navbar from "../Navbar/Navbar";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className={classes.homePage}>
      <Navbar contactLink={"#contact"} />
      <section className={classes.homeSection}>
        {portfolioData.map((item) => (
          <ProjectBox
            key={item.id}
            imageSrc={item.src}
            gitHubLink={item.gitHubLink}
            netlifyLink={item.netlifyLink}
          />
        ))}
      </section>
      <Contact />
    </div>
  );
};

export default Home;
