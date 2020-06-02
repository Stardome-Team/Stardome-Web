import React, { useContext } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homePage';
import newsPage from './pages/newspage/newspage';
import aboutPage from './pages/aboutpage/aboutpage';
import SignUpLogin from "./pages/SignUpLogin/forms";
import TournamentPage from './pages/tournaments/tournament';
import StandingsPage from './pages/standings/standingsPage'
// import StoreProvider from './store'
import Context from './store/context'

function App() {
	const PrivateRoute = ({component: Component, auth }) => (
		<Route render={props => auth === true
		  ? <Component auth={auth} {...props} />
		  : <Redirect to={{pathname:'/auth'}} />
		}
		/>
	  )
	const context = useContext(Context)
  return(
	  <Context.Provider>
		<Switch>
			<Route exact path = "/" component={HomePage}/>
			<Route path = "/news" component={newsPage}/>
			<Route path = "/auth" component={SignUpLogin}/>
			<Route path = "/events" component={TournamentPage}/>
			<Route path = "/about" component={aboutPage}/>
			{/* <Route path = "/standings" component={StandingsPage}/> */}
			<PrivateRoute path="/standings"
                            auth={context.authState}
                            component={StandingsPage} />
		</Switch>
	  </Context.Provider>
  );
}

export default App;
