import SocialLogo from "./SocialLogo";
import classes from "./SocialWrapper.module.css";

const SocialWrapper = () => {
  return (
    <div className={classes.iconContainer}>
      <SocialLogo
        className={"fa-brands fa-linkedin fa-2xl"}
        isLinkedIn={true}
        link={"https://www.linkedin.com/in/karolina-sobczak-700941173"}
      />
      <SocialLogo
        className={"fa-brands fa-square-xing fa-2xl"}
        isLinkedIn={false}
        link={"https://www.xing.com/"}
      />
    </div>
  );
};

export default SocialWrapper;
