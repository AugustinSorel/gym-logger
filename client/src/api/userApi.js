import axios from "axios";

const userApi = axios.create({
  baseURL:
    process.env.BACKEND_URI + "/api/user" || "http://localhost:5000/api/user",
  // baseURL: "http://localhost:5000/api/user",
  // baseURL: "https://gym-logger-mern.herokuapp.com/api/user",
});

export const addValue = async ({ userId, exerciseId, value }) => {
  console.log(process.env.BACKEND_URI);
  const res = await userApi.post(`/${userId}/${exerciseId}`, { value });

  return res.data;
};
