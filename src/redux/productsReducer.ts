import {SHOW_PRODUCTS, GET_PRODUCTS} from "./types";

export interface IAction {
  type: string,
  payload?: {}
}

const initialState = {
  products: []
}

export const productsReducer = (state= initialState, action: IAction) => {
  switch (action.type) {
    case SHOW_PRODUCTS:
      return state;
    case GET_PRODUCTS:
      return {...state, products:  action.payload}
    default:
      return state;
  }
}