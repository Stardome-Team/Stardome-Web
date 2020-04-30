import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homePage';
import newsPage from './pages/newspage/newspage';
import SignUpLogin from "./pages/SignUpLogin/forms";
import TournamentPage from './pages/tournaments/tournament';


function App() {
  return(
      <Switch>
        <Route exact path = "/" component={HomePage}/>
        <Route path = "/news" component={newsPage}/>
        <Route path = "/auth" component={SignUpLogin}/>
        <Route path = "/events" component={TournamentPage}/>
      </Switch>
  );
}

export default App;
