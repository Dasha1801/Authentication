import React from "react";
import Container from "react-bootstrap/Container";
import ButtonBro from "./buttonBro";
import ButtonSis from "./buttonSis";
import styles from "./button.module.css";


const Buttons = () => {
  return (
    <Container className={styles.buttons}>
      <ButtonSis />
      <ButtonBro />
    </Container>
  );
};

export default Buttons;
