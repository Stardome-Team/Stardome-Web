import React, { useState , useContext } from "react";
import styles from "./forms.module.css";
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Context from '../../store/context';

const Forms = () => {
  const context = useContext(Context)
  const [signIn, setSignIn] = useState(true)
  const [signUp, setSignUp] = useState(false)

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
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                {!context.authState
                ? <button onClick={() => context.authObj.login()}>Sign In</button>
                : <button onClick={() => context.authObj.logout()}>Logout</button>
                }
                
              </form>

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
