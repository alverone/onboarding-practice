import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  error: "",
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeUser: (state, action) => {
      const index = action.payload;
      state.users.splice(index, 1);
    },
    postUserFetch: (state, action) => {
      state.userData = action.payload.user;
    },
    postUserSuccess: (state) => {
      state.error = "";
      state.users.push(state.userData);
      state.userData = {};
    },
    postUserError: (state, action) => {
      console.log(action.payload);
      state.error = action.payload;
    },
  },
});

export const { removeUser, postUserFetch, postUserSuccess, postUserError } =
  userSlice.actions;
export default userSlice.reducer;