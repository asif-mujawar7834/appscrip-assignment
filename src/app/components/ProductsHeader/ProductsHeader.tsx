"use client";
import { FaAngleLeft } from "react-icons/fa";
import { DropDown } from "../DropDown/DropDown";
import { headerDropDownFilterOptions } from "@/constants";
import { useAppDispatch, useAppSelector } from "../../redux/Store";
import { setSortFilter, toggleFilter } from "../../redux/reducers/filterSlice";
import { selectSortedProducts } from "../../redux/selectors/productsSelector";
import styles from "./ProductsHeader.module.css";
import { useScreenSize } from "@/app/hooks/useScreenSize";
import { useEffect } from "react";

export const ProductsHeader = () => {
  const { sortFilter, isFilterOpen } = useAppSelector((state) => state.filter);
  const { width } = useScreenSize();

  useEffect(() => {
    if (width < 800) {
      dispatch(toggleFilter(false));
    }
  }, [width]);

  const products = useAppSelector((state) =>
    selectSortedProducts(state, sortFilter)
  );
  const dispatch = useAppDispatch();
  const setSelectedValue = (value: string) => {
    dispatch(setSortFilter(value));
  };

  const toggleSideFilter = () => {
    dispatch(toggleFilter(!isFilterOpen));
  };

  return (
    <div className={styles.container}>
      <div className={styles.mobileFilter}>
        <button className={styles.filterButton} onClick={toggleSideFilter}>
          Filter
        </button>
      </div>
      <div className={styles.desktopFilter}>
        <span className={styles.itemCount}>{products?.length} Items</span>
        <button
          className={styles.toggleFilterButton}
          onClick={toggleSideFilter}
        >
          <FaAngleLeft
            className={`${isFilterOpen ? styles.toggleFilterButtonIcon : ""}`}
          />
          <span className={styles.toggleFilterText}>
            {isFilterOpen ? "Hide Filter" : "Show Filter"}
          </span>
        </button>
      </div>
      <DropDown
        options={headerDropDownFilterOptions}
        selectedValue={sortFilter}
        setSelectedValue={setSelectedValue}
      />
    </div>
  );
};
