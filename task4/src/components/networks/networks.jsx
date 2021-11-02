import Container from "react-bootstrap/Container";
import styles from "./networks.module.css";
import iconGoogle from "./../../shared/assets/google.png";
import iconFB from "./../../shared/assets/facebook.png";
import iconGH from "./../../shared/assets/github.png";
import Button from "react-bootstrap/Button";
import {
  facebookProvider,
  githubProvider,
  googleProvider,
} from "../../config/authMethods";
import socialAuth from "../../service/auth";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/action";
// import firebase from "../../config/firebaseConfig";


const Networks = () => {
 
  const dispatch = useDispatch();

  const handleBtn = async (provider) => {
    const res = await socialAuth(provider);
    if (res) {
      dispatch(logIn(true));
    }
  };

  return (
    <Container className={styles.networks}>
    
      <Button
        variant="outline-info"
        className={styles.btn}
        onClick={() => handleBtn(facebookProvider)}
      >
        <img className={styles.icon} src={iconFB} alt="icon FB" />
        Facebook
      </Button>

      <Button
        variant="outline-info"
        className={styles.btn}
        onClick={() => handleBtn(googleProvider)}
      >
        <img className={styles.icon} src={iconGoogle} alt="icon google" />
        Google
      </Button>

      <Button
        variant="outline-info"
        className={styles.btn}
        onClick={() => handleBtn(githubProvider)}
      >
          <img className={styles.icon} src={iconGH} alt="icon github" />
        GitHub
      </Button>
    </Container>
  );
};

export default Networks;
