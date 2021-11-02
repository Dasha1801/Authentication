import React, { useEffect, useState } from "react";
import { BaseButton } from "../../shared/baseButton/baseButton";
import firebase, { auth } from "../../config/firebaseConfig";
import Container from "react-bootstrap/esm/Container";
import styles from "./button.module.css";
import { useAuthState } from "react-firebase-hooks/auth";

const ButtonSis = () => {
  const counterRef = firebase.database().ref("countSis");
  const [countSis, setCountSis] = useState(0);
  const [user] = useAuthState(auth);

  const date = new Date();
  useEffect(() => {
    counterRef.on("value", (snapshot) => {
      const { sis } = snapshot.val();
      setCountSis(sis);
    });
  }, [counterRef]);

  function sendMessage() {
    const messagesRef = firebase.database().ref("messages");
    const message = {
      name: user.displayName,
      text: "Sis!",
      time: date.toLocaleTimeString("ru", {
        hour: "numeric",
        hour24: true,
        minute: "numeric",
      }),
    };
    messagesRef.push(message);
  }
  const updateCount = () => {
    counterRef.update({ sis: countSis + 1 });
    sendMessage();
  };

  return (
    <Container className={styles.wrapper}>
      <BaseButton onClick={updateCount}>Sis!</BaseButton>
    </Container>
  );
};

export default ButtonSis;
