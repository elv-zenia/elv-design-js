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
  buttonGhostHover: dark[40],
  buttonTooltipBg: neutral[20],
  buttonFontSize: typeScale.button1,
  //
  //
  // Checkbox
  //
  checkboxBg: neutral[10],
  checkboxBorder: neutral[30],
  checkboxIcon: neutral[10],
  checkboxFocus: purple[20],
  checkboxCheckedBg: purple[10],
  //
  // Dropdown
  //
  dropdownFocus: purple[10],
  //
  // Dropdown Menu
  //
  dropdownMenuBg: neutral[10],
  dropdownMenuHighlight: neutral[20],
  dropdownMenuBoxShadow: rgb[30],
  dropdownMenuBoxShadowSecond: rgb[40],
  //
  //
  // Modal
  //
  modalBg: neutral[10],
  modalTextColor: dark[10],
  modalBoxShadow: rgb[30],
  modalOverlayBg: rgb[10],
  //
  // Radio
  //
  radioBorder: dark[10],
  radioIndicatorBg: dark[10],
  //
  // Tabs
  //
  tabTextColor: purple[50],
  tabSelectedBorder: purple[40],
  //
  // Toggle Group
  //
  toggleGroupBg: "transparent",
  toggleGroupBorder: neutral[20],
  toggleGroupSelectedBorder: purple[40],
  toggleGroupSelectedTextColor: purple[40],
  //
  // Tooltip
  //
  tooltipBg: neutral[20],
  //
  // Font Face
  //
  fontPrimary: primaryFont,
  //
  // Form Item
  //
  formItemBorder: neutral[20],
  formItemLabel: neutral[30],
  //
  // Label
  //
  labelColor: dark[10],
  //
  // Text
  //
  textPrimaryColor: dark[10],
  textDisabled: neutral[20]
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
  buttonTooltipBg: neutral[30],
  buttonFontSize: typeScale.button1,
  //
  // Checkbox
  //
  checkboxBg: neutral[10],
  checkboxBorder: neutral[20],
  checkboxIcon: dark[10],
  checkboxFocus: purple[10],
  //
  // Dropdown
  //
  dropdownFocus: purple[10],
  //
  // Dropdown Menu
  //
  dropdownMenuBg: neutral[10],
  dropdownMenuHighlight: neutral[20],
  dropdownMenuBoxShadow: rgb[30],
  dropdownMenuBoxShadowSecond: rgb[40],
  //
  //
  // Modal
  //
  modalBg: gradient[20],
  modalTextColor: neutral[10],
  modalBoxShadow: rgb[30],
  modalOverlayBg: rgb[20],
  //
  // Radio
  //
  radioBorder: neutral[10],
  radioIndicatorBg: neutral[10],
  //
  // Toggle Group
  //
  toggleGroupBg: "transparent",
  toggleGroupBorder: neutral[20],
  toggleGroupSelectedBorder: purple[40],
  toggleGroupSelectedTextColor: purple[40],
  //
  // Tabs
  //
  tabTextColor: purple[50],
  tabSelectedBorder: purple[40],
  //
  // Tooltip
  //
  tooltipBg: neutral[10],
  //
  // Font Face
  //
  fontPrimary: primaryFont,
  //
  // Form Item
  //
  formItemBorder: neutral[10],
  formItemLabel: neutral[30],
  //
  // Label
  //
  labelColor: neutral[10],
  //
  // Text
  //
  textPrimaryColor: neutral[10],
  textDisabled: neutral[20]
};
