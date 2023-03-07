import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import styled from "styled-components";
import PropTypes from "prop-types";
import {CheckIcon} from "../../static/icons/Icons";
import ImageIcon from "../ImageIcon/ImageIcon";
import Label from "../Label";

const Checkbox = ({label, ...rest}) => {
  return (
    <Flex {...rest}>
      <StyledLabel htmlFor="checkbox1" label={label} />
      <CheckboxRoot id="checkbox1">
        <CheckboxIndicator>
          <ImageIcon icon={CheckIcon} className="check-icon" />
        </CheckboxIndicator>
      </CheckboxRoot>
    </Flex>
  );
};

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
  
  &[data-state="checked"] {
    background-color: ${({theme}) => theme.checkboxCheckedBg};
  }
  
  .check-icon {
    display: block;
    width: 100%;
    height: 100%;
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
  gap: 0.675rem;
`;

const StyledLabel = styled(Label)`
  line-height: 1rem;
  color: ${({theme}) => theme.labelColor};
`;

Checkbox.propTypes = {
  /**
   * The label to be displayed beside the checkbox.
   */
  label: PropTypes.string.isRequired
};

export default Checkbox;
