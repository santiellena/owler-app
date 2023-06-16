import React, { useEffect } from "react";
// import Constants from "expo-constants";
import { View, StyleSheet, Dimensions } from "react-native";
import theme from "../theme";
import AsyncStorage from "../AsyncStorage";
let ScreenHeight = Dimensions.get("window").height;
import * as TaskManager from "expo-task-manager";
import Navigation from "../Navigation";
import Rsi30Task from "../services/Rsi30Task";

const Main = () => {
  useEffect(() => {
    const checkTaskInactive = async () => {
      const watching = await AsyncStorage.getWatchingStatus();
      if (watching == 1) {
        Rsi30Task.unregister();
        const tasks = await TaskManager.getRegisteredTasksAsync();
        console.log(tasks);
        if (!tasks[0]) {
          console.log("Register from inactivity");
          Rsi30Task.register();
        }
      }
    };
    const firstTime = async () => {
      const first = await AsyncStorage.getInitialData();

      if (first == null) {
        await AsyncStorage.storeInitialData();
      }
      // await AsyncStorage.removeValue("INITIAL_DATA_KEY");
      // await AsyncStorage.removeValue("WATCHING_STATUS_KEY");
      // await AsyncStorage.removeValue("POINTER_KEY");
      // await AsyncStorage.removeValue("HOUR_POINTER_KEY");
      // await AsyncStorage.removeValue("API_SECRET_KEY");
      // await AsyncStorage.removeValue("WELCOME_KEY");
    };
    checkTaskInactive().catch((e) => console.log(e));
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
