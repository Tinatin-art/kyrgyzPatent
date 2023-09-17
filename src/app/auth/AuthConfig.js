import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";


const AuthConfig = {
  routes: [
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ],
};

export default AuthConfig;
