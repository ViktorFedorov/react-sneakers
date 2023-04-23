import './app.module.css'
import Header from '../header/header'
import GoodsList from '../goods-list/goods-list'
import Cart from '../cart/cart'
import {useEffect, useState} from 'react'
import {addGoodInCart, getGoodsInCart, removeGood} from '../../services/api'
import styles from './app.module.css'

function App() {
  // видимость корзины
  const [visible, setVisible] = useState(false)

  // товары в корзине
  const [goodsInCart, setGoodsInCart] = useState([])

  // получаем с бэка список товаров в корзине
  useEffect(() => {
    getGoodsInCart()
      .then(setGoodsInCart)
      .catch(console.log)
  }, [])

  /*
    отправляем добавленный в корзину товар на бэк
    в ответ приходит объект с товаром, который добавляем в стэйт для перерендера корзины
  */
  const addGoodToCart = (product) => {
    addGoodInCart(product)
      .then(item => {
        setGoodsInCart([...goodsInCart, item])
      })
      .catch(console.log)
  }

  const removeGoodFromCart = (id) => {
    removeGood(id)
      .then(product => {
        setGoodsInCart(goodsInCart.filter(item => item.id !== product.id))
      })
      .catch(console.log)
  }

  return (
    <div className={styles.app}>
      <Header setVisible={setVisible}/>
      <GoodsList addGoodToCart={addGoodToCart}/>
      <Cart
        goodsInCart={goodsInCart}
        remove={removeGoodFromCart}
        visible={visible}
        setVisible={setVisible} />
    </div>
  )
}

export default App