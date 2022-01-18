import Cookies from "js-cookie";
import create from "zustand";
import storeCookie from "../utils/storeCookie";

const useUser = create((set) => ({
  userToken: Cookies.get("jwt"),
  setUserToken: (userToken) => {
    set(() => ({ userToken: userToken }));
    storeCookie("jwt", userToken);
  },
}));

export default useUser;
