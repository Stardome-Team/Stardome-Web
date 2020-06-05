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
import axios from 'axios';

const App = (props) => {
  
  const newAxios = axios.create();

  newAxios.interceptors.request.use((config)=>{
      const token = localStorage.getItem("token");
      config.headers.Authorization = `Bearer ${token}`;
      return config;
  })
  
  const [authTokens, setAuthTokens] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {})

  const postSignUp = (userInfo) => {
    return newAxios.post("/auth/signup", userInfo)
      .then(response => {
        const { user, token } = response.data
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user)
        setAuthTokens(token)
        return response;
    })
  }

  const postLogin = (credentials) => {
    return newAxios.post("/auth/login", credentials)
        .then(response => {
            const { token, user } = response.data;
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUser(user)
            setAuthTokens(token)
            return response;
        })
  }

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setAuthTokens('')
    setUser({})
  }

  return(
    <AuthContext.Provider value={{ 
      signup: postSignUp,
      login: postLogin,
      logout: logout
      }}>
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