import firebase from "../../config/firebaseConfig";
import { useEffect, useState } from "react";
import styles from "./message.module.css";

const Message = (info) => {
  const [text, setText] = useState("");
  const [user, setUser] = useState("");
  const [time, setTime] = useState("");
  const messagesRef = firebase.database().ref("messages");

  const getLastMessage = function () {
    messagesRef.on("value", (snapshot) => {
      const messagesList = Object.values(snapshot.val());
      const lastMessage = messagesList[messagesList.length - 1];
      setText(lastMessage.text);
      setUser(lastMessage.name);
      setTime(lastMessage.time);
    });
  };

  useEffect(() => {
    getLastMessage();
  });

  return (
    <div className={styles.text}>
      <span className={styles.message}>{`${text}`}</span>
      {`Sent by ${user} at ${time}`}
    </div>
  );
};

export default Message;
