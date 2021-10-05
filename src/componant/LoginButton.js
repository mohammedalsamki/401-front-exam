import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@restart/ui/esm/Button";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();


  return <Button id='login' variant='dark' onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default LoginButton;