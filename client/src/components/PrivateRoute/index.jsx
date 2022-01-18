import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = () => Cookies.get("jwt");
  return auth() ? children : <Navigate to={"/welcome"} />;
};

export default PrivateRoute;
