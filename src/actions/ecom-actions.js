export function addItemToCart(id) {
  return {
    type: 'ADD_ITEM_TO_CART',
    id
  }
}

export function setCartData(cart, quant) {
  return {
    type: 'SET_CART_DATA',
    cart,
    quant
  }
}

export function setCartItemQuantity(index, quant) {
  return {
    type: 'SET_CART_ITEM_QUANTITY',
    index,
    quant
  }
}

export function setCartQuantity(cartQuantity) {
  return {
    type: 'SET_CART_QUANTITY',
    cartQuantity
  }
}

export function removeCartItem(index) {
  return {
    type: 'REMOVE_CART_ITEM',
    index
  }
}

export function cartTotal(total) {
  return {
    type: 'CART_TOTAL',
    total
  }
}
