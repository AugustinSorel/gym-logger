import create from "zustand";
import loadCookie from "../utils/loadCookie";
import storeCookie from "../utils/storeCookie";

const useUser = create((set) => ({
  userToken: loadCookie("jwt"),
  setUserToken: (userToken) => {
    set(() => ({ userToken: userToken }));
    storeCookie("jwt", userToken);
  },
}));

export default useUser;
