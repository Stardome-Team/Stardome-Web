import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./auth";

function PrivateRoute(props) {
  const { component: Component, ...rest } = props;
  const authTokens = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        props.authTokens ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ 
            pathname: "/auth", 
            state: { from: props.location } 
          }}/>
        )
      }
    />
  );
}

export default PrivateRoute;