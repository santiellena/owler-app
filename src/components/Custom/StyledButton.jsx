import React from "react";
import { StyleSheet, Button } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  span: {
    fontSize: theme.fontSizes.span,
  },
  background: {
    color: theme.colors.mainButton,
  },
});

export default function StyledButton({ bold, span, background, title, style }) {
  const buttonStyles = [
    styles.text,
    bold && styles.bold,
    span && styles.span,
    background && styles.background,
    style,
  ];
  return (
    <Button
      style={buttonStyles}
      title={title}
      color={theme.colors.mainButton}
    />
  );
}
