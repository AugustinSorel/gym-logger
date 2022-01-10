import { Navigate } from "react-router-dom";
import useUser from "../../store/useUser";

export const PrivateRoute = ({ children }) => {
  const user = useUser((state) => state.user);
  return user ? children : <Navigate to="/welcome" />;
};
