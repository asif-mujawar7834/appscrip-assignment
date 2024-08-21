import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import productsSlice from "./reducers/productsSlice";
import filterSlice from "./reducers/filterSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    filter: filterSlice,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

export default store;
