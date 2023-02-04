import './app.module.css';
import Header from '../header/header'
import styles from './app.module.css'
import GoodsList from '../goods-list/goods-list'
import Cart from '../cart/cart'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <GoodsList />
      <Cart />
    </div>
  );
}

export default App;
