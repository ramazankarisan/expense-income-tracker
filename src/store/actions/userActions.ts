import { LoginForm, User, UserDispatch } from "../../types/user";
import api from "../../utils/api";

export const login =  (creds:LoginForm )=> async (dispatch:UserDispatch) => {
  dispatch({type: "LOGIN_START"});
  try {
    const res = await api().post<User>("/users/login",creds)
    dispatch({type:"LOGIN_SUCCESS",payload:res.data})
    localStorage.setItem("token",res.data.token )
  } catch (error) {
    dispatch({type:"LOGIN_ERROR"})
  }
}

export const isLoggedIn =  ( )=> async (dispatch:UserDispatch) => {
  dispatch({type: "IS_LOGGED_IN_START"});
  try {
    const res = await api().post<User>("/users/is_logged_in")
    dispatch({type:"IS_LOGGED_IN_SUCCESS",payload:res.data})
    
  } catch (error) {
    dispatch({type:"IS_LOGGED_IN_ERROR"})
  }
 
}

export const logout = ()=>(dispatch: UserDispatch) => {
  localStorage.removeItem("token");
  dispatch({type:"LOGOUT"})

}