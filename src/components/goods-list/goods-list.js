import React, {useState} from 'react'
import GoodsItem from '../goods-item/goods-item'
import SpinnerLoader from '../spinner-loader/spinner-loader'
import styles from './goods-list.module.css'

const GoodsList = ({goods, addGoodToCart, setFavorites}) => {
  const [search, setSearch] = useState('')

  // записываем искомую строку в стэйт
  const handlerInput = (e) => setSearch(e.target.value)

  // данные для отображения с учетом поиска
  const filteredData = goods.filter(good => {
    return good.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className={styles.goods}>
      <div className={styles.goodsListHeading}>
        <h1>{search ? `Поиск по наименованию: ${search}` : 'Все кроссовки'}</h1>
        <div className={styles.searchWrapper}>
          <input
            onChange={handlerInput}
            value={search}
            className={styles.searchBar}
            placeholder='Поиск...'
            type="text"/>
          {search && <div className={styles.clear} onClick={() => setSearch('')} title='Очистить'></div>}
        </div>
      </div>
      <ul className={styles.goodsList}>
        {goods.length ?
          filteredData.map(product => {
            return <GoodsItem
              key={product.title}
              product={product}
              setFavorites={setFavorites}
              addGoodToCart={addGoodToCart}
            />
          }) : <SpinnerLoader />
        }
      </ul>
    </div>
  )
}

export default GoodsList