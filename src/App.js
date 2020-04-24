import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homePage'
import newsPage from './pages/newspage/newspage'

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
      </Switch>
  );
}

export default App;
