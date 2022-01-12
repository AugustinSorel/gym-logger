import jwt_decode from "jwt-decode";

const verifyToken = (token) => {
  try {
    const decoded = jwt_decode(token);
    if (decoded.hasOwnProperty("id")) {
      return decoded;
    }

    return null;
  } catch (error) {
    return null;
  }
};

export default verifyToken;
