import React, { useEffect, useState } from "react";
import { BaseButton } from "../../../shared/baseButton/baseButton";
import firebase, { auth } from "../../../config/firebaseConfig";
import Container from "react-bootstrap/esm/Container";
import styles from "../buttons.module.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { sendMessage } from './methodsBtn';

const ButtonSis = () => {
  const counterRef = firebase.database().ref("countSis");
  const [countSis, setCountSis] = useState(0);
  const [user] = useAuthState(auth);

  useEffect(() => {
    counterRef.on("value", (snapshot) => {
      const { sis } = snapshot.val();
      setCountSis(sis);
    });
  }, [counterRef]);

  const updateCount = () => {
    counterRef.update({ sis: countSis + 1 });
    sendMessage(user, 'Sis!');
  };

  return (
    <Container className={styles.wrapper}>
      <BaseButton onClick={updateCount}>Sis!</BaseButton>
    </Container>
  );
};

export default ButtonSis;
