import React, { useState , useContext } from "react";
import {AuthContext} from "../../App";
import { Redirect } from "react-router-dom";
import styles from "./forms.module.css";
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

const Forms = (props) => {

  const context = React.useContext(AuthContext)

  // const referer = props.location.state.referer || '/';
  const [redirectToReferrer, setRedirectToReferrer] = useState(false)

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [credentials, setCredentials] = useState({})
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  // const { authTokens, setAuthTokens } = useAuth();

  const clearInputs = () => {
    setEmail('')
    setPassword('')
    setErrorMessage('')
  }
  
  const [signIn, setSignIn] = useState(true)
  const [signUp, setSignUp] = useState(false)
  
  
  if (isLoggedIn) {
    setRedirectToReferrer(true)
  } 
  
  const from = props.location.state || { from: { pathname: '/' } }

  if (redirectToReferrer === true) {
    return <Redirect to={from} />
  }

  const showSignUp = (e) => {
    e.preventDefault();
    setSignIn(false);
    setSignUp(true);
  };

  const showSignIn = (e) => {
    e.preventDefault();
    setSignIn(true);
    setSignUp(false);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
        props.signup(this.state)
            .then(() => this.clearInputs())
            .catch(err => {
                setErrorMessage(err.data)
            })
  }

  const handleLoginSubmit = (credentials) => {
    // e.preventDefault();  
    setCredentials({
      email: 'oyefesotunmise@gmail.com',
      password: 'okototesting'
    })
    context.fakelogin = (credentials) => {
      console.log('CREDENTIALS',credentials.password)
    }

        // .then(() => this.clearInputs(e))
        // .catch(err => {
        //     setErrorMessage(err.data)
        // })
  }

    return (
      <div className={styles.bg}>
      <NavBar />
      <div className={styles.Forms}>
        {signUp && (
          <div className={styles.container} id="container">
            <div
              className={styles.formContainer + " " + styles.signUpContainer}
            >
              <form action="#" onSubmit={(e) => handleSignUpSubmit(e)}>
                <h1>Create Account</h1>
                <div className={styles.socialContainer}>
                  {/* <a href="#" className="social"><FontAwesomeIcon icon="faFacebookF"/></a>
				<a href="#" className="social"><FontAwesomeIcon icon="GooglePlus"/></a>
				<a href="#" className="social"><FontAwesomeIcon icon="LinkedIn"/></a> */}
                </div>
                <span>or use your email for registration</span>
                <input 
                  type="text" 
                  placeholder="username" 
                  value={email}
                  onChange={e => {
                    setNewUsername(e.target.value);
                  }}
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  value={email}
                  onChange={e => {
                    setNewEmail(e.target.value);
                  }}
                />
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={email}
                  onChange={e => {
                    setNewPassword(e.target.value);
                  }}
                />
                <button>Sign Up</button>
              </form>
              {
                errorMessage &&
                <p style={{color: "red"}}>{errorMessage}</p>
              }
			
              <div className={styles.hiddenLarge}>
                <p>Have an account ? </p>
                <button
                  onClick={(e) => showSignIn(e)}
                >
                  Sign In
                </button>
              </div>
			
			</div>

            <div className={styles.overlayContainer2}>
              <div className={styles.overlay}>
                <div className={styles.overlayPanel + " " + styles.overlayLeft}>
                  <h1>Welcome Back!</h1>
                  <p>
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <button
                    className={styles.ghost}
                    id="signIn"
                    onClick={(e) => showSignIn(e)}
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {signIn && (
          <div className={styles.container} id="container">
            <div
              className={styles.formContainer + " " + styles.signInContainer}
            >
              <form action="#" onSubmit={() => handleLoginSubmit(credentials)}>
                <h1>Sign in</h1>
                <div className={styles.socialContainer}>
                  {/* <a href="#" className="social"><FontAwesomeIcon icon="Facebook"/></a>
					<a href="#" className="social"><FontAwesomeIcon icon="GooglePlus"/></a>
					<a href="#" className="social"><FontAwesomeIcon icon="LinkedIn"/></a> */}
                </div>
                <span>or use your account</span>
                <input 
                  type="email"  
                  placeholder="Email"
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                />
                <input 
                  type="password" 
                  value={password}
                  onChange={e => {
                    setPassword(e.target.value);
                  }} 
                  placeholder="Password" 
                />
                <a href="#">Forgot your password?</a>
                {/* {!authTokens */}
                <button type="submit">Sign In</button>
                {/* : <button onClick={() => props.logout}>Logout</button>
                } */}
              </form>

              {
                errorMessage &&
                <p style={{color: "red"}}>{errorMessage}</p>
              }

              <div className={styles.hiddenLarge}>
                <p>No Account ? </p>
                <button
                  onClick={(e) => showSignUp(e)}
                >
                  Sign Up
                </button>
              </div>

            </div>
            <div className={styles.overlayContainer}>
              <div className={styles.overlay}>
                <div
                  className={styles.overlayPanel + " " + styles.overlayRight}
                >
                  <h1>Hello, Friend!</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <button
                    className={styles.ghost}
                    onClick={(e) => showSignUp(e)}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
    );
  }

export default Forms;