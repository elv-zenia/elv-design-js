import React from "react";
import styled from "styled-components";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import PropTypes from "prop-types";

const AspectRatio = ({
  image,
  alt,
  ratio=(16 / 9),
  width=300,
  borderRadius=5,
  className=""
}) => {
  const AspectRatioRoot = AspectRatioPrimitive.Root;

  return (
    <Wrapper width={width} borderRadius={borderRadius} className={className}>
      <AspectRatioRoot ratio={ratio}>
        <Img
          src={image}
          alt={alt}
        />
      </AspectRatioRoot>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: ${({borderRadius}) => `${borderRadius}px`};
  overflow: hidden;
  width: ${({width}) => `${width}px`};
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

AspectRatio.propTypes = {
  /**
   * A url to load an image from.
   */
  image: PropTypes.node.isRequired,

  /**
   * Alternative text to describe the aspect ratio.
   */
  alt: PropTypes.string,

  /**
   * Defines the ratio of the aspect ratio.
   */
  ratio: PropTypes.number,

  /**
   * Defines the width of the aspect ratio.
   */
  width: PropTypes.number,

  /**
   * Defines the border radius of the aspect ratio.
   */
  borderRadius: PropTypes.number,

  /**
   * An optional className to be added.
   */
  className: PropTypes.string
};

export default AspectRatio;
