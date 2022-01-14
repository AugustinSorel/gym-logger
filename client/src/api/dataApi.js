import axios from "axios";

const API_URI = process.env.REACT_APP_BACKEND_URI || "http://localhost:5000";

const dataApi = axios.create({
  baseURL: API_URI + "/api/data",
});

export const addValue = async ({ userId, exerciseId, value }) => {
  const res = await dataApi.post(`/${userId}/${exerciseId}`, value);

  return res.data;
};

export const getValue = async ({ userId, exerciseId }) => {
  const res = await dataApi.get(`/${userId}/${exerciseId}`);

  return res.data;
};
