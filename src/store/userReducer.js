import { createSlice, current } from "@reduxjs/toolkit";
import { setApiRequestToken } from "../configuration";

const initialState = {
  user: null,
  tokens: null,
};

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = action?.payload?.user;
      state.tokens = action?.payload?.tokens;
      setApiRequestToken(action.payload?.tokens)
    },
  },
});
export const { updateUser } = counterSlice.actions;

export default counterSlice.reducer;
