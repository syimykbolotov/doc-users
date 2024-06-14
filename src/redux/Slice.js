import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "./Action";

const initialState = {
  user: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
});

export default userSlice.reducer;
