import { createSlice } from "@reduxjs/toolkit";

export const storeUsernameSlice = createSlice({
  name: "storeUsername",
  initialState: {
    username: "",
  },

  reducers: {
    storeUsername: (state, action) => {
      state.username = action.payload;
    },

  },
});

export const { storeUsername } = storeUsernameSlice.actions;
export const selectUsername = (state) => state.storeUsername.username; 
export default storeUsernameSlice.reducer;
