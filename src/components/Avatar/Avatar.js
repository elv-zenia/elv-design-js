import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import styled from "styled-components";
import PropTypes from "prop-types";

const Avatar = ({text, image, alt, ...rest}) => {
  const AvatarRoot = StyledAvatar;
  const AvatarImage = StyledImage;
  const AvatarFallback = StyledFallback;

  return (
    <AvatarRoot {...rest}>
      <AvatarImage src={image} alt={alt} />
      <AvatarFallback>{ text }</AvatarFallback>
    </AvatarRoot>
  );
};

const StyledAvatar = styled(AvatarPrimitive.Root)`
  overflow: hidden;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  background-color: ${({theme}) => theme.avatarBg};
`;

const StyledImage = styled(AvatarPrimitive.Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: inherit;
`;

const StyledFallback = styled(AvatarPrimitive.Fallback)`
  width: 100%;
  height: 100%;
  color: ${({theme}) => theme.fallbackTextColor};
  background-color: ${({theme}) => theme.fallbackBg};
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1rem;
`;

Avatar.propTypes = {
  /**
   * Text that renders when the image hasn't loaded.
   */
  text: PropTypes.string,

  /**
   * A url to load an image from.
   */
  image: PropTypes.string,

  /**
   * Alternative text to describe the avatar.
   */
  alt: PropTypes.string
};

export default Avatar;
