import { Link } from "react-router-dom";
import styles from "./styles/SecondaryButton.module.css";

interface ExternalButtonProps {
  text: string;
  href: string;
  rel: string;
  target: string;
}

const ExternalButton = ({
  text,
  href,
  rel,
  target,
}: ExternalButtonProps): JSX.Element => {
  return (
    <Link className={styles.container} to={href} rel={rel} target={target}>
      <button className={styles.button}>{text}</button>
    </Link>
  );
};

export default ExternalButton;
