import React, { useCallback } from "react";
import Main from "./src/components/Main";
import { StatusBar } from "react-native";
import theme from "./src/theme";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NativeRouter } from "react-router-native";

SplashScreen.preventAutoHideAsync();

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
    <NativeRouter
      style={{ backgroundColor: theme.colors.background }}
      onLayout={onLayoutRootView}
    >
      <StatusBar
        animated={true}
        backgroundColor={theme.colors.background}
        barStyle="light-content"
      />
      <Main />
    </NativeRouter>
  );
}
