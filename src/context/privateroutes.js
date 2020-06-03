import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./auth";

function PrivateRoute({ component: Component, ...rest }) {
  const authTokens = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        authTokens ? (
          <Component {...props} />
        ) : (
          <Redirect to={ { pathname: "/auth", state: { referer: props.location } } }/>
        )
      }
    />
  );
}

export default PrivateRoute;