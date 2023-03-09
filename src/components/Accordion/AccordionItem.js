import React from "react";
import ImageIcon from "../ImageIcon";
import styled, {keyframes} from "styled-components";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import PropTypes from "prop-types";

const AccordionItem = ({value, title, children, icon, disabled}) => {
  return (
    <StyledAccordionItem value={value} disabled={disabled}>
      <StyledAccordionHeader>
        <StyledAccordionTrigger>
          { title }
          <StyledIcon icon={icon} aria-hidden />
        </StyledAccordionTrigger>
      </StyledAccordionHeader>
      <StyledAccordionContent>
        <StyledAccordionContentText>
          { children }
        </StyledAccordionContentText>
      </StyledAccordionContent>
    </StyledAccordionItem>
  );
};

const slideUp = keyframes({
  from: {height: "var(--radix-accordion-content-height)"},
  to: {height: 0}
});

const slideDown = keyframes({
  from: {height: 0},
  to: {height: "var(--radix-accordion-content-height)"}
});

const StyledAccordionItem = styled(AccordionPrimitive.Item)`
  overflow: hidden;
  margin-top: 1px;
  padding: 0 1rem;
  border-top: ${({theme}) => `1px solid ${theme.accordionBorder}`};
  
  &:last-child {
    border-bottom: ${({theme}) => `1px solid ${theme.accordionBorder}`};
  }
  
  &[data-disabled] {
    color: ${({theme}) => theme.textDisabled};
    pointer-events: none;
  }
`;

const StyledAccordionHeader = styled(AccordionPrimitive.Header)`
  display: flex;
  margin: 1rem 0;
`;

const StyledAccordionTrigger = styled(AccordionPrimitive.Trigger)`
  background-color: transparent;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  line-height: 1rem;
  font-size: 1.25rem;
  height: 3rem;
`;

const StyledIcon = styled(ImageIcon)`
  transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);

  [data-state="open"] & {
    transform: rotate(135deg);
  },
`;

const StyledAccordionContent = styled(AccordionPrimitive.Content)`
  overflow: hidden;
  
  &[data-state="open"] {
     animation: ${slideDown} 0.3s cubic-bezier(0.87, 0, 0.13, 1) forwards;
  }

  &[data-state="closed"] {
    animation: ${slideUp} 0.3s cubic-bezier(0.87, 0, 0.13, 1) forwards;
  }
`;

const StyledAccordionContentText = styled.div`
  padding-top: 0.5rem;
  padding-bottom: calc(1.5rem + 8px);
  padding-right: 25%;
`;

AccordionItem.propTypes = {
  /**
   * The value of the accordion item.
   */
  value: PropTypes.string.isRequired,

  /**
   * The title used for the accordion trigger.
   */
  title: PropTypes.string.isRequired,

  /**
   * The contents of the accordion item when expanded.
   */
  children: PropTypes.element.isRequired,

  /**
   * The icon to use as the accordion trigger.
   */
  icon: PropTypes.string.isRequired,

  /**
   * When true, prevents the user from interacting with the
   * accordion item.
   */
  disabled: PropTypes.bool
};

export default AccordionItem;
