import {css} from "styled-components";

export const menuContent = css`
  min-width: 220px;
  background-color: ${({theme}) => theme.dropdownMenuBg};
  box-shadow: ${({theme}) => `0px 10px 38px -10px ${theme.dropdownMenuBoxShadow}, 0px 10px 20px -15px ${theme.dropdownMenuBoxShadowSecond}`};
  overflow: hidden;
  border-radius: 6px;
`;

export const menuItem = css`
  font-size: 14px;
  line-height: 1;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 35px;
  padding: 0 20px;

  &[data-disabled] {
    color: lightgray;
    pointer-events: none;
  }

  &[data-highlighted] {
    outline: none;
    background-color: ${({theme}) => theme.dropdownMenuHighlight};
  }
`;

export const dropdownItem = css`
  min-height: 50px;
  line-height: 1;
  padding: 10px 15px;
`;

export const formItem = css`
  font-size: 14px;
  border: ${({theme}) => `1px solid ${theme.formItemBorder}`};
  border-radius: 7px;
  box-sizing: border-box;
`;

export const formItemLabel = css`
  display: flex;
  flex-basis: 100%;
  font-size: 10px;
  font-weight: 400;
  padding-bottom: 0.25rem;
  line-height: 0.5rem;
  color: ${({theme}) => theme.formItemLabel};
`;
