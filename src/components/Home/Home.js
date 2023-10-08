import classes from "./Home.module.css";
import { portfolioData } from "../../data/portfolioData";
import ProjectBox from "./ProjectBox/ProjectBox";

const Home = () => {
  return (
    <section className={classes.homeSection}>
      {portfolioData.map((item) => (
        <ProjectBox
          key={item.id}
          imageSrc={item.src}
          gitHubLink={item.gitHubLink}
          netlifyLink={item.netlifyLink}
          description={item.description}
        />
      ))}
    </section>
  );
};

export default Home;
