import axios from "axios";

export function loadColor() {
    return(dispatch) => {
        return axios.get("http://www.colr.org/json/color/random").then((response) => {
            // console.log(response.data.new_color);
            dispatch(randomColor(response.data.new_color))
        }).catch((error) => {
            throw error;
        })
    }
}

function randomColor(color){
    return {
        type: "RANDOM_COLOR",
        color
    }
}
