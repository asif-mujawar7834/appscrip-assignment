import { AccordionPropsType } from "@/type";
import { FC, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import styles from "./Accordion.module.css";

export const Accordion: FC<AccordionPropsType> = ({
  header,
  defaultOpen,
  selectedFilterValues,
  handleSelectUnselectAll,
  options,
  handleCheckBoxChange,
  disabled,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen ? defaultOpen : false);
  return (
    <div className={styles.container}>
      <button
        className={styles.headerButton}
        onClick={() => setIsOpen(!isOpen)}
        disabled={disabled}
      >
        <span className={styles.headerText}>{header}</span>
        <span className={`${styles.icon} ${isOpen ? styles.rotate : ""}`}>
          <FaAngleDown />
        </span>
      </button>
      <span className={styles.selectedValues}>
        {selectedFilterValues.length > 0
          ? selectedFilterValues.join(", ")
          : "All"}
      </span>
      {isOpen && (
        <>
          {options.length > 0 ? (
            <>
              <button
                className={styles.selectButton}
                onClick={handleSelectUnselectAll}
              >
                {selectedFilterValues.length > 0
                  ? "Unselect All"
                  : "Select All"}
              </button>
              <div className={styles.optionsContainer}>
                {options.map((option) => (
                  <div className={styles.option} key={option.id}>
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      checked={selectedFilterValues.includes(option.name)}
                      value={option.name}
                      onChange={handleCheckBoxChange}
                    />
                    <span>{option.name}</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className={styles.noOptions}>
              No other options available for this filter
            </p>
          )}
        </>
      )}
    </div>
  );
};
