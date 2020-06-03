import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import styles from "./forms.module.css";
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import axios from 'axios';
import { useAuth } from "../../context/auth";

const Forms = (props) => {

  // const referer = props.location.state.referer || '/';
  const [redirectToReferrer, setRedirectToReferrer] = useState(false)

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authTokens, setAuthTokens } = useAuth();
  
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

  function postLogin() {
    axios.post("https://www.somePlace.com/auth/login", {
      email,
      password
    }).then(result => {
      if (result.status === 200) {
        setAuthTokens(result.data);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }

  const Error = <div style={{backgroundColor: 'red'}}></div>

  function logOut() {
    setAuthTokens();
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
              <form action="#">
                <h1>Create Account</h1>
                <div className={styles.socialContainer}>
                  {/* <a href="#" className="social"><FontAwesomeIcon icon="faFacebookF"/></a>
				<a href="#" className="social"><FontAwesomeIcon icon="GooglePlus"/></a>
				<a href="#" className="social"><FontAwesomeIcon icon="LinkedIn"/></a> */}
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
              </form>
            
			
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
              <form action="#">
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
                {!authTokens
                ? <button type="submit" onClick={postLogin}>Sign In</button>
                : <button onClick={logOut}>Logout</button>
                }
                
              </form>
              { isError &&<Error>The username or password provided were incorrect!</Error> }
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
