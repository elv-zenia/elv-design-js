import React, {useState} from "react";
import SVG from "react-inlinesvg";
import PropTypes from "prop-types";
import styled, {css} from "styled-components";

const ImageIcon = ({
  icon,
  alternateIcon,
  alt,
  title,
  ...rest
}) => {
  const [error, setError] = useState(false);
  const currentIcon = error ? alternateIcon : icon;
  const handleError = error ? undefined : () => setError(true);

  if(!currentIcon) { return null; }

  if(currentIcon.toLowerCase().endsWith(".svg")) {
    return (
      <StyledSVG
        src={currentIcon}
        title={title}
        {...rest}
      />
    );
  } else {
    return (
      <StyledImage
        alt={alt}
        src={currentIcon}
        onError={handleError}
        {...rest}
      />
    );
  }
};

const dimensionStyles = css`
  height: 15px;
  width: 15px;
`;

const StyledSVG = styled(SVG)`
  ${dimensionStyles};
`;

const StyledImage = styled.img`
  ${dimensionStyles}
`;

ImageIcon.propTypes = {
  /**
   * The icon string to use.
   */
  icon: PropTypes.string.isRequired,

  /**
   * An icon that is displayed in the event of an error.
   */
  alternateIcon: PropTypes.string,

  /**
   * An optional class name to be added.
   */
  className: PropTypes.string,

  /**
   * Alternative text to describe the image. Not necessary
   * for SVG images.
   */
  alt: PropTypes.string,

  /**
   * Title text for the SVG image.
   */
  title: PropTypes.string,
};

export default ImageIcon;
