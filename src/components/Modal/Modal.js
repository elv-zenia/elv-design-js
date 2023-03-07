import React from "react";
import * as ModalPrimitive from "@radix-ui/react-dialog";
import styled, {css} from "styled-components";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import {CloseIcon} from "../../static/icons/Icons";

const Modal = ({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  cancelText="Cancel",
  CancelCallback,
  confirmText="Confirm",
  ConfirmCallback,
  danger,
  children,
  size="sm",
  ...rest
}) => {
  const ModalRoot = ModalPrimitive.Root;
  const ModalTrigger = ModalPrimitive.Trigger;
  const ModalTitle = ModalPrimitive.Title;
  const ModalDescription = ModalPrimitive.Description;
  const ModalClose = ModalPrimitive.Close;

  return (
    <ModalRoot open={open} onOpenChange={onOpenChange} {...rest}>
      <ModalTrigger asChild>{ trigger }</ModalTrigger>
      <StyledModalOverlay>
        <StyledModalContent size={size}>
          <ModalTitle>{ title }</ModalTitle>
          <StyledModalBody>
            {
              description &&
              <ModalDescription>{description}</ModalDescription>
            }
            { children }
          </StyledModalBody>
          <Flex>
            <ModalClose asChild>
              <Button variant="ghost" OnClick={CancelCallback}>{ cancelText }</Button>
            </ModalClose>
            <ModalClose asChild>
              <Button variant={danger ? "danger" : "primary"} OnClick={ConfirmCallback}>
                { confirmText }
              </Button>
            </ModalClose>
          </Flex>
          <ModalClose asChild>
            <CloseButton
              iconOnly={true}
              icon={CloseIcon}
              variant="ghost"
            />
          </ModalClose>
        </StyledModalContent>
      </StyledModalOverlay>
    </ModalRoot>
  );
};

const MaxHeightMixin = (value) => css`
  max-height: ${value}%;
`;

const MaxWidthMixin = (value) => css`
  max-width: ${value}%;
`;

const xsStyles = css`
  ${MaxHeightMixin(48)};
  ${MaxWidthMixin(24)};
`;

const smStyles = css`
  ${MaxHeightMixin(72)};
  ${MaxWidthMixin(36)};
`;

const mdStyles = css`
  ${MaxHeightMixin(84)};
  ${MaxWidthMixin(48)};
`;

const lgStyles = css`
  ${MaxHeightMixin(96)};
  ${MaxWidthMixin(72)};
`;

const StyledModalOverlay = styled(ModalPrimitive.Overlay)`
  background-color: ${({theme}) => theme.modalOverlayBg};
  inset: 0;
  position: fixed;
`;

const StyledModalContent = styled(ModalPrimitive.Content)`
  background: ${({theme}) => theme.modalBg};
  border-radius: 6px;
  box-shadow: rgb(14 18 22 / 35%) 0 10px 38px -10px, rgb(14 18 22 / 20%) 0 10px 20px -15px;
  color: ${({theme}) => theme.modalTextColor};
  display: flex;
  flex-direction: column;
  left: 50%;
  padding: 2rem;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;

  ${({size}) => {
  switch(size) {
    case "xs":
      return xsStyles;
    case "sm":
    default:
      return smStyles;
    case "md":
      return mdStyles;
    case "lg":
      return lgStyles;
  }}
  }
`;

const StyledModalBody = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
  
  button:first-child {
    margin-right: 0.5rem;
  }
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
`;

Modal.propTypes  = {
  /**
   * The controlled open state of the modal. Must be used with onOpenChange.
   */
  open: PropTypes.bool,

  /**
   * Event handler called when the open state of the modal changes.
   */
  onOpenChange: PropTypes.func,

  /**
   * The button that opens the modal.
   */
  trigger: PropTypes.object,

  /**
   * The title of the modal.
   */
  title: PropTypes.string,

  /**
   * The description in the modal.
   */
  description: PropTypes.string,

  /**
   * The text for the cancel button.
   */
  cancelText: PropTypes.string,

  /**
   * Event handler called when the cancel button is clicked.
   */
  CancelCallback: PropTypes.func,

  /**
   * The text for the confirm button.
   */
  confirmText: PropTypes.string,

  /**
   * Event handler called when the confirm button is clicked.
   */
  ConfirmCallback: PropTypes.func,

  /**
   * Specifies a danger variant for the primary button.
   */
  danger: PropTypes.bool,

  /**
   * The content of the modal.
   */
  children: PropTypes.node,

  /**
   * Determines the size of the modal.
   */
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"])
};

export default Modal;
