import React, {useRef, useState} from "react";
import ImageIcon from "../ImageIcon";
import {SearchIcon, XIcon} from "../../static/icons/Icons";
import PropTypes from "prop-types";
import styled from "styled-components";

const Search = ({
  placeholder="Search",
  disabled,
  autoComplete="off",
  onChange=() => {},
  onKeyDown=() => {},
  onClear=() => {},
  ...rest
}) => {
  const [value, setValue] = useState("");
  const [hasContent, setHasContent] = useState(false);
  const searchRef = useRef(null);

  const HandleChange = event => {
    event.preventDefault();
    setHasContent(event.target.value !== "");
    setValue(event.target.value);
  };

  const HandleKeyDown = event => {
    if(event.key === "Escape") { ClearInput(); }
  };

  const ClearInput = () => {
    setValue("");
    onClear();
    setHasContent(false);
    searchRef.current.focus();
  };

  return (
    <Container role="search">
      <StyledSearchIcon icon={SearchIcon} disabled={disabled} />
      <Input
        {...rest}
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        aria-label="Search"
        role="searchbox"
        value={value}
        ref={searchRef}
        autocomplete={autoComplete}
        onChange={event => {
          HandleChange(event);
          if(typeof onChange === "function") {
            onChange(event);
          }
        }}
        onKeyDown={event => {
          HandleKeyDown(event);
          if(typeof onKeyDown === "function") {
            onKeyDown(event);
          }
        }}
      />
      <CloseButton type="button" onClick={() => ClearInput()} hideButton={!hasContent}>
        <ImageIcon icon={XIcon} />
      </CloseButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid gray;
  height: 2.5rem;
  padding: 0 2.5rem;
  box-sizing: border-box;
  border-radius: 1rem;
  
  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;

const StyledSearchIcon = styled(ImageIcon)`
  position: absolute;
  left: 1rem;
  color: ${({theme}) => theme.textPrimaryColor};
  opacity: ${({disabled}) => disabled ? 0.4 : 1};
`;

const CloseButton = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({hideButton}) => hideButton ? 0 : 1};
  position: absolute;
  right: 0;
  visibility: ${({hideButton}) => hideButton ? "hidden" : "visible"};
  transition: opacity .1s ease-in-out;
`;

Search.propTypes = {
  /**
   * Placeholder text to display when the search bar is empty.
   */
  placeholder: PropTypes.string,

  /**
   * Determines the disabled state.
   */
  disabled: PropTypes.bool,

  /**
   * Specify an optional value for the autocomplete property on the underlying input.
   */
  autoComplete: PropTypes.string,

  /**
   * Event handler called when the search value changes.
   */
  onChange: PropTypes.func,

  /**
   * Event handler called for the key down event.
   */
  onKeyDown: PropTypes.func,

  /**
   * Event handler called when the search value is cleared.
   */
  onClear: PropTypes.func
};

export default Search;
