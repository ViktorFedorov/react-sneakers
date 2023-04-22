const baseUrl = 'https://6404551a80d9c5c7bac57998.mockapi.io'
const checkResponse = (response) => response.ok ? response.json() : Promise.reject('Товары не загружены')

const getGoodsList = () => {
  return fetch(`${baseUrl}/sneakersList`)
    .then(checkResponse)
}

const getGoodsInCart = () => {
  return fetch(`${baseUrl}/goodsInCart`)
    .then(checkResponse)
}

const addGoodInCart = (good) => {
  return fetch(`${baseUrl}/goodsInCart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(good)
  })
    .then(checkResponse)
}

const removeGoodFromCart = (id) => {
  return null
}

export {
  getGoodsList,
  getGoodsInCart,
  addGoodInCart,
  removeGoodFromCart
}