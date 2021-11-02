import Container from "react-bootstrap/esm/Container";
import styles from "./chat.module.css";
import ButtonExit from "./buttonExit/buttonExit";
import Message from '../components/message/message';
import SubmitBtn from '../components/submitBtn/submitBtn';

const Chat = () => {
  return (
    <Container className={styles.wrapperChat}>
      <ButtonExit />
      <Message/>
      <SubmitBtn />
    </Container>
  );
};

export default Chat;
