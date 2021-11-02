import React, { useEffect, useState } from "react";
import { BaseButton } from "../../../shared/baseButton/baseButton";
import firebase, { auth } from "../../../config/firebaseConfig";
import Container from "react-bootstrap/esm/Container";
import styles from "../buttons.module.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { sendMessage } from './methodsBtn';

const ButtonBro = () => {
  const counterRef = firebase.database().ref("countBro");
  const [countBro, setCountBro] = useState(0);
  const [user] = useAuthState(auth);

  useEffect(() => {
    counterRef.on("value", (snapshot) => {
      const { bro } = snapshot.val();
      setCountBro(bro);
    });
  }, [counterRef]);

  const updateCount = () => {
    counterRef.update({ bro: countBro + 1 });
    sendMessage(user, 'Bro!');
  };

  return (
    <Container className={styles.wrapper}>
      <BaseButton onClick={updateCount}>Bro!</BaseButton>
    </Container>
  );
};

export default ButtonBro;
