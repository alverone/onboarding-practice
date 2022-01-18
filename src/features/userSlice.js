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
      const id = action.payload;
      let userIndex = 0;

      state.users.filter((user, index) => {
        if (id === user.id) {
          userIndex = index;
          return true;
        }
        return false;
      });

      let newUsers = state.users;
      newUsers.splice(userIndex, 1);
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

export const { removeUser, postUserFetch, postUserSuccess, postUserError } =
  userSlice.actions;
export default userSlice.reducer;
