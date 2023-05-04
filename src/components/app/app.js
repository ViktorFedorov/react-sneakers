import './app.module.css'
import Header from '../header/header'
import GoodsList from '../goods-list/goods-list'
import Cart from '../cart/cart'
import {useEffect, useState} from 'react'
import {addGoodInCart, getGoodsInCart, getGoodsList, removeGood, setAdded} from '../../services/api'
import styles from './app.module.css'

function App() {
  // видимость корзины
  const [visible, setVisible] = useState(false)

  // список товаров
  const [goods, setGoods] = useState([])

  // товары в корзине
  const [goodsInCart, setGoodsInCart] = useState([])

  // избранные товары
  const [favorites, setFavorites] = useState([])

  const favoritesHandler = (product) => {

    // если товар есть в избранном - повторный клик удалит его
    if (favorites.find(item => item.title === product.title)) {
      return setFavorites(favorites.filter(item => item.title !== product.title))
    }

    setFavorites([...favorites, product])
  }

  console.log(favorites)

  // получаем список товаров с бэка при первом рэндере
  useEffect(() => {
    getGoodsList()
      .then(setGoods)
      .catch(console.log)
  }, [visible])

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

    // проверим, есть ли в корзине данный товар
    if (goodsInCart.some(el => el.title === product.title)) {

      // если товар уже есть в корзине, найдем его id по заголовку
      const {id} = goodsInCart.find(item => item.title === product.title)

      // и удалим его нахрен
      return removeGoodFromCart(id)
    }

    addGoodInCart(product)
      .then(item => {
        setGoodsInCart([...goodsInCart, item])
      })
      .catch(console.log)
  }

  const removeGoodFromCart = (id, title) => {

    // найдем товар который удалили из корзины
    const deletedProduct = goods.find(product => product.title === title)

    // если товар найден - изменим атрибут на бэке
    if (deletedProduct) {
      setAdded(deletedProduct.id, false)
        .then(console.log)
    }

    /// ????? надо как то передать данные в карточку для перерендера компонента продукта ?????


    removeGood(id)
      .then(product => {
        setGoodsInCart(goodsInCart.filter(item => item.id !== product.id))
      })
      .catch(console.log)
  }

  return (
    <div className={styles.app}>
      <Header setVisible={setVisible}/>
      <GoodsList
        goods={goods}
        addGoodToCart={addGoodToCart}
        setFavorites={favoritesHandler}/>
      <Cart
        goodsInCart={goodsInCart}
        remove={removeGoodFromCart}
        visible={visible}
        setVisible={setVisible} />
    </div>
  )
}

export default App