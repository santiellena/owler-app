import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fonts.medium,
    fontWeight: theme.fontWeights.normal,
    color: theme.colors.textPrimary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
    fontFamily: theme.fonts.bold,
  },
  title: {
    fontSize: theme.fontSizes.title,
  },
  small: {
    fontSize: theme.fontSizes.small,
  },
  span: {
    fontSize: theme.fontSizes.span,
  },
  smTitle: {
    fontSize: theme.fontSizes.smTitle,
  },
  shadowText: {
    color: theme.colors.shadowText,
  },
  danger: {
    color: theme.colors.textDanger,
  },
});

export default function StyledText({
  children,
  bold,
  title,
  small,
  span,
  smTitle,
  shadowText,
  style,
  danger,
}) {
  const textStyles = [
    styles.text,
    bold && styles.bold,
    title && styles.title,
    small && styles.small,
    span && styles.span,
    smTitle && styles.smTitle,
    shadowText && styles.shadowText,
    danger && styles.danger,
    style,
  ];
  return <Text style={textStyles}>{children}</Text>;
}
