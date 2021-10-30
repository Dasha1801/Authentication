import Container from "react-bootstrap/Container";
import styles from "./networks.module.css";
import iconGoogle from "./../../shared/assets/google.png";
import iconFB from "./../../shared/assets/facebook.png";
import Button from "react-bootstrap/Button";

const Networks = () => {
  return (
    <Container className={styles.networks}>
      <Button variant="outline-info" className={styles.btnFB}>
        <img className={styles.icon} src={iconGoogle} alt="icon google" />{" "}
        Google
      </Button>
      <Button variant="outline-info" className={styles.btnGoogle}>
        <img className={styles.icon} src={iconFB} alt="icon google" /> Facebook
      </Button>
    </Container>
  );
};

export default Networks;
