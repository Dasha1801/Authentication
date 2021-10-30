import Container from "react-bootstrap/Container";
// import Buttons from "../components/button/buttons";
import Information from "../components/information/information";
import Networks from '../components/networks/networks';
import styles from './app.module.css';

const App = () => {
  return (
    <Container className={styles.app}>
      <Information />
      <Networks/>
      {/* <Buttons /> */}
    </Container>
  );
};

export default App;
