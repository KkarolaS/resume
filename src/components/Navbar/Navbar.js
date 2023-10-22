import classes from "./Navbar.module.css";
import Footer from "./Footer/Footer";

const Navbar = () => {
  return (
    <header className={classes.navbar}>
      <div className={classes.titleWrapper}>
        <p className={classes.title}>KAROLINA</p>
        <p className={classes.title}>SOBCZAK</p>
        <p className={classes.subtitle}>CV</p>
      </div>
      <ul className={classes.menu}>
        <li className={classes.menuItem}>
          <a href="/">PORTFOLIO</a>
        </li>
        <li className={classes.menuItem}>
          <a href="/about">ABOUT ME</a>
        </li>
      </ul>
      <Footer />
    </header>
  );
};

export default Navbar;
