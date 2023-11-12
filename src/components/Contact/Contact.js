import classes from "./Contact.module.css";
import SocialWrapper from "./SocialWrapper/SocialWrapper";

const Contact = () => {
  return (
    <footer className={classes.contact} id="contact">
      <div className={classes.contactContainer}>
        <p className={classes.contactTitle}>Contact Me</p>
        <p>
          Do you like my projects and find me as a suitable candidate for the
          position? Send me an email or call me 👇
        </p>
        <a href="mailto:kkarolinasobczak@gmail.com">
          kkarolinasobczak@gmail.com
        </a>
        <a href="tel:+48693926943">+48 693 926 943 </a>
        <p className={classes.contactTitle}>Learn more about me</p>
      </div>
      <SocialWrapper />
    </footer>
  );
};

export default Contact;
