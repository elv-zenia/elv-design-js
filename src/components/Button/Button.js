import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SVG from "react-inlinesvg";
const classNames = require("classnames");

const StyledButton = styled.button`
  color: ${({theme}) => theme.textPrimaryColor};
  border-radius: 16px;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  padding: 8px 16px;
  font-size: ${({theme}) => theme.buttonFontSize};
  max-width: 20rem;
  min-height: 2rem;
  width: max-content;
  transition: 0.3s;
  
  &:hover:not(:disabled) {
    opacity: 80%;
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 40%;
  }
  
  ${({variant, theme}) =>
  variant === "primary" &&
  `
    background: ${theme.buttonPrimaryBg};
    color: ${theme.buttonPrimaryTextColor};
  `
  }};

  ${({variant, theme}) =>
    variant === "secondary" &&
    `
      background: ${theme.buttonSecondaryBg};
      border-color: ${theme.buttonSecondaryBorder};
      color: ${theme.buttonSecondaryTextColor};
    `
  };
  
  ${({variant, theme}) =>
    variant === "danger" &&
    `
      background: ${theme.buttonDangerBg};
      color: ${theme.buttonDangerTextColor};
    `
  };
  
  ${({fullWidth}) => fullWidth &&
    `
      border-radius: 4px;
      max-width: 100%;
      width: 100%;
    `
  };
`;

const IconButton = styled(StyledButton)`
  border-radius: 100%;
  min-height: calc(3rem + 2px);
  padding-left: 1rem;
  padding-right: 1rem;
  
  .elv-button--svg {
    height: 1rem;
    width: 1rem;
  }
`;

const Button = ({
  children,
  className,
  disabled=false,
  variant="primary",
  icon,
  iconOnly=false,
  fullWidth=false
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
        fullWidth={fullWidth}
      >
        { children }
      </StyledButton>
    );
  }
};

Button.propTypes = {
  /**
   * Specify the content of your button
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
   * Option to fit button width to its parent width
   */
  fullWidth: PropTypes.bool,

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

