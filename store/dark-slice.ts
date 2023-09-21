import { createSlice } from '@reduxjs/toolkit';


const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: false, // dark mode initially off
  reducers: {
    toggleDarkMode: (state) => !state
  }
});

//Export section. This export is done a bit differently for typescript.
export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
