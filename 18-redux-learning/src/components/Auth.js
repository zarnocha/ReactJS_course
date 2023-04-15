import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const logInHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.logIn());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={logInHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
