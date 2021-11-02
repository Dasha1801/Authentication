import React from "react";
import Container from "react-bootstrap/Container";
import ButtonBro from "./buttons/buttonBro";
import ButtonSis from "./buttons/buttonSis";
import styles from "./buttons.module.css";


const SubmitBtn = () => {
  return (
    <Container className={styles.buttons}>
      <ButtonSis />
      <ButtonBro />
    </Container>
  );
};

export default SubmitBtn;
