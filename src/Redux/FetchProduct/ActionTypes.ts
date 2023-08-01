import { Product } from "../FetchDetails/Actions";
import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "./Actions";

export interface FetchProductsAction{
    type: typeof FETCH_PRODUCTS_REQUEST;
  }
  export interface FetchProductsSuccessAction{
    type: typeof FETCH_PRODUCTS_SUCCESS
    payload: Product[]
  }
  
export interface FetchProductsFailureAction{
    payload: [];
    type: typeof FETCH_PRODUCTS_FAILURE;
  }
  
  export type FetchProductsActionTypes = FetchProductsAction |FetchProductsSuccessAction |FetchProductsFailureAction
  