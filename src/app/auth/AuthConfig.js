import React from "react";
import SignIn from "./SignIn";


const AuthConfig = {
  routes: [
    {
      path: "/signin",
      element: <SignIn />,
    },
  ],
};

export default AuthConfig;
