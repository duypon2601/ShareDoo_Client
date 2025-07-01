import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";  
import createProductReducer from "./createProductSlice";
import productCreateReducer from "./productCreateSlice";
import cartReducer from "./cartSlice";


export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  createProduct: createProductReducer,
  productCreate: productCreateReducer,
});
