import React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import {RadioGroupIndicator} from "@radix-ui/react-radio-group";
import styled, {css} from "styled-components";
import Label from "../Label";
import PropTypes from "prop-types";

export const RadioGroup = ({
  disabled=false,
  defaultValue,
  items=[],
  orientation="vertical",
  required=false,
  ...rest
}) => {
  return (
    <StyledRadioRoot
      defaultValue={defaultValue}
      disabled={disabled}
      orientation={orientation}
      required={required}
      {...rest}
    >
      {
        items.map(item => (
          <Radio
            label={item.label}
            value={item.value}
            id={item.id}
            disabled={item.disabled}
          />
        ))
      }
    </StyledRadioRoot>
  );
};

const Radio = ({
  value,
  label,
  id,
  disabled
}) => {
  return (
    <Flex>
      <StyledRadioGroupItem value={value} id={id} disabled={disabled}>
        <StyledRadioGroupIndicator />
      </StyledRadioGroupItem>
      <StyledLabel htmlFor={id} label={label} disabled={disabled} />
    </Flex>
  );
};

const StyledRadioRoot = styled(RadioGroupPrimitive.Root)`
  display: flex;
  gap: 10px;
  
  ${({orientation}) =>
  css`
    flex-direction: ${orientation === "horizontal" ? "row" : "column"}
  `
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const StyledRadioGroupItem = styled(RadioGroupPrimitive.Item)`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 100%;
  border: ${({theme}) => `1px solid ${theme.radioBorder}`};
  background-color: ${({theme}) => theme.radioBg};
  
  &[data-disabled] {
    ${({theme}) => theme.textDisabled}
    pointer-events: none;
  }
`;

const StyledRadioGroupIndicator = styled(RadioGroupIndicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  
  &::after {
    content: "";
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${({theme}) => theme.radioIndicatorBg};
  }
`;

const StyledLabel = styled(Label)`
  line-height: 1rem;
  padding-left: 0.75rem;
  font-size: 1rem;
`;

RadioGroup.propTypes = {
  /**
   * When true, prevents the user from interacting with the
   * radio items.
   */
  disabled: PropTypes.bool,

  /**
   * The value of the radio item that should be checked when
   * initially rendered.
   */

  defaultValue: PropTypes.string,

  /**
   * Radio items.
   */
  items: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
    id: PropTypes.string,
    disabled: PropTypes.bool
  }),

  /**
   * The orientation of the radio items.
   */
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),

  /**
   * When true, indicates that the user must check a radio
   * item before the parent form can be submitted.
   */
  required: PropTypes.bool
};
