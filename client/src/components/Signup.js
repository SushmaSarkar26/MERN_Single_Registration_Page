import React from "react";
import { NavLink } from "react-router-dom";
import signup from "../img/signup.png";

const Signup = () => {
  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content d-flex justify-content-start align-items-center">
            <div className="signup-from">
              <h2 className="from=-tittle">Sign up</h2>
              <from className="register-from" id="register-from">
                <div className="from-group mt-4">
                  <label htmlFor="name">
                    <i class="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    placeholder="Your Name"
                  />
                </div>
                <br />
                <div className="from-group">
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
                  <label htmlFor="phone">
                    <i class="zmdi zmdi-phone material-icons-name"></i>
                  </label>
                  <input
                    type="phone"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    placeholder="Your Phone"
                  />
                </div>
                <br />
                <div className="from-group">
                  <label htmlFor="work">
                    <i class="zmdi zmdi-slideshow material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="work"
                    id="work"
                    autoComplete="off"
                    placeholder="Your Profession"
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
                <div className="from-group">
                  <label htmlFor="cpassword">
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    placeholder="Confirm Password"
                  />
                </div>
                <br />
                <div className="from-group from-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="register"
                  />
                </div>
                <br/>
                <div>
                <NavLink to="/login" className="signup-image-link">Are you already register? login</NavLink>
                </div>
              </from>
            </div>

                <div className="signup-image ">
                    <figure>
                        <img src={signup} alt="registation pic" />
                    </figure>
                    {/* <NavLink to="/login" className="signup-image-link">Are you already register? login</NavLink> */}
                </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
