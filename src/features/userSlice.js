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
    //remove user by either index or id
    removeUser: (state, action) => {
      const index = action.payload;
      state.users.splice(index, 1);
    },
    //after validating user data, update user by id
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
    //validate user on server
    validateUserFetch: (state, action) => {
      state.userData = action.payload.user;
    },
    //add user once data has been validated
    validateUserSuccess: (state) => {
      state.error = "";
      state.users.push(state.userData);
      state.userData = {};
    },
    //handle server errors
    validateUserError: (state, action) => {
      const { errors, handler } = action.payload;
      handler(errors);
      state.error = errors;
    },
  },
});

export const {
  removeUser,
  updateUserSuccess,
  validateUserFetch,
  validateUserSuccess,
  validateUserError,
} = userSlice.actions;

export default userSlice.reducer;
