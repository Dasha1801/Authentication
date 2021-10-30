import styles from "./baseButton.module.css";
import React from "react";
import Button from "react-bootstrap/Button";

export function BaseButton(props) {
  return (
    <Button
      {...{
        ...props,
        className: `${props.className || ""} ${styles.baseButton}`,
      }}
    >
      {props.children}
    </Button>
  );
}
