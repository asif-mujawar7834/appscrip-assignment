"use client";
import { dropDownPropsType } from "@/type";
import { FC, useState } from "react";
import { FaAngleDown, FaCheck } from "react-icons/fa";
import styles from "./DropDown.module.css";

export const DropDown: FC<dropDownPropsType> = ({
  options,
  selectedValue,
  setSelectedValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.button}>
        <span className={styles.selectedValue}>{selectedValue}</span>
        <span className={`${styles.icon} ${isOpen && styles.iconOpen}`}>
          <FaAngleDown />
        </span>
      </button>
      {isOpen && (
        <div className={styles.dropdown}>
          {options.map((option) => (
            <span
              key={option.id}
              className={`${styles.option} ${
                selectedValue === option.name
                  ? styles.optionSelected
                  : styles.optionNormal
              }`}
              onClick={() => {
                setSelectedValue(option.name);
                setIsOpen(false);
              }}
            >
              {selectedValue === option.name && <FaCheck />}
              {option.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
