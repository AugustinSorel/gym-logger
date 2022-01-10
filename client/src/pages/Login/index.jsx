import * as LoginStyle from "../../styles/Login.styled";

export const Login = () => {
  return (
    <LoginStyle.Container
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "100vw" }}
    >
      <h1>this is the login page</h1>
    </LoginStyle.Container>
  );
};
