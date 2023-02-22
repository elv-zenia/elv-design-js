import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SVG from "react-inlinesvg";
const classNames = require("classnames");

const Button = React.forwardRef(({
  children,
  className,
  disabled=false,
  variant="primary",
  icon,
  iconOnly=false,
  fullWidth=false,
  onClick
}, ref) => {
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
        innerRef={ref}
        onClick={onClick}
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
        innerRef={ref}
        onClick={onClick}
      >
        { children }
      </StyledButton>
    );
  }
});

const StyledButton = styled.button`
  color: ${({theme}) => theme.textPrimaryColor};
  border-radius: 5px;
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
  (variant === "primary" &&
    `
    background: ${theme.buttonPrimaryBg};
    color: ${theme.buttonPrimaryTextColor};
  `) ||
  (variant === "secondary" &&
    `
    background: ${theme.buttonSecondaryBg};
    border-color: ${theme.buttonSecondaryBorder};
    color: ${theme.buttonSecondaryTextColor};
  `) ||
  (variant === "danger" &&
    `
    background: ${theme.buttonDangerBg};
    color: ${theme.buttonDangerTextColor};
  `) ||
  (variant === "ghost" &&
    `
    background: none;
    
    &:hover:not(:disabled) {
    background: rgba(0, 0, 0, 10%);
    }
  `)
};
  
  ${({fullWidth}) => fullWidth &&
  `
      border-radius: 5px;
      max-width: 100%;
      width: 100%;
    `
};
`;

const IconButton = styled(StyledButton)`
  min-height: 43px;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  
  .elv-button--svg {
    height: 1rem;
    width: 1rem;
  }
`;

Button.propTypes = {
  /**
   * The content of the button.
   */
  children: PropTypes.node,

  /**
   * An optional className to be added to the button.
   */
  className: PropTypes.string,

  /**
   * Determines the disabled state.
   */
  disabled: PropTypes.bool,

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary", "danger", "ghost"]),

  /**
   * An icon to render. Required when iconOnly is true.
   */
  icon: PropTypes.string,

  /**
   * If set to true, an icon will be rendered with no text.
   */
  iconOnly: PropTypes.bool,

  /**
   * Option to fit button width to its parent width.
   */
  fullWidth: PropTypes.bool,

  /**
   * Event handler called when the button is clicked.
   */
  onClick: PropTypes.func
};

export default Button;
