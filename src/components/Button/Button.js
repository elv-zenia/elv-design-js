import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SVG from "react-inlinesvg";
const classNames = require("classnames");

const StyledButton = styled.button`
  background: ${({theme, variant}) => variant === "primary" ? theme.buttonPrimary : theme.buttonSecondary};
  border-radius: 16px;
  color: ${({theme}) => theme.textPrimary};
  font-size: ${({theme}) => theme.fontPrimary};
  padding: 8px 16px;
  
  ${({variant}) => variant === "primary" &&
    `
      background: ${({theme}) => theme.buttonPrimary};
      border: none;
    `
  };
  
  ${({variant}) => variant === "secondary" &&
    `
      background: ${({theme}) => theme.buttonSecondary};
      border: ${({theme}) => `1px solid ${theme.buttonBorder}`}
    `
  };
`;

const IconButton = styled(StyledButton)`
  border-radius: 100%;
  width: 45px;
  height: 45px;
  
  .elv-button--svg {
    width: 16px;
  }
`;

const Button = ({
  children,
  className,
  disabled=false,
  variant="primary",
  icon,
  iconOnly=false
}) => {
  const buttonClasses = classNames(className, {
    "elv-button": true,
  });

  if(iconOnly) {
    return (
      <IconButton
        className={buttonClasses}
        icon={icon}
        disabled={disabled}
        variant={variant}
        type="button"
      >
        <SVG className="elv-button--svg" src={icon} />
      </IconButton>
    );
  } else {
    return (
      <StyledButton
        className={buttonClasses}
        disabled={disabled}
        variant={variant}
        type="button"
      >
        {children}
      </StyledButton>
    );
  }
};

Button.propTypes = {
  /**
   * Specify the content of your Button
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be added to your button
   */
  className: PropTypes.string,

  /**
   * Specify whether the button should be disabled
   */
  disabled: PropTypes.bool,

  /**
   * Specify an icon to render
   */
  icon: PropTypes.object,

  /**
   * Provide a function to be called when the button is clicked
   */
  OnClick: PropTypes.func,

  /**
   * Specify the type of button you want to create
   */
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary", "danger", "ghost"])
};

export default Button;
