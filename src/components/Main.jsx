import React from "react";
// import Constants from "expo-constants";
import { View, StyleSheet, Dimensions } from "react-native";
import theme from "../theme";

let ScreenHeight = Dimensions.get("window").height;
import { Route, Switch, Redirect } from "react-router-native";

import Home from "./Home";
import CryptoList from "./CryptoList";
import OnAlert from "./OnAlert";
import Footer from "./Footer";

const Main = () => {
  return (
    <View style={mainStyle.container}>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/list" exact>
          <CryptoList />
        </Route>
        <Route path="/alert" exact>
          <OnAlert />
        </Route>
      </Switch>
      <Redirect to="/" />
      <Footer />
    </View>
  );
};

const mainStyle = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    flex: 1,
    padding: 20,
    paddingHorizontal: 30,
    backgroundColor: theme.colors.background,
    height: ScreenHeight,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default Main;
