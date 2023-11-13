import classes from "./Contact.module.css";
import SocialWrapper from "./SocialWrapper/SocialWrapper";
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  return (
    <div className={classes.contact}>
      <Navbar />
      <section className={classes.contactSection}>
        <div className={classes.contactHeader}></div>
        <div className={classes.infoWrapper}>
          <div className={classes.imgBox}></div>
          <div className={`${classes.contactBox} ${classes.mailContactBox}`}>
            <p className={classes.contactTitle}>Contact Me</p>
            <p className={classes.contactText}>
              Do you like my projects and find me as a suitable candidate for
              the position?
            </p>
            <p className={classes.contactText}>
              Send me an email or call me 👇
            </p>
            <a href="mailto:kkarolinasobczak@gmail.com">
              kkarolinasobczak@gmail.com
            </a>
            <a href="tel:+48693926943">+48 693 926 943 </a>
          </div>
          <div className={classes.contactBox}>
            <p className={classes.contactTitle}>Learn More</p>
            <SocialWrapper />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
