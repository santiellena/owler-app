import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import StyledText from "../Custom/StyledText";
import theme from "../../theme";

const HomeHeader = () => {
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <StyledText span={true}>Home</StyledText>
        <View style={styles.buttonContainer}>
          <Image
            style={styles.image}
            source={require("../../../assets/images/buho3.png")}
          />
        </View>
      </View>
      <StyledText style={{ marginTop: 5 }} title={true}>
        Hello Erlich Bachman
      </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
  },
  input: {
    backgroundColor: theme.colors.item,
    color: theme.colors.textPrimary,
    height: 39,
    marginTop: 13,
    borderRadius: 10,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginLeft: 15,
  },
  back: {
    text: {
      color: theme.colors.textPrimary,
      fontSize: 20,
      fontWeight: theme.fontWeights.normal,
    },
    button: {
      backgroundColor: theme.colors.mainButton,
      height: 37,
      width: 37,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      borderRadius: 10,
      padding: 0,
      marginRight: 10,
    },
  },
  search: {
    text: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSizes.smTitle,
      fontWeight: theme.fontWeights.bold,
    },
    button: {
      backgroundColor: theme.colors.background,
    },
  },
});

export default HomeHeader;
