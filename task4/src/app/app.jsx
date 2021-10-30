import Container from "react-bootstrap/Container";
import Buttons from "../components/button/buttons";
import Information from "../components/information/information";
import styles from './app.module.css';

const App = () => {
  return (
    <Container className={styles.app}>
      <Information />
      <Buttons />
    </Container>
  );
};

export default App;
