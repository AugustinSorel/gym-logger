import axios from "axios";
import getHeader from "../utils/getHeader";

const API_URI = process.env.REACT_APP_BACKEND_URI || "http://localhost:5000";

const userApi = axios.create({
  baseURL: API_URI + "/api/auth",
});

export const getUser = async () => {
  const config = getHeader();

  const res = await userApi.get("/get-user", config);

  return res.data;
};
