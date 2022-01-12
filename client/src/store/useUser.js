import create from "zustand";
import loadCookie from "../utils/loadCookie";
import storeCookie from "../utils/storeCookie";

const useUser = create((set) => ({
  user: loadCookie("jwt"),
  setUser: (user) => {
    set(() => ({ user: user }));
    storeCookie("jwt", user);
  },
}));

export default useUser;
