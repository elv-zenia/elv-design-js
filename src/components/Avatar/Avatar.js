import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledAvatar = styled(AvatarPrimitive.Root)`
  overflow: hidden;
  width: 45px;
  height: 45px;
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
  line-height: 1;
`;

const Avatar = ({text, image, alt}) => {
  const AvatarRoot = StyledAvatar;
  const AvatarImage = StyledImage;
  const AvatarFallback = StyledFallback;

  return (
    <div>
      <AvatarRoot>
        <AvatarImage src={image} alt={alt} />
        <AvatarFallback>{ text }</AvatarFallback>
      </AvatarRoot>
    </div>
  );
};

Avatar.propTypes = {
  /**
   * An element that renders when the image hasn't rendered
   */
  text: PropTypes.string,

  /**
   * The image to render
   */
  image: PropTypes.string,

  /**
   * text
   */
  alt: PropTypes.string
};

export default Avatar;
