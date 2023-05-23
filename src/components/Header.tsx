import styles from "./styles/Header.module.css";
import hamburger from "../images/icons/hamburger.svg";
import close from "../images/icons/close.svg";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Header = (): JSX.Element => {
  const [clicked, setClicked] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const handleClick = () => {
    setClicked((current) => {
      return !current;
    });
  };

  let currentYear = new Date().getFullYear();

  const linkClick = () => {
    setClicked(false);
  };

  return (
    <header className={styles.header}>
      <div>
        {(!isMobile || clicked) && (
          <nav id="topnav" className={styles.nav}>
            <a
              href="http://www.djmarcusmcbride.com"
              className={styles.item}
              onClick={linkClick}
              target="_blank"
              rel="noopener noreferrer"
            >
              {currentYear} &#169; MCB
            </a>
          </nav>
        )}
        {isMobile && (
          <button
            onClick={handleClick}
            aria-label="Menu"
            aria-expanded={clicked ? "true" : "false"}
            className={styles.menu}
          >
            <img src={clicked ? close : hamburger} alt="hamburger" />
          </button>
        )}
      </div>
    </header>
  );
}

export default Header
