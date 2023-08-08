

import { combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from './actions';
import { Product } from '../../Domain/product';
import { CartActionTypes } from './ActionType';

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const cartReducer = (state = initialState, action: CartActionTypes ) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case CLEAR_CART:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

const Reducer = combineReducers({
  cart: cartReducer,
});

export default Reducer;
