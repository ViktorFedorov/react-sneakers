import './app.module.css'
import Header from '../header/header'
import GoodsList from '../goods-list/goods-list'
import Cart from '../cart/cart'
import {useState} from 'react'
import styles from './app.module.css'

function App() {
  const [visible, setVisible] = useState(false)
  const [goodsInCart, setGoods] = useState([])

  const test = (item) => {
    setGoods([...goodsInCart, item])
  }

  return (
    <div className={styles.app}>
      <Header setVisible={setVisible}/>
      <GoodsList addGoodToCart={test} />
      <Cart
        goods={goodsInCart}
        visible={visible}
        setVisible={setVisible} />
    </div>
  )
}

export default App