import { configureStore } from "@reduxjs/toolkit";
import SliderReducer from "../features/slice/SliderSlices";
import productReducer from "../features/slice/ProductsSlice";
import CartReducer from "../features/slice/CartSlice";
import AuthReducer from "../features/slice/AuthSlice";

export const store = configureStore({
  reducer: {
    slider: SliderReducer,
    products: productReducer,
    cart: CartReducer,
    user: AuthReducer,
  },
});
