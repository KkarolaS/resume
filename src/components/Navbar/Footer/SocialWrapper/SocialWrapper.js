import SocialLogo from "./SocialLogo";
import classes from "./SocialWrapper.module.css";

const SocialWrapper = () => {
  return (
    <div className={classes.iconContainer}>
      <SocialLogo className={"fa-brands fa-linkedin fa-2xl"} />
      <SocialLogo className={"fa-brands fa-square-xing fa-2xl"} />
    </div>
  );
};

export default SocialWrapper;
