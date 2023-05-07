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

const addGoodInCart = (product) => {
  return fetch(`${baseUrl}/goodsInCart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  })
    .then(checkResponse)
}

// добавить / удалить атрибут
const setAdded = (id, added) => {
  return fetch(`${baseUrl}/sneakersList/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({added})
  })
    .then(checkResponse)
}

const setLiked = (id, favorite) => {
  return fetch(`${baseUrl}/sneakersList/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({favorite})
  })
    .then(checkResponse)
}

const removeGood = (id) => {
  return fetch(`${baseUrl}/goodsInCart/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id})
  })
    .then(checkResponse)
}

export {
  getGoodsList,
  getGoodsInCart,
  addGoodInCart,
  setAdded,
  setLiked,
  removeGood
}