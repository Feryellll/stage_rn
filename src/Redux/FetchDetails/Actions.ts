// Actions.ts

import axios from "axios";
import { Dispatch } from "redux";
import { Product } from "../../Domain/product";

export const FETCH_PRODUCTS_DETAILS_REQUEST = "FETCH_PRODUCTS_DETAILS_REQUEST";
export const FETCH_PRODUCTS_DETAILS_SUCCESS = "FETCH_PRODUCTS_DETAILS_SUCCESS";
export const FETCH_PRODUCTS_DETAILS_FAILURE = "FETCH_PRODUCTS_DETAILS_FAILURE";



export const fetchDetails = (productId: number) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchDetailsRequest());
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        const product = response.data;
        dispatch(fetchDetailsSuccess(product));
      })
      .catch((error) => {
        dispatch(fetchDetailsFailure(error.message));
      });
  };
};

const fetchDetailsRequest = () => ({
  type: FETCH_PRODUCTS_DETAILS_REQUEST,
});

const fetchDetailsSuccess = (product: Product) => ({
  type: FETCH_PRODUCTS_DETAILS_SUCCESS,
  payload: product,
});

const fetchDetailsFailure = (error: string) => ({
  type: FETCH_PRODUCTS_DETAILS_FAILURE,
  payload: error, 
});
