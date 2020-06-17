import React from "react";
import { Route, Redirect } from "react-router-dom";
import {AuthContext} from '../App'

function PrivateRoute(props) {

  const contxt = React.useContext(AuthContext)
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={props =>
        contxt.authTokens ? (
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