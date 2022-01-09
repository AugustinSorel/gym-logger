import axios from "axios";

const userApi = axios.create({
  //   baseURL: "http://localhost:5000/api/user",
  baseURL: "https://gym-logger-mern.herokuapp.com/api/user",
});

export const addValue = async ({ userId, exerciseId, value }) => {
  const res = await userApi.post(`/${userId}/${exerciseId}`, { value });

  return res.data;
};
