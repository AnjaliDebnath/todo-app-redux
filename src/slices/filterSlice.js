import { createSlice } from "@reduxjs/toolkit";
const initialState={
    status: 'All',
    color:[]
    
};

const filterSlice=createSlice({
    name: "filters",
    initialState,
    reducers: {
      setStatusFilter: (state, action) => {
        state.status = action.payload; // Update the status filter
      },
    },
    setColorFilter: (state, action) => {
        const color = action.payload;
        if (state.colors.includes(color)) {
          state.colors = state.colors.filter((c) => c !== color); // Remove color if already selected
        } else {
          state.colors.push(color); // Add color if not already selected
        }
      },
    

})

export const {setStatusFilter, setColorFilter} = filterSlice.actions;
export default filterSlice.reducer;
