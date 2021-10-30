import Container from "react-bootstrap/Container";
import styles from "./information.module.css";

const Information = () => {
  const bro = 100;
  const sis = 100;
  return (
    <Container className={styles.statistic}>
      <h3 className={styles.title}>
        Sis! <span className={styles.count}>{`${bro} `}</span>
      </h3>
      <h3 className={styles.title}>
        Bro! <span className={styles.count}>{`${sis}`}</span>
      </h3>
    </Container>
  );
};

export default Information;