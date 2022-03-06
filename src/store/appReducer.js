import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lang: 'en',
};

export const counterSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { updateLanguage } = counterSlice.actions;

export default counterSlice.reducer;
