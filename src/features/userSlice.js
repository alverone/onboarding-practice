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
    setUser: (state, action) => {
      state.userData = action.payload;
    },
    updateUserPost: (state, action) => {
      state.userData = action.payload.user;
    },
    updateUserSuccess: (state, action) => {
      const userData = action.payload;
      let userIndex = 0;

      state.users.filter((user, index) => {
        if (user.id === userData.id) {
          userIndex = index;
          return true;
        }
        return false;
      });

      let newUsers = state.users;
      newUsers[userIndex] = userData;

      state.users = newUsers;
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
      const { errors, handler } = action.payload;
      handler(errors);
      state.error = errors;
    },
  },
});

export const {
  removeUser,
  updateUserPost,
  updateUserSuccess,
  setUser,
  postUserFetch,
  postUserSuccess,
  postUserError,
} = userSlice.actions;
export default userSlice.reducer;
