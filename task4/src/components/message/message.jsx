// import { useEffect, useState } from "react";
import firebase from "../../config/firebaseConfig";
import { useEffect, useState } from "react";
import styles from "./message.module.css";

const Message = (info) => {
  const [text, setText] = useState("");
  const [user, setUser] = useState("");
  const [time, setTime] = useState("");
  const messagesRef = firebase.database().ref("messages");

  useEffect(() => {
    messagesRef.on("value", (snapshot) => {
      const messagesList = Object.values(snapshot.val());
      const lastMessage = messagesList[messagesList.length - 1];
      setText(lastMessage.text);
      setUser(lastMessage.name);
      setTime(lastMessage.time);
    });
  }, [messagesRef]);

  return (
    <span
      className={styles.text}
    >{`${text} \n Sent by ${user} at ${time}`}</span>
  );
};

export default Message;
