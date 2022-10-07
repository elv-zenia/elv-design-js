import {neutral, gradient, temp, dark, purple, rgb} from "./colors";
import {primaryFont, typeScale} from "./typography";

export const lightTheme = {
  //
  // Avatar
  //
  avatarBg: dark[10],
  fallbackBg: neutral[30],
  fallbackTextColor: neutral[10],
  //
  // Button
  //
  buttonPrimaryBg: gradient[10],
  buttonPrimaryTextColor: neutral[10],
  buttonSecondaryBg: neutral[10],
  buttonSecondaryTextColor: dark[10],
  buttonSecondaryBorder: dark[10],
  buttonDangerBg: temp[10],
  buttonDangerTextColor: neutral[10],
  buttonFontSize: typeScale.button1,
  //
  //
  // Checkbox
  //
  checkboxBg: neutral[10],
  checkboxBorder: neutral[30],
  checkboxIcon: dark[10],
  checkboxFocus: purple[20],
  //
  //
  // Dialog
  //
  dialogBg: neutral[10],
  dialogTextColor: dark[10],
  dialogBoxShadow: rgb[30],
  dialogOverlayBg: rgb[10],
  //
  // Font Face
  //
  fontPrimary: primaryFont,
  //
  // Label
  //
  labelColor: dark[10],
  //
  // Text
  //
  textPrimaryColor: dark[10]
};

export const darkTheme = {
  //
  // Avatar
  //
  avatarBg: dark[10],
  fallbackBg: neutral[10],
  fallbackTextColor: dark[40],
  //
  // Button
  //
  buttonPrimaryBg: gradient[10],
  buttonSecondaryBg: gradient[20],
  buttonSecondaryBorder: neutral[30],
  buttonDangerBg: temp[10],
  buttonFontSize: typeScale.button1,
  //
  // Checkbox
  //
  checkboxBg: neutral[10],
  checkboxBorder: neutral[20],
  checkboxIcon: dark[10],
  checkboxFocus: purple[10],
  //
  //
  // Dialog
  //
  dialogBg: gradient[20],
  dialogTextColor: neutral[10],
  dialogBoxShadow: rgb[30],
  dialogOverlayBg: rgb[20],
  //
  // Font Face
  //
  fontPrimary: primaryFont,
  //
  // Label
  //
  labelColor: neutral[10],
  //
  // Text
  //
  textPrimaryColor: neutral[10]
};
