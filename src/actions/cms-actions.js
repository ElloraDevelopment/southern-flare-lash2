import axios from "axios";

export function setData(data) {
  return {
    type: "SET_DATA",
    data
  }
}

export function loadData() {
  return (dispatch) => {
    return axios.get(`/products`).then((response) => {
      dispatch(setData(response.data.data));
    })
    .catch((err) => {
      throw err;
    });
  }
}

export function addData(data) {
  return (dispatch) => {
    return axios.post(`/products`, data).then((response) => {
      dispatch(loadData());
      console.log("Item added");
    })
    .catch((err) => {
      throw err;
    });
  }
}

  export function editData(id, data) {
    return (dispatch) => {
      return axios.put(`/products/${id}`, data).then((response) => {
        dispatch(loadData());
      })
      .catch((err) => {
        throw err;
      });
    }
  }

  export function deleteData(id) {
    return (dispatch) => {
      return axios.delete(`/product/${id}`).then((response) => {
        dispatch(loadData())
      })
      .catch((err) => {
        throw err;
      });
    }
  }
