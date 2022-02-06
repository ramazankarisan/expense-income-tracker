import { ThunkDispatch } from "redux-thunk";
import { LoginForm, User, UserDispatch } from "../../types/user";
import api from "../../utils/api";

export const login =  (creds:LoginForm )=> async (dispatch:UserDispatch) => {
  dispatch({type: "LOGIN_START"});
  try {
    const res = await api.post<User>("/users/login",creds)
    dispatch({type:"LOGIN_SUCCESS",payload:res.data})
  } catch (error) {
    dispatch({type:"LOGIN_ERROR"})
  }
}