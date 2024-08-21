"use client";

import { selectSortedProducts } from "@/app/redux/selectors/productsSelector";
import { useAppSelector } from "@/app/redux/Store";
import { ProductCard } from "../ProductCard/ProductCard";
import styles from "./ProductGrid.module.css";

export const ProductGrid = () => {
  const { sortFilter } = useAppSelector((state) => state.filter);
  const products = useAppSelector((state) =>
    selectSortedProducts(state, sortFilter)
  );

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};
