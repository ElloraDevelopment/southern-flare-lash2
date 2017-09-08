let defaultState = {
  color: "ff0000",
  userQue: [],
  currentUsers: [],
  username: "",
  password: "",
  token: "",
  priv: "",
  isShowingLogin: false,
  isShowingSignup: false
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
  } else {
      return {
        ...state
    }
  }
}

export default mainReducer;
