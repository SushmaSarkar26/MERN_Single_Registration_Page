import React from 'react';
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <>
            <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-from">
              <h2 className="from=-tittle">Sign in</h2>
              <from className="register-from" id="register-from">
                <div className="from-group mt-4">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Your Email"
                  />
                </div>
                <br />
                <div className="from-group">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="Your Password"
                  />
                </div>
                <br />
                <div className="from-group from-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="Log in"
                  />
                </div>
                <br/>
                <div>
                <NavLink to="/signup" className="signup-image-link">Create an Account</NavLink>
                </div>
              </from>
            </div>
          </div>
        </div>
      </section>           
        </>
    )
}

export default Login;