import React, { useCallback, useEffect, useState } from "react";
import Main from "./src/components/Main";
import { StatusBar, View } from "react-native";
import theme from "./src/theme";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as Notification from "expo-notifications";

SplashScreen.preventAutoHideAsync();

Notification.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: true,
      shouldSetBadge: true,
      shouldShowAlert: true,
    };
  },
});

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={{ backgroundColor: theme.colors.background }}
      onLayout={onLayoutRootView}
    >
      <StatusBar
        animated={true}
        backgroundColor={theme.colors.background}
        barStyle="light-content"
      />
      <Main />
    </View>
  );
}
