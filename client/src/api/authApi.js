import axios from "axios";
import Cookies from "js-cookie";

const API_URI = process.env.REACT_APP_BACKEND_URI || "http://localhost:5000";

const userApi = axios.create({
  baseURL: API_URI + "/api/auth",
});

export const getUser = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("jwt")}`,
    },
  };

  const res = await userApi.get("/get-user", config);

  return res.data;
};
