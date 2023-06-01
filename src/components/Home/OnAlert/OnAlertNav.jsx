import React from "react";
import { View, StyleSheet } from "react-native";
import CustomButton from "../../Custom/CustomButton";
import theme from "../../../theme";

const OnAlertNav = () => {
  return (
    <View style={styles.container}>
      <CustomButton
        title="On Alert"
        style={styles.overview}
        color={theme.colors.mainButton}
      />
      <CustomButton title="All" style={styles.list} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10,
    marginBottom: 8,
  },
  overview: {
    text: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSizes.span,
      fontFamily: theme.fonts.medium,
    },
    button: {
      backgroundColor: theme.colors.mainButton,
      width: 120,
      height: 32,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 17,
      marginTop: 10,
    },
  },
  list: {
    text: {
      color: theme.colors.shadowText,
      fontSize: theme.fontSizes.span,
      fontFamily: theme.fonts.medium,
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

export default OnAlertNav;
