import { useSelector } from "react-redux";

export const useUsers = () => useSelector((state) => state.user.users);
