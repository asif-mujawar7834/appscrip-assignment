import { filterState } from "@/type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: filterState = {
  sortFilter: "RECOMMENDED",
  idealFor: [],
  isFilterOpen: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSortFilter: (state, action) => {
      state.sortFilter = action.payload;
    },
    toggleFilter: (state) => {
      state.isFilterOpen = !state.isFilterOpen;
    },
    setIdealFor: (state, action) => {
      state.idealFor = action.payload;
    },
  },
});

export const { setSortFilter, toggleFilter, setIdealFor } = filterSlice.actions;
export default filterSlice.reducer;
