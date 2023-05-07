import './app.module.css'
import Header from '../header/header'
import GoodsList from '../goods-list/goods-list'
import Cart from '../cart/cart'
import {useEffect, useState} from 'react'
import {addGoodInCart, getGoodsInCart, getGoodsList, removeGood, setAdded} from '../../services/api'
import {Routes, Route} from 'react-router-dom'
import Favorites from '../favorites/favorites'
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

  // получаем список товаров для главной и корзины с бэка
  useEffect(() => {
    Promise.all([getGoodsList(), getGoodsInCart()])
      .then(([goodsList, goodsInCart]) => {
        setGoods(goodsList)
        setGoodsInCart(goodsInCart)
      })
      .catch(console.log)
  }, [])

  const removeGoodFromCart = (id, title) => {
    // найдем товар который в даный момент удалили из корзины
    const deletedProduct = goods.find(product => product.title === title)

    // если товар найден - изменим атрибут на бэке
    if (deletedProduct) {
      setAdded(deletedProduct.id, false)
        .then((product) => {

          const newState = goods.map(item => {
            if (item.id === product.id) {
              return {...item, added: false}
            }
            return item
          })

          setGoods(newState)
        })
    }

    removeGood(id)
      .then(product => {
        setGoodsInCart(goodsInCart.filter(item => item.id !== product.id))
      })
      .catch(console.log)
  }

  // сумма товаров в корзине
  const getSum = () => goodsInCart.length ? goodsInCart.reduce((acc, item) => (acc + item.price), 0) : null

  return (
    <div className={styles.app}>
      <Header
        sum={getSum()}
        counter={favorites.length}
        setVisible={setVisible}/>
      <Cart
        sum={getSum()}
        goodsInCart={goodsInCart}
        remove={removeGoodFromCart}
        visible={visible}
        setVisible={setVisible} />

        <Routes>
          <Route path='/' element={<GoodsList goods={goods} addGoodToCart={addGoodToCart} setFavorites={favoritesHandler} />} />
          <Route path='/favorites' element={<Favorites favorites={favorites} setFavorites={favoritesHandler} />} />
        </Routes>

    </div>
  )
}

export default App