import Container from "react-bootstrap/Container";
import styles from "./networks.module.css";
import iconGoogle from "./../../shared/assets/google.png";
import iconFB from "./../../shared/assets/facebook.png";
import Button from "react-bootstrap/Button";
import {
  facebookProvider,
  githubProvider,
  googleProvider,
} from "../../config/authMethods";
import socialAuth from "../../service/auth";

const Networks = () => {
  const handleBtn = async (provider) => {
    const res = await socialAuth(provider);
   
    console.log(res);
  };
  return (
    <Container className={styles.networks}>
      <Button
        variant="outline-info"
        className={styles.btnFB}
        onClick={() => handleBtn(facebookProvider)}
      >
        <img className={styles.icon} src={iconFB} alt="icon FB" />
        Facebook
      </Button>

      <Button
        variant="outline-info"
        className={styles.btnGoogle}
        onClick={() => handleBtn(googleProvider)}
      >
        <img className={styles.icon} src={iconGoogle} alt="icon google" />
        Google
      </Button>

      <Button
        variant="outline-info"
        className={styles.btnGoogle}
        onClick={() => handleBtn(githubProvider)}
      >
        GitHub
      </Button>
    </Container>
  );
};

export default Networks;
