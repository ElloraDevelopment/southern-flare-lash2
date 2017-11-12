import axios from "axios";

//NEED TO REMOVE http://localhost:8080/ TO GO LIVE

export function setProductData(data) {
  return {
    type: "SET_PRODUCT_DATA",
    data
  }
}

export function setStylistData(data) {
  return {
    type: "SET_STYLIST_DATA",
    data
  }
}

// export function setCartData(data) {
//   return {
//     type: "SET_CART_DATA",
//     data
//   }
// }

//NEED TO REMOVE http://localhost:8080/ TO GO LIVE

// export function loadCartData() {
//   return (dispatch) => {
//     return axios.get(`http://localhost:8080/cart`).then((response) => {
//       dispatch(setCartData(response.data.data));
//     })
//     .catch((err) => {
//       throw err;
//     });
//   }
// }
//
// export function addCartData(item) {
//   return(dispatch) => {
//     return axios.post(`http://localhost:8080/cart/`, item).then((response) => {
//       dispatch(loadCartData());
//     })
//     .catch((err) => {
//       throw err;
//     });
//   }
// }

export function loadProductData() {
  return (dispatch) => {
    return axios.get(`/products`).then((response) => {
      dispatch(setProductData(response.data.data));
    })
    .catch((err) => {
      throw err;
    });
  }
}

export function addProductData(data) {
  return (dispatch) => {
    return axios.post('/products', data).then((response) => {
      dispatch(loadProductData());
      console.log("Item added");
    })
    .catch((err) => {
      throw err;
    });
  }
}

  export function editProductData(id, data) {
    return (dispatch) => {
      return axios.put(`/products/${id}`, data).then((response) => {
        dispatch(loadProductData());
        alert("product updated");
      })
      .catch((err) => {
        throw err;
      });
    }
  }

  export function deleteProductData(id) {
    console.log("called");
    return (dispatch) => {
      return axios.delete(`/products/${id}`).then((response) => {
        dispatch(loadProductData());
      })
      .catch((err) => {
        throw err;
      });
    }
  }

  export function loadStylistData() {
    return (dispatch) => {
      return axios.get(`/stylists`).then((response) => {
        dispatch(setStylistData(response.data.data));
      })
      .catch((err) => {
        throw err;
      });
    }
  }

  export function addStylistData(data) {
    return (dispatch) => {
      return axios.post(`/stylists`, data).then((response) => {
        dispatch(loadStylistData());
      })
      .catch((err) => {
        throw err;
      });
    }
  }

    export function editStylistData(id, data) {
      return (dispatch) => {
        return axios.put(`/stylists/${id}`, data).then((response) => {
          dispatch(loadStylistData());
          alert("stylist updated");
        })
        .catch((err) => {
          throw err;
        });
      }
    }

    export function deleteStylistData(id) {
      return (dispatch) => {
        return axios.delete(`/stylists/${id}`).then((response) => {
          dispatch(loadStylistData());
        })
        .catch((err) => {
          throw err;
        });
      }
    }
