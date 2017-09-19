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
  cart: []
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
      cart: action.data
    }
  } else {
      return {
        ...state
    }
  }
}

export default mainReducer;
