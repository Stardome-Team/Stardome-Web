import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homePage'

// const App = () => ( 
//       <div>
//         <HomePage/>
//       </div>
// )

function App() {
  return(
    <Router>
      <Switch>
        <Route path = "/" exact component = {HomePage}></Route>
        {/* <Route path = "" component = {}></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
