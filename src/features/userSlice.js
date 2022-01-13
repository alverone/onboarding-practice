import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  error: "",
  users: [],
  modal: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeUser: (state, action) => {
      const index = action.payload;
      state.users.splice(index, 1);
    },
    toggleModal: (state, action) => {
      state.modal = action.payload;
    },
    postUserFetch: (state, action) => {
      state.userData = action.payload;
    },
    postUserSuccess: (state) => {
      state.error = "";
      state.users.push(state.userData);
      state.userData = {};
    },
    postUserError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  toggleModal,
  removeUser,
  postUserFetch,
  postUserSuccess,
  postUserError,
} = userSlice.actions;
export default userSlice.reducer;
