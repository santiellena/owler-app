import React, { useEffect } from "react";

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
        if (!tasks[0]) {
          Rsi30Task.register();
        }
      }
    };
    const firstTime = async () => {
      const first = await AsyncStorage.getInitialData();

      if (first == null) {
        await AsyncStorage.storeInitialData();
      }
    };
    checkTaskInactive();
    firstTime();
  }, []);
  return (
    <View style={mainStyle.container}>
      <Navigation />
    </View>
  );
};

const mainStyle = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    height: ScreenHeight,
    flexDirection: "column",
  },
});

export default Main;
