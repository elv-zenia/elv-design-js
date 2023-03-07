import React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import PropTypes from "prop-types";
import styled, {css} from "styled-components";

const Label = ({label, htmlFor, disabled, ...rest}) => {
  return (
    <StyledLabel htmlFor={htmlFor} disabled={disabled} {...rest}>{ label }</StyledLabel>
  );
};

const StyledLabel = styled(LabelPrimitive.Root)`
  ${({disabled, theme}) =>
  disabled &&
    css`
      color: ${theme.textDisabled}
    `
  }
`;

Label.propTypes = {
  /**
   * The text to display as the label.
   */
  label: PropTypes.string,

  /**
   * The id of the element the label is associated with.
   */
  htmlFor: PropTypes.string,

  /**
   * Parameter for setting disabled state styling.
   */
  disabled: PropTypes.bool
};

export default Label;
