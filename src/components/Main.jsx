import React from "react";
// import Constants from "expo-constants";
import { View, StyleSheet, Dimensions } from "react-native";
import theme from "../theme";

let ScreenHeight = Dimensions.get("window").height;

import Navigation from "../Navigation";

const Main = () => {
  return (
    <View style={mainStyle.container}>
      <Navigation />
    </View>
  );
};

const mainStyle = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.background,
    height: ScreenHeight,
    flexDirection: "column",
  },
});

export default Main;
