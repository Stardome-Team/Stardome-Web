import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute(props) {
  const { component: Component, ...rest } = props;

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