let defaultState = {
  color: "ff0000",
  userQue: [],
  currentUsers: [],
  username: "",
  password: "",
  token: "",
  priv: "",
  isShowingLogin: false,
  isShowingSignup: false,
  products: [],
  stylists: [
    {
      pic: "",
      firstName: "",
      lastName: "",
      bio: "",
      services: [],
      instagram: "",
      active: false
    }
  ],
  cart: [],
  cartQuantity: []
}

const mainReducer = (state = defaultState, action) => {
    if(action.type === "RANDOM_COLOR"){
        if(action.color === ""){
            return {
                ...state,
                color: "ff0000"
            }
        }
        return {
            ...state,
            color: action.color,
        }
    } else if (action.type === "SET_TOKEN") {
      return {
      ...state,
      token: action.token
    }
  }  else if (action.type === "SET_PRIV") {
    return {
      ...state,
      priv: action.priv
    }
  } else if (action.type === "SET_USER_QUE") {
    return {
      ...state,
      userQue: action.data
    }
  } else if (action.type === "SET_CURRENT_USERS") {
    return {
      ...state,
      currentUsers: action.data
    }
  } else if (action.type === "LOG_OUT") {
    return {
      ...state,
      priv: "",
      token: ""
    }
  } else if (action.type === "TOGGLE_SIGNUP") {
    return {
      ...state,
      isShowingSignup: !state.isShowingSignup
    }
  } else if (action.type === "TOGGLE_LOGIN") {
    return {
      ...state,
      isShowingLogin: !state.isShowingLogin
    }
  } else if (action.type === "SET_PRODUCT_DATA") {
    return {
      ...state,
      products: action.data
    }
  } else if (action.type === "SET_STYLIST_DATA") {
    return {
      ...state,
      stylists: action.data
    }
  } else if (action.type === "SET_CART_DATA") {
    return {
      ...state,
      cart: action.cart
    }
  } else if (action.type === 'ADD_ITEM_TO_CART') {
      if (state.cart.indexOf(action.id) < 0) {
      return {
        ...state,
        cart: [...state.cart, action.id],
        cartQuantity: [...state.cartQuantity, 1]
      }
    } else {
        return {
          ...state
        }
      }
    } else if (action.type === 'SET_CART_ITEM_QUANTITY') {
      let newCartQuantity = [...state.cartQuantity];
      newCartQuantity[action.index] = action.quant;
      return {
        ...state,
        cartQuantity: newCartQuantity
    }
  // } else if (action.type === "SET_CART_QUANTITY") {
  //   return {
  //     ...state,
  //     cartQuantity: action.cartQuantity
  //   }
  } else if (action.type === 'REMOVE_CART_ITEM') {
    let newCartQuantity = [...state.cartQuantity];
    let newCart = [...state.cart];
    newCartQuantity.splice(action.index, 1);
    newCart.splice(action.index, 1);
    return {
      ...state,
      cartQuantity: newCartQuantity,
      cart: newCart
    }
  } else if (action.type === 'COMPLETE_CHECKOUT') {
    return {
      ...state,
      payload: action.payload
    }
  } else {
      return {
        ...state
    }
  }
}

export default mainReducer;
