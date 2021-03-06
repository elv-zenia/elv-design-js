import React from "react";
import {NavLink} from "react-router-dom";
import "../static/stylesheets/navbar.scss";
import {ImageIcon} from "elv-components-js";
import Logo from "Assets/images/logo.png";

const NavigationBar = () => {
  return (
    <nav className="navigation">
      <NavLink className="navigation-logo-container" to="/">
        <ImageIcon icon={Logo} title="Eluvio" className="navigation-logo" />
      </NavLink>
      <li><NavLink className="navigation-link" to="/">Getting Started</NavLink> </li>
      <li> <NavLink className="navigation-link" to="/home">Home</NavLink> </li>
      <li><NavLink className="navigation-link" to="/components">Components</NavLink> </li>
    </nav>
  );
};

export default NavigationBar;
