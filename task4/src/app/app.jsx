
import ButtonBro from '../components/button/buttonBro';
import ButtonSis from '../components/button/buttonSis';
import styles from './app.module.css';

const  App = () =>  {
  return (
    <div className={styles.app}>
      <ButtonSis/>
      <ButtonBro/>
    </div>
  );
}

export default App;
