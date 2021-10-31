import Container from "react-bootstrap/Container";
import styles from "./app.module.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "../appRouter/appRouter";

const App = () => {
  return (
    <BrowserRouter>
      <Container className={styles.app}>
        <AppRouter />
      </Container>
    </BrowserRouter>
  );
};

export default App;
