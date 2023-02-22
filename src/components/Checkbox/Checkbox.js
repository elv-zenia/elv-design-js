import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import styled from "styled-components";
import PropTypes from "prop-types";
import CheckIcon from "../../static/icons/check.svg";
import ImageIcon from "../ImageIcon/ImageIcon";

const StyledCheckbox = styled(CheckboxPrimitive.Root)`
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.checkboxBg};
  border: ${({theme}) => `1px solid ${theme.checkboxBorder}`};
  
  &:focus {
    box-shadow: ${({theme}) => `0 0 0 2px ${theme.checkboxFocus}`};
  }
  
  .check-icon {
    display: block;
    width: 0.675rem;
    height: 0.675rem;
  }
`;

const StyledIndicator = styled(CheckboxPrimitive.Indicator)`
  color: ${({theme}) => theme.checkboxIcon};
`;

const CheckboxRoot = StyledCheckbox;
const CheckboxIndicator = StyledIndicator;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLabel = styled.label`
  line-height: 1;
  padding-left: 0.675rem;
  color: ${({theme}) => theme.labelColor};
`;

const Checkbox = ({label}) => {
  return (
    <Flex>
      <CheckboxRoot id="checkbox1">
        <CheckboxIndicator>
          <ImageIcon icon={CheckIcon} className="check-icon" />
        </CheckboxIndicator>
      </CheckboxRoot>
      <StyledLabel htmlFor="checkbox1">{ label }</StyledLabel>
    </Flex>
  );
};

Checkbox.propTypes = {
  /**
   * The label to be displayed beside the checkbox.
   */
  label: PropTypes.string
};

export default Checkbox;
