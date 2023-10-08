import classes from "./Footer.module.css";
import SocialWrapper from "./SocialWrapper/SocialWrapper";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.contactContainer}>
          <p>Contact me:</p>
          <a href="mailto:kkarolinasobczak@gmail.com">
            kkarolinasobczak@gmail.com
          </a>
        </div>
        <SocialWrapper />
      </div>
    </footer>
  );
};

export default Footer;
