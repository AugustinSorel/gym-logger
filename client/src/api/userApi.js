import axios from "axios";

const API_URI = process.env.REACT_APP_BACKEND_URI || "http://localhost:5000";

const userApi = axios.create({
  baseURL: API_URI + "/api/user",
});

export const addValue = async ({ userId, exerciseId, value }) => {
  console.log(API_URI);
  const res = await userApi.post(`/${userId}/${exerciseId}`, { value });

  return res.data;
};
