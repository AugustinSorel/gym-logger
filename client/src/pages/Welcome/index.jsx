import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import * as HomeStyle from "../../styles/Home.styled";

export const Welcome = () => {
  return (
    <HomeStyle.Container>
      <Header text="Welcome" />
      <Link to={"/login"}>Login</Link>
      <Link to={"/sign-up"}>Sign Up</Link>
    </HomeStyle.Container>
  );
};
