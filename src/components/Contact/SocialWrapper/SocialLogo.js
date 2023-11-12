import classes from "./SocialLogo.module.css";

const SocialLogo = ({ className, isLinkedIn, link }) => {
  return (
    <div>
      <a
        className={isLinkedIn ? classes.lkLink : classes.xLink}
        href={link}
        rel="noreferrer"
        target="_blank"
      >
        <i className={className} alt="logo"></i>
      </a>
    </div>
  );
};

export default SocialLogo;
