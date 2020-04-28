import React, { Component } from "react";
import styles from "./forms.module.css";
import NavBar from '../../components/navbar/navbar';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUp: false,
      signIn: true,
    };
  }

  showSignUp = (e) => {
    e.preventDefault();
    this.setState({
      signUp: true,
      signIn: false,
    });
  };

  showSignIn = (e) => {
    e.preventDefault();
    this.setState({
      signUp: false,
      signIn: true,
    });
  };

  render() {
    const { signIn, signUp } = this.state;

    return (
      <>
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
                  onClick={(e) => this.showSignIn(e)}
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
                    onClick={(e) => this.showSignIn(e)}
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
                <button>Sign In</button>
              </form>

              <div className={styles.hiddenLarge}>
                <p>No Account ? </p>
                <button
                  onClick={(e) => this.showSignUp(e)}
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
                    onClick={(e) => this.showSignUp(e)}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
    );
  }
}

export default Forms;
