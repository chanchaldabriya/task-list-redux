import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Comp, loggedIn, path, redirectPath, ...otherProps }) => {
  return (
    <Route
      path={path}
      {...otherProps}
      render={(props) => {
        return loggedIn ? <Comp {...props} /> : <Redirect to={redirectPath} />;
      }}
    />
  );
};

export default ProtectedRoute;
