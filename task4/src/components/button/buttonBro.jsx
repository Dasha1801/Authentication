import React, { useEffect, useState } from "react";
import { BaseButton } from "../../shared/baseButton/baseButton";
import firebase, { auth } from "../../config/firebaseConfig";
import Container from "react-bootstrap/esm/Container";
import styles from "./button.module.css";
import { useAuthState } from "react-firebase-hooks/auth";

const ButtonBro = () => {
  const counterRef = firebase.database().ref("countBro");
  const [countBro, setCountBro] = useState(0);
  const [user] = useAuthState(auth);

  const date = new Date();
  useEffect(() => {
    counterRef.on("value", (snapshot) => {
      const { bro } = snapshot.val();
      setCountBro(bro);
    });
  }, [counterRef]);

  function sendMessage() {
    const messagesRef = firebase.database().ref("messages");
    const message = {
      name: user.displayName,
      text: "Bro!",
      time: date.toLocaleTimeString("ru", {
        hour: "numeric",
        hour24: true,
        minute: "numeric",
      }),
    };
    messagesRef.push(message);
  }

  const updateCount = () => {
    counterRef.update({ bro: countBro + 1 });
    sendMessage();
  };

  return (
    <Container className={styles.wrapper}>
      <BaseButton onClick={updateCount}>Bro!</BaseButton>
    </Container>
  );
};

export default ButtonBro;
