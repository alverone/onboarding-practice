import { useSelector } from "react-redux";

export const useUserWithID = (id) =>
  useSelector((state) => state.user.users.filter((user) => user.id === id)[0]);
