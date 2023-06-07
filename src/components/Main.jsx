import React, { useEffect } from "react";
// import Constants from "expo-constants";
import { View, StyleSheet, Dimensions } from "react-native";
import theme from "../theme";
import AsyncStorage from "../AsyncStorage";
let ScreenHeight = Dimensions.get("window").height;

import Navigation from "../Navigation";

const Main = () => {
  useEffect(() => {
    const firstTime = async () => {
      const first = await AsyncStorage.getInitialData();
      if (first == null) {
        await AsyncStorage.storeInitialData();
      }
    };

    firstTime().catch((e) => console.log(e));
  }, []);
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
