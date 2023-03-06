import React from "react";
import Label from "../Label";
import {formItem, formItemLabel} from "../shared-styles";
import styled from "styled-components";
import PropTypes from "prop-types";

const TextInput = ({value, placeholder, label, width=400}) => {
  return (
    <InputContainer inputWidth={width}>
      <LabelContainer>
        <StyledLabel label={label} />
      </LabelContainer>
      <TextInputContainer>
        <TextFieldWrapper>
          <StyledInput
            type="text"
            value={value}
            placeholder={placeholder}
            hasLabel={!!label}
          />
        </TextFieldWrapper>
      </TextInputContainer>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  position: relative;
  width: ${({inputWidth}) => `${inputWidth}px`};

  ${formItem}
`;

const LabelContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const StyledLabel = styled(Label)`
  position: absolute;
  top: 10px;
  left: 15px;
  z-index: 1;
  display: flex;
  height: 1rem;
  align-items: center;
  margin: 0;
  
  ${formItemLabel};
`;

const TextInputContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: flex-start;
`;

const TextFieldWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

const StyledInput = styled.input`
  bottom: 0;
  border: none;
  outline: none;
  min-height: 50px;
  //padding: 2rem 1rem 0.8125rem;
  padding: 24px 15px 10px;
  background: transparent;
  width: 100%;
`;

TextInput.propTypes = {
  /**
   * Property to store the input value.
   */
  value: PropTypes.string,

  /**
   * Placeholder text to display when no value has been entered.
   */
  placeholder: PropTypes.string,

  /**
   * The text to display as the label.
   */
  label: PropTypes.string,

  /**
   * Defines the width of the input.
   */
  width: PropTypes.number
};

export default TextInput;
