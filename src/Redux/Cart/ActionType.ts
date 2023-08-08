import { Product } from "../../Domain/product";
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./Actions";

export interface AddToCartAction {
    type: typeof ADD_TO_CART;
  
  }
  
  export interface RemoveFromCartAction {
    type: typeof REMOVE_FROM_CART;
    payload: number;
  }
  
  export interface ClearCartAction {
    type: typeof CLEAR_CART;
   
  }
  
 
  export type CartActionTypes =
    | AddToCartAction 
    | RemoveFromCartAction
    | ClearCartAction;


  