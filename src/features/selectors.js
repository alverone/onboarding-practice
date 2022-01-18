export const useUsers = (state) => state.user.users;

export const useUserData = (state) => state.user.userData;

export const useUserWithID = (id) => (state) =>
  state.user.users.filter((user) => user.id === id)[0];
