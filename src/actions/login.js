import axios from "axios";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import { SET_USER } from "../utils/constants";
import jwtDecode from "jwt-decode";

export const setCurrentUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("jwtToken");
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
};

export const login = (data) => {
  return (dispatch) => {
    return axios.posh("/api/auth", data).then((res) => {
      const token = res.data;
      localStorage.getItem("jwtToken", token);
      setAuthorizationToken(token);
      dispatch(setAuthorizationToken(jwtDecode(token)));
    });
  };
};
