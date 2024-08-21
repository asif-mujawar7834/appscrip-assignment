import { useAppDispatch, useAppSelector } from "../../redux/Store";
import { idealForOptions } from "@/constants";
import { ChangeEvent } from "react";
import { setIdealFor } from "../../redux/reducers/filterSlice";
import { Accordion } from "./Accordion/Accordion";
import styles from "./Filter.module.css";

export const Filter = () => {
  const { idealFor } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const handleIdealForChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const isOptionPresent = idealFor.indexOf(value);
    isOptionPresent >= 0
      ? dispatch(setIdealFor(idealFor.filter((option) => option !== value)))
      : dispatch(setIdealFor([...idealFor, value]));
  };

  const handleSelectUnselectAll = () => {
    const newList = idealFor.length > 0 ? [] : ["Men", "Women", "Baby & Kids"];
    dispatch(setIdealFor(newList));
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.customizableOption}>
        <input type="checkbox" className={styles.checkbox} />
        <span className={styles.customizableText}>Customizable</span>
      </div>
      <div className={styles.divider}></div>
      <Accordion
        header="Ideal For"
        defaultOpen={true}
        selectedFilterValues={idealFor}
        handleSelectUnselectAll={handleSelectUnselectAll}
        options={idealForOptions}
        handleCheckBoxChange={handleIdealForChange}
      />
      <div className={styles.divider}></div>
      <Accordion
        header="Occasion"
        defaultOpen={false}
        selectedFilterValues={[]}
        handleSelectUnselectAll={() => {}}
        options={[]}
        handleCheckBoxChange={() => {}}
      />
      <div className={styles.divider}></div>
      <Accordion
        header="Work"
        defaultOpen={false}
        selectedFilterValues={[]}
        handleSelectUnselectAll={() => {}}
        options={[]}
        handleCheckBoxChange={() => {}}
      />
      <div className={styles.divider}></div>

      <Accordion
        header="Fabric"
        defaultOpen={false}
        selectedFilterValues={[]}
        handleSelectUnselectAll={() => {}}
        options={[]}
        handleCheckBoxChange={() => {}}
      />
      <div className={styles.divider}></div>
      <Accordion
        header="Segment"
        defaultOpen={false}
        selectedFilterValues={[]}
        handleSelectUnselectAll={() => {}}
        options={[]}
        handleCheckBoxChange={() => {}}
      />
      <div className={styles.divider}></div>
      <Accordion
        header="Suitable For"
        defaultOpen={false}
        selectedFilterValues={[]}
        handleSelectUnselectAll={() => {}}
        options={[]}
        handleCheckBoxChange={() => {}}
      />
      <div className={styles.divider}></div>
      <Accordion
        header="Raw Material"
        defaultOpen={false}
        selectedFilterValues={[]}
        handleSelectUnselectAll={() => {}}
        options={[]}
        handleCheckBoxChange={() => {}}
      />
      <div className={styles.divider}></div>
      <Accordion
        header="Pattern"
        defaultOpen={false}
        selectedFilterValues={[]}
        handleSelectUnselectAll={() => {}}
        options={[]}
        handleCheckBoxChange={() => {}}
      />
      <div className={styles.divider}></div>
    </div>
  );
};
