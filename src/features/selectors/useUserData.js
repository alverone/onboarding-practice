import { useSelector } from "react-redux";

export const useUserData = () => useSelector((state) => state.user.userData);
