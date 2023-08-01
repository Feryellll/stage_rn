import { Product } from "../../Domain/product";
import { FETCH_PRODUCTS_DETAILS_REQUEST, FETCH_PRODUCTS_DETAILS_SUCCESS, FETCH_PRODUCTS_DETAILS_FAILURE } from "./Actions";

export interface FetchDetailsRequestAction {
    type: typeof FETCH_PRODUCTS_DETAILS_REQUEST;
  
  }
  
  export interface FetchDetailsSuccessAction {
    type: typeof FETCH_PRODUCTS_DETAILS_SUCCESS;
    payload: Product;
  }
  
  export interface FetchDetailsFailureAction {
    type: typeof FETCH_PRODUCTS_DETAILS_FAILURE;
    payload: string;
  }
  
 
  export type FetchDetailsActionTypes =
    | FetchDetailsRequestAction
    | FetchDetailsSuccessAction
    | FetchDetailsFailureAction;

export { FETCH_PRODUCTS_DETAILS_FAILURE };
  