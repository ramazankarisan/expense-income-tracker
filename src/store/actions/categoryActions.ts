import { Category, CategoryDispatch } from "../../types/category";
import api from "../../utils/api";

export const getCategories =  ()=> async (dispatch:CategoryDispatch) => {
  dispatch({type:"GET_CATEGORIES_START"});
  try {
    const response = await api.get<Category[]>("/categories");
    dispatch({type:"GET_CATEGORIES_SUCCESS", payload: response.data})
  } catch (error) {
    dispatch({type:"GET_CATEGORIES_ERROR"})
  }
}