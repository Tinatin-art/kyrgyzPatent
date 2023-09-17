import React from "react";
import FuseUtils from "../router/utils/FuseUtils";
import { Navigate } from "react-router-dom";
import AuthConfig from "../auth/AuthConfig";
import MainPageConfig from "../pages/main-page/MainPageConfig";

const routesConfig = [
    AuthConfig,
    MainPageConfig
];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routesConfig),

  {
    path: "/",
    element: <Navigate to={`/signin`} />,
  },
];

export default routes;
