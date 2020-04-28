import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homePage';
import newsPage from './pages/newspage/newspage';
import Forms from "./pages/SignUpLogin/forms";


// const App = () => ( 
//       <div>
//         <HomePage/>
//       </div>
// )

function App() {
  return(
      <Switch>
        <Route exact path = "/" component={HomePage}/>
        <Route path = "/news" component={newsPage}/>
        <Route path = "/auth" component={Forms}/>
      </Switch>
  );
}

export default App;
