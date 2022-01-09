import axios from "axios";

const API_URI = process.env.BACKEND_URI || "http://localhost:5000";

const userApi = axios.create({
  baseURL: API_URI + "/api/user",
  // baseURL: "http://localhost:5000/api/user",
  // baseURL: "https://gym-logger-mern.herokuapp.com/api/user",
});

export const addValue = async ({ userId, exerciseId, value }) => {
  console.log(process.env.BACKEND_URI);
  const res = await userApi.post(`/${userId}/${exerciseId}`, { value });

  return res.data;
};
