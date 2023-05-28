import React from "react";
import { View, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";
import theme from "../theme";

const ListNav = () => {
  return (
    <View style={styles.container}>
      <CustomButton
        title="All"
        style={styles.all}
        color={theme.colors.mainButton}
      />
      <CustomButton title="Following" style={styles.following} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 8,
  },
  all: {
    text: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSizes.span,
      fontWeight: theme.fontWeights.bold,
      fontFamily: theme.fonts.medium,
    },
    button: {
      backgroundColor: theme.colors.mainButton,
      width: 100,
      height: 32,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 17,
      marginTop: 10,
    },
  },
  following: {
    text: {
      color: theme.colors.shadowText,
      fontSize: theme.fontSizes.span,
      fontWeight: theme.fontWeights.bold,
    },
    button: {
      backgroundColor: theme.colors.background,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: 120,
      height: 32,
      borderRadius: 17,
      marginTop: 10,
    },
  },
});

export default ListNav;
