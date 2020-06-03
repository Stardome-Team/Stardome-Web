import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { AuthContext } from "./context/auth";
import PrivateRoute from './context/privateroutes'
import HomePage from './pages/homepage/homePage';
import TournamentPage from './pages/tournaments/tournament';
import StandingsPage from './pages/standings/standingsPage';
import newsPage from './pages/newspage/newspage';
import SignUpLogin from './pages/SignUpLogin/forms';
import aboutPage from './pages/aboutpage/aboutpage'

const App = (props) => {

  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  // const [authTokens, setAuthTokens] = useState(existingTokens);
  const [authTokens, setAuthTokens] = useState(localStorage.getItem('authTokens') || '');
    
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return(
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <Switch>
          <Route exact path = "/" component={HomePage}/>
          <Route path = "/news" component={newsPage}/>
          <Route path = "/auth" component={SignUpLogin}/>
          <Route path = "/events" component={TournamentPage}/>
          <Route path = "/about" component={aboutPage}/>
          {/* <Route path = "/standings" component={StandingsPage}/> */}
          <PrivateRoute path="/standings" component={StandingsPage} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;