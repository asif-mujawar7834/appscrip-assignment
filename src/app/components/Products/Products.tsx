"use client";
import { useAppSelector } from "../../redux/Store";
import { Filter } from "../Filter/Filter";
import { ProductGrid } from "../ProductGrid/ProductGrid";
import { ProductsHeader } from "../ProductsHeader/ProductsHeader";
import styles from "./Product.module.css";

export const Products = () => {
  const { isFilterOpen } = useAppSelector((state) => state.filter);
  return (
    <div className={styles.container}>
      <ProductsHeader />
      <div className={styles.content}>
        {isFilterOpen && <Filter />}
        <ProductGrid />
      </div>
    </div>
  );
};
