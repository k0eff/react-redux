import axios from "axios";

export const API_REQUEST_SUCCESS = "users:updateUser";
export const API_REQUEST_ERROR = "users:showError";

export function updateUser(newUser) {
  return {
    type: API_REQUEST_SUCCESS,
    payload: {
      user: newUser
    }
  };
}

export function showError() {
  return {
    type: API_REQUEST_ERROR,
    payload: { user: "ERROR!!" }
  };
}

export function onRequest() {
  return {
    type: API_REQUEST_REQUEST
  };
}

export function apiRequest() {
  dispatch(requestMade());

  return dispatch => {
    axios
      .get("http://google.com")
      .then(data => {
        console.log("SUCCESS", data);
        dispatch(updateUser(data.newUser)); // INVALID CODE - just to show how it works
      })
      .catch(err => {
        console.log("ERROR");

        dispatch(showError());
      });
  };
}
