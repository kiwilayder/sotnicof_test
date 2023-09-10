import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
   name: "filters",
   initialState: {
      filter: "",
      value: null,
   },
   reducers: {
      changeFilter(state, action) {
         state.filter = action.payload.filterName;
         state.value = action.payload.value;
      },
   },
});

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
