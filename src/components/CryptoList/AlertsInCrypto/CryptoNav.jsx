import React from "react";
import { View, StyleSheet } from "react-native";
import CustomButton from "../../Custom/CustomButton";
import theme from "../../../theme";

const CryptoNav = () => {
  return (
    <View style={styles.container}>
      <CustomButton
        title="Alerts"
        style={styles.alerts}
        color={theme.colors.mainButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 8,
  },
  alerts: {
    text: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSizes.span,
      fontWeight: theme.fontWeights.bold,
      fontFamily: theme.fonts.medium,
    },
    button: {
      backgroundColor: theme.colors.mainButton,
      width: 140,
      height: 32,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 17,
      marginTop: 10,
      marginRight: 10,
    },
  },
});

export default CryptoNav;
