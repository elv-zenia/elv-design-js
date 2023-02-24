import React from "react";
import PropTypes from "prop-types";
import styled, {css} from "styled-components";
import ImageIcon from "../ImageIcon";

const Button = React.forwardRef(({
  children,
  className,
  disabled=false,
  variant="primary",
  icon,
  iconOnly=false,
  fullWidth=false,
  onClick,
  ...rest
}, ref) => {

  if(iconOnly) {
    return (
      <StyledIconButton
        className={className}
        icon={icon}
        disabled={disabled}
        variant={variant}
        type="button"
        innerRef={ref}
        onClick={onClick}
        {...rest}
      >
        <StyledImageIcon icon={icon} />
      </StyledIconButton>
    );
  } else if(icon) {
    return (
      <StyledButton
        className={className}
        disabled={disabled}
        variant={variant}
        type="button"
        fullWidth={fullWidth}
        innerRef={ref}
        onClick={onClick}
        {...rest}
      >
        <Flex>
          <StyledImageIcon icon={icon} />
          { children }
        </Flex>
      </StyledButton>
    );
  } else {
    return (
      <StyledButton
        className={className}
        disabled={disabled}
        variant={variant}
        type="button"
        fullWidth={fullWidth}
        innerRef={ref}
        onClick={onClick}
        {...rest}
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
    css`
      background: ${theme.buttonPrimaryBg};
      color: ${theme.buttonPrimaryTextColor};
    `) ||
  (variant === "secondary" &&
    css`
      background: ${theme.buttonSecondaryBg};
      border-color: ${theme.buttonSecondaryBorder};
      color: ${theme.buttonSecondaryTextColor};
    `) ||
  (variant === "danger" &&
    css`
      background: ${theme.buttonDangerBg};
      color: ${theme.buttonDangerTextColor};
    `) ||
  (variant === "ghost" &&
    css`
      background: none;
      
      &:hover:not(:disabled) {
        color: ${theme.buttonGhostHover}
      }
    `)
};
  
  ${({fullWidth}) => fullWidth &&
    css`
      border-radius: 5px;
      max-width: 100%;
      width: 100%;
    `
  };
`;

const StyledIconButton = styled(StyledButton)`
  min-height: 43px;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
`;

const StyledImageIcon = styled(ImageIcon)`
  height: 1rem;
  width: 1rem;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

Button.propTypes = {
  /**
   * The content of the button.
   */
  children: PropTypes.node,

  /**
   * An optional className to be added.
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
