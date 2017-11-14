import axios from "axios";

//Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    if (401 === error.response.data.status) {
      //because of error, changed error.response.status to error.response.data.status - change back if error not fixed
    alert("You've been logged out, please log back in to continue session");
    localStorage.removeItem("token");
    localStorage.removeItem("priv");
    //Promise.reject runs a catch((err))
    return Promise.reject(error);
   } else {
       return Promise.reject(error);
   }
  });

export function clear() {
  return (dispatch) => {
    dispatch(setToken(""));
    dispatch(setPriv(""));
  }
}

export function login (username, password) {
  return (dispatch) => {
    return axios.post("http://localhost:8080/auth/login", {username, password}).then((response) => {
      dispatch(setToken(response.data.token));
      dispatch(setPriv(response.data.priv));
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("priv", response.data.priv);
    })
    .catch((err) => {
      alert("username or password are not correct...")
      throw err;
    });
  }
}

export function signup(username, password) {
  return (dispatch) => {
    return axios.post("http://localhost:8080/auth/signup", {username, password}).then((response) => {
      alert("account created");
    })
    .catch((err) => {
      alert("username taken, please try again...")
      throw err;
    });
  }
}

export function loadUserQue(token) {
  return (dispatch) => {
    return axios.get("http://localhost:8080/auth/userque", {headers: {Authorization: `Bearer ${token}`}}).then((response) => {
      dispatch(setUserQue(response.data.data));
      // dispatch(loadUserQue(token));
    })
    .catch((err) => {
      dispatch(clear());
      throw err;
    });
  }
}

export function loadUsers(token) {
  return (dispatch) => {
    return axios.get("http://localhost:8080/auth/user", {headers: {Authorization: `Bearer ${token}`}}).then((response) => {
      dispatch(setCurrentUsers(response.data.data));
    })
    .catch((err) => {
      dispatch(clear());
      throw err;
    });
  }
}


export function changeStatus(id, priv, token) {
  return (dispatch) => {
    //priv value is what is being updated
    return axios.put(`http://localhost:8080/auth/user/${id}`, {priv}, {headers: {Authorization: `Bearer ${token}`}}).then((response) => {
      alert(`${id} status changed to: ${priv}`)
      dispatch(loadUsers(token));
    })
    .catch((err) => {
      dispatch(clear());
      throw err;
    });
  }
}

export function addUser(username, priv, token) {
  return (dispatch) => {
    return axios.post("http://localhost:8080/auth/userque", {username, priv}, {headers: {Authorization: `Bearer ${token}`}}).then((response) => {
      alert(`${username} added with authorization level: ${priv}`)
      dispatch(loadUserQue(token));
      dispatch(loadUsers(token));
    })
    .catch((err) => {
      dispatch(clear());
      throw err;
    });
  }
}

export function deleteUserQue(username, id, token) {
  return (dispatch) => {
    return axios.delete(`http://localhost:8080/auth/userque/${id}`, {headers: {Authorization: `Bearer ${token}`}}).then((response) => {
      alert(`${username} has been deleted`)
      dispatch(loadUserQue(token));
    })
    .catch((err) => {
      dispatch(clear());
      throw err;
    });
  }
}

export function deleteUserList(username, id, token) {
  return (dispatch) => {
    return axios.delete(`http://localhost:8080/auth/user/${id}`, {headers: {Authorization: `Bearer ${token}`}}).then((response) => {
      alert(`${username} has been deleted`)
      dispatch(loadUsers(token));
    })
    .catch((err) => {
      dispatch(clear());
      throw err;
    });
  }
}

export function setTokenAndPrivLocalStorage(token, priv) {
  return (dispatch) => {
    dispatch(setToken(token));
    dispatch(setPriv(priv));
    dispatch(loadUsers(token));
    dispatch(loadUserQue(token));
  }
}

export function setCurrentUsers(data) {
  return {
    type: "SET_CURRENT_USERS",
    data
  }
}

export function setUserQue(data) {
  return {
    type: "SET_USER_QUE",
    data
  }
}


export function setToken(token) {
  return {
    type: "SET_TOKEN",
    token
  }
}

export function setPriv(priv) {
  return {
    type: "SET_PRIV",
    priv
  }
}

export function logout() {
  alert("You have logged out.  Have a nice day!");
  localStorage.removeItem("token");
  localStorage.removeItem("priv");
  return {
    type: "LOG_OUT"
  }
}
