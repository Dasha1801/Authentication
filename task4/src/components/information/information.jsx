import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import styles from "./information.module.css";
import firebase from "../../config/firebaseConfig";

const Information = () => {
  const [countSis, setCountSis] = useState(0);
  const [countBro, setCountBro] = useState(0);
  
  const sisRef = firebase.database().ref("countSis");
  const broRef = firebase.database().ref("countBro");
  
  useEffect(() => {
    sisRef.on("value", (snapshot) => {
      const { sis } = snapshot.val();
      setCountSis(sis);
    });
  },[sisRef]);

  useEffect(() => {
    broRef.on("value", (snapshot) => {
      const { bro } = snapshot.val();
      setCountBro(bro);
    });
  },[broRef]);

  return (
    <Container className={styles.statistic}>
      <h3 className={styles.title}>
        <span className={styles.count}>{`${countSis} `}</span>Sis!
      </h3>
      <h3 className={styles.title}>
        <span className={styles.count}>{`  ${countBro} `}</span>Bro!
      </h3>
    </Container>
  );
};

export default Information;
