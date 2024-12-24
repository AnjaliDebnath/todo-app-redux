import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "All",
  colors: [], // Fixed the typo: should be "colors" not "color"
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setStatusFilter: (state, action) => {
      state.status = action.payload; 
    },
    setColorFilter: (state, action) => {
      const color = action.payload;
      if (state.colors.includes(color)) {
        state.colors = state.colors.filter((c) => c !== color); 
      } else {
        state.colors.push(color); 
      }
    },
  },
});

export const { setStatusFilter, setColorFilter } = filterSlice.actions;
export default filterSlice.reducer;
