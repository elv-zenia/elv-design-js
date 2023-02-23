import React, {useState} from "react";
import SVG from "react-inlinesvg";
import PropTypes from "prop-types";
import styled, {css} from "styled-components";

const ImageIcon = ({icon, alternateIcon, className, alt, title, props}) => {
  const [error, setError] = useState(false);
  const currentIcon = error ? alternateIcon : icon;
  const handleError = error ? undefined : () => setError(true);

  if(!currentIcon) { return null; }

  if(currentIcon.toLowerCase().endsWith(".svg")) {
    return (
      <StyledSVG src={currentIcon} className={className} alt={alt} />
    );
  } else {
    return (
      <StyledImage
        title={title}
        alt={alt}
        className={className}
        src={currentIcon}
        onError={handleError}
        {...props}
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

const StyledImage = styled("img")`
  ${dimensionStyles}
`;

ImageIcon.propTypes = {
  /**
   * The icon string to use
   */
  icon: PropTypes.string.isRequired,

  /**
   * An icon that is displayed in the event of an error
   */
  alternateIcon: PropTypes.string,

  /**
   * Any additional class names to use
   */
  className: PropTypes.string,

  /**
   * Alternative text to describe the icon
   */
  alt: PropTypes.string,

  /**
   * Title text for the icon
   */
  title: PropTypes.string,

  /**
   * Additional props
   */
  props: PropTypes.object
};

export default ImageIcon;
