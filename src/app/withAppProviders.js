import React from "react";
import AppContext from "./AppContext";
import routes from "./config/routesConfig";
import store from "./store/store";
import { Provider } from "react-redux";

const withAppProviders = (Component) => (props) => {
  const WrappedComponent = () => (
    <AppContext.Provider value={{ routes }}>
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    </AppContext.Provider>
  );
  return WrappedComponent;
};

export default withAppProviders;