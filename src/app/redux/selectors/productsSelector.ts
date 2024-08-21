import { filterState, initialStateType } from "@/type";
import { Store } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const selectProductsSlice = (state: { products: initialStateType }) =>
  state.products;

const filter = (state: { filter: filterState }) => state.filter;

const selectAllProducts = createSelector(
  [selectProductsSlice],
  (productsState) => productsState.products
);

export const selectSortedProducts = createSelector(
  [selectAllProducts, filter, (_: Store, sortOption: string) => sortOption],
  (products, filter, sortOption) => {
    const { idealFor } = filter;

    const filteredProducts = products.filter((product) => {
      if (idealFor?.length > 0) {
        const matches = product.idealFor.some((value) =>
          idealFor.includes(value)
        );
        if (!matches) {
          return false;
        }
      }
      return true;
    });

    return filteredProducts.sort((a, b) => {
      switch (sortOption) {
        case "NEWEST FIRST":
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );

        case "PRICE : LOW TO HIGH":
          return a.price - b.price;

        case "HIGH TO LOW":
          return b.price - a.price;

        case "POPULAR":
          return b.ratings - a.ratings;

        default:
          return 0;
      }
    });
  }
);
