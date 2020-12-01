import axios from "axios";

export const registerRequest = (user) => {
  return (dispatch) => {
    return axios.post("/api/user", user);
  };
};
export const isUserExists = (username) => {
  return (dispatch) => {
    return axios.get(`/api/user/${username}`, username);
  };
};
