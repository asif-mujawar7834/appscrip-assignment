import { ReactNode } from "react";

interface headerFilterOptionType {
  id: number;
  name: string;
  value: string;
}

interface dropDownPropsType {
  options: headerFilterOptionType[];
  selectedValue: string;
  setSelectedValue: Dispatch<SetStateAction<string>>;
}

interface productType {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl: StaticImageData;
  createdAt: string;
  ratings: number;
  idealFor: string[];
  isLiked: boolean;
}

interface initialStateType {
  products: productType[];
}

interface reduxProviderProps {
  children: ReactNode;
}

interface filterState {
  sortFilter: string;
  isFilterOpen: boolean;
  idealFor: string[];
}

interface advanceFilterDropDowntype {
  id: number;
  name: string;
}

interface AccordionPropsType {
  header: string;
  defaultOpen?: boolean;
  selectedFilterValues: string[];
  handleSelectUnselectAll: () => void;
  options: advanceFilterDropDowntype[];
  handleCheckBoxChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}
