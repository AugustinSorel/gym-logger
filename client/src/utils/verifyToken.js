import jwt_decode from "jwt-decode";

const verifyToken = (token) => {
  try {
    return jwt_decode(token);
  } catch (error) {
    return null;
  }
};

export default verifyToken;
