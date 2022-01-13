import axios from "axios";

const API_URI = process.env.REACT_APP_BACKEND_URI || "http://localhost:5000";

const userApi = axios.create({
  baseURL: API_URI + "/api/user",
});

export const userSignUp = async ({ name, email, password }) => {
  const response = await userApi.post("/sign-up", { name, email, password });

  return response.data;
};

export const userLogin = async ({ email, password }) => {
  const response = await userApi.post("/login", { email, password });

  return response.data;
};

export const getUserById = async (userId) => {
  const response = await userApi.get(`/${userId}`);

  return response.data;
};

export const deleteUserById = async (userId) => {
  const response = await userApi.delete(`/${userId}`);

  return response.data;
};

export const updateUserById = async ({ userId, userInputs }) => {
  const { name, email } = userInputs;
  const response = await userApi.patch(`/${userId}`, { name, email });

  return response.data;
};

export const addValue = async ({ userId, exerciseId, value }) => {
  const res = await userApi.post(`/${userId}/${exerciseId}`, { value });

  return res.data;
};
