import './app.module.css';
import Header from '../header/header'
import styles from './app.module.css'
import GoodsList from '../goods-list/goods-list'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <GoodsList />
    </div>
  );
}

export default App;
