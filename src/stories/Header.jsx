import React from "react";
import PropTypes from "prop-types";

import Button from "../components/Button/Button";
import "./header.css";
import ImageIcon from "../components/ImageIcon/ImageIcon";
import Logo from "../static/images/logo.png";

export const Header = ({user, onLogin, onLogout, onCreateAccount}) => (
  <header>
    <div className="wrapper">
      <div>
        <ImageIcon icon={Logo} />
        <h1>Acme</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button OnClick={onLogout}>Log out</Button>
          </>
        ) : (
          <>
            <Button OnClick={onLogin}>Log in</Button>
            <Button type="primary" OnClick={onCreateAccount}>Sign up</Button>
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
