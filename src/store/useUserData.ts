import { useSelector } from "react-redux";
import { RootState } from "./store";
import { UserData } from "../shared.types";

export function useUserData() {
  const userData: UserData = useSelector((state: RootState) => state.user);

  return userData;
}
