

import { Product } from "../../Domain/product";
import { FetchDetailsActionTypes } from "./ActionType";
import {
    FETCH_PRODUCTS_DETAILS_REQUEST,
    FETCH_PRODUCTS_DETAILS_SUCCESS,
    FETCH_PRODUCTS_DETAILS_FAILURE,
  } from "./Actions";
  
 
  export interface ProductState {
    loading: boolean;
    product: Product | null;
    error: string;
  }
  
  const initialState: ProductState = {
    loading: false,
    product: null,
    error: "",
  };
  
  const productReducer = (
    state = initialState,
    action: FetchDetailsActionTypes
  ): ProductState => {
    switch (action.type) {
      case FETCH_PRODUCTS_DETAILS_REQUEST:
        return {
          ...state,
          loading: true,
          error: "",
        };
      case FETCH_PRODUCTS_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          product: action.payload,
          error: "",
        };
      case FETCH_PRODUCTS_DETAILS_FAILURE:
        return {
          ...state,
          loading: false,
          product: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default productReducer;
  