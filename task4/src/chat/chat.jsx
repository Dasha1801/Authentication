import Container from "react-bootstrap/esm/Container";
import Buttons from "../components/button/buttons";
import styles from "./chat.module.css";
import ButtonExit from "./buttonExit/buttonExit";
import Message from '../components/message/message';

const Chat = () => {
  return (
    <Container className={styles.wrapperChat}>
      <ButtonExit />
      <Message/>
      <Buttons />
    </Container>
  );
};

export default Chat;
