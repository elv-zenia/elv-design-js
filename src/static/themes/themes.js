import {neutral, gradient} from "./colors";
import {primaryFont} from "./typography";

export const lightTheme = {};

export const darkTheme = {
  // Font Face
  fontPrimary: primaryFont,
  // Text
  textPrimary: neutral[10],
  // Buttons
  buttonPrimary: gradient[10],
  buttonSecondary: gradient[20],
  buttonBorder: neutral[30]
};
