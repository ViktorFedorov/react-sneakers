import './app.module.css'
import Header from '../header/header'
import GoodsList from '../goods-list/goods-list'
import Cart from '../cart/cart'
import {useState} from 'react'
import styles from './app.module.css'

function App() {
  const [visible, setVisible] = useState(false)

  return (
    <div className={styles.app}>
      <Header setVisible={setVisible}/>
      <GoodsList />
      <Cart
        visible={visible}
        setVisible={setVisible} />
    </div>
  )
}

export default App