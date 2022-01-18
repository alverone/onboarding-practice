export const selectUsers = (state) => state.user.users;

export const selectUserData = (state) => state.user.userData;

export const selectUserWithID = (id) => (state) =>
  state.user.users.filter((user) => user.id === id)[0];
