import Container from "react-bootstrap/Container";
import Buttons from "../components/button/buttons";
import Information from "../components/information/information";
import Networks from "../components/networks/networks";
import styles from "./app.module.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Container className={styles.app}>
        <Switch>
          <Route exact path="/">
            <Information />
            <Networks />
          </Route>
          <Route exact path="/message">
            <Buttons />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
