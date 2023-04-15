import React from "react";
import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const logInHandler = (event) => {
    dispatch(authActions.logIn());
  };

  const logOutHandler = (event) => {
    dispatch(authActions.logOut());
  };

  const buttonToLogIn = <button onClick={logInHandler}>Login</button>;
  const buttonToLogOut = <button onClick={logOutHandler}>Logout</button>;

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isAuthenticated && (
            <React.Fragment>
              <li>
                <a href="/">My Products</a>
              </li>
              <li>
                <a href="/">My Sales</a>
              </li>
            </React.Fragment>
          )}
          <li>{!isAuthenticated ? buttonToLogIn : buttonToLogOut}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
