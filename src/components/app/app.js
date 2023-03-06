import './app.module.css'
import Header from '../header/header'
import GoodsList from '../goods-list/goods-list'
import Cart from '../cart/cart'
import {useState} from 'react'
import styles from './app.module.css'

function App() {
  const [visible, setVisible] = useState(false)
  const [goodsInCart, setGoods] = useState([])

  const addGoodToCart = (item) => {
    // добавляем уникальный идентификатор каждому товару в корзине для корректного их удаления
    const id = new Date().getSeconds() + Math.random()
    const prepareData = {...item, id}

    setGoods([...goodsInCart, prepareData])
  }

  const removeGoodFromCart = (id) => {
    const prepareGoodsList = goodsInCart.filter(good => good.id !== id)
    setGoods(prepareGoodsList)
  }

  return (
    <div className={styles.app}>
      <Header setVisible={setVisible}/>
      <GoodsList addGoodToCart={addGoodToCart} />
      <Cart
        remove={removeGoodFromCart}
        goods={goodsInCart}
        visible={visible}
        setVisible={setVisible} />
    </div>
  )
}

export default App