import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVisible: false,
};

const visibilitySlice = createSlice({
  name: 'visibility',
  initialState,
  reducers: {
    showComponent: (state, action) => {
      state.isVisible = true;
    },
    hideComponent: (state, action) => {
      state.isVisible = false;
    },
  },
});

export const { showComponent, hideComponent } = visibilitySlice.actions;

export default visibilitySlice.reducer;