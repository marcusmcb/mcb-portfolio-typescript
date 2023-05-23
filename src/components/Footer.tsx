import styles from "./styles/Footer.module.css";
import logo from "../images/mcb-logo.jpg";
import { Link } from "react-router-dom";
import github from "../images/icons/github.svg";
import twitter from "../images/icons/twitter.svg";
import linkedin from "../images/icons/linkedin.svg";

const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className={`container ${styles.container}`}>
        <div className={styles.imageContainer} style={{ cursor: "pointer" }}>
          <img src={logo} alt="logo" className={styles.image} />
        </div>
        <nav id="bottomnav" className={styles.nav}>
          <Link to="/" className={styles.item}>
            HOME
          </Link>
          <Link to="/portfolio" className={styles.item}>
            PORTFOLIO
          </Link>
          <Link to="/contact" className={styles.item}>
            CONTACT ME
          </Link>
        </nav>
        <div className={styles.iconContainer}>
          <a
            href="https://github.com/marcusmcb"
            target="_blank"
            rel="noreferrer"
            className={styles.iconButton}
            aria-label="github"
          >
            <img src={github} alt="github" className={styles.icon} />
          </a>

          <a
            href="https://www.twitter.com/djmarcusmcb"
            target="_blank"
            rel="noreferrer"
            className={styles.iconButton}
            aria-label="twitter"
          >
            <img src={twitter} alt="twitter" className={styles.icon} />
          </a>

          <a
            href="https://www.linkedin.com/in/marcusmcbride-developer/"
            target="_blank"
            rel="noreferrer"
            className={styles.iconButton}
            aria-label="linkedin"
          >
            <img src={linkedin} alt="linkedin" className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
