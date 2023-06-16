import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import useSecret from "./hooks/useSecret";

import Notifications from "./Notifications";

//Screens
import Home from "./components/Home/Home";
import CryptoList from "./components/CryptoList/CryptoList";
import ApiSetup from "./components/ApiSetup/ApiSetup";
import theme from "./theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnAlert from "./components/Home/OnAlert/OnAlert";
import CreateAlert from "./components/Home/CreateAlert/CreateAlert";
import Crypto from "./components/CryptoList/AlertsInCrypto/AlertsInCrypto";
import CryptoModal from "./components/Home/OnAlert/CryptoModal";
import AsyncStorage from "./AsyncStorage";

const ListStackNavigator = createNativeStackNavigator();
const HomeStackNavigator = createNativeStackNavigator();
const MainStackNavigator = createNativeStackNavigator();

function ListStack() {
  return (
    <ListStackNavigator.Navigator initialRouteName="ListScreen">
      <ListStackNavigator.Screen
        name="ListScreen"
        component={CryptoList}
        options={{ title: "", headerShown: false }}
      />
      <ListStackNavigator.Screen
        name="CryptoScreen"
        component={Crypto}
        options={{ title: "", headerShown: false }}
      />
    </ListStackNavigator.Navigator>
  );
}

function HomeStack() {
  return (
    <HomeStackNavigator.Navigator initialRouteName="Home">
      <HomeStackNavigator.Group>
        <HomeStackNavigator.Screen
          name="HomeScreen"
          component={Home}
          options={{ title: "", headerShown: false }}
        />
        <HomeStackNavigator.Screen
          name="OnAlertScreen"
          component={OnAlert}
          options={{ title: "", headerShown: false }}
        />
        <HomeStackNavigator.Screen
          name="CreateAlertScreen"
          component={CreateAlert}
          options={{ title: "", headerShown: false }}
        />
      </HomeStackNavigator.Group>
      <HomeStackNavigator.Group screenOptions={{ presentation: "modal" }}>
        <HomeStackNavigator.Screen
          name="CryptoModalScreen"
          component={CryptoModal}
          options={{ title: "", headerShown: false }}
        />
      </HomeStackNavigator.Group>
    </HomeStackNavigator.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  const [icon, setIcon] = useState(false);
  AsyncStorage.getWatchingStatus().then((e) => {
    if (e == "0") {
      setIcon(false);
    } else {
      setIcon(true);
    }
  });

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.textPrimary,
        tabBarActiveBackgroundColor: theme.colors.background,
        tabBarInactiveBackgroundColor: theme.colors.background,
        tabBarInactiveTintColor: theme.colors.inactive,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: "5%",
          borderWidth: 0,
          borderColor: theme.colors.background,
          width: "100%",
        },
        tabBarItemStyle: {
          marginBottom: 20,
          width: "100%",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={styles.shadowButton}>
              <FontAwesome name="home" size={size} color={color} />
            </View>
          ),
          title: "",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Record"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={styles.record}>
              {!icon && (
                <FontAwesome5
                  name="record-vinyl"
                  size={38}
                  color={theme.colors.record}
                />
              )}
              {icon && (
                <FontAwesome
                  name="stop"
                  size={38}
                  color={theme.colors.record}
                />
              )}
            </View>
          ),
          title: "",
          headerShown: false,
        }}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            // Prevent default action
            e.preventDefault();
            if (icon == false) {
              Notifications.watch(false);
              setIcon(true);
            } else {
              Notifications.watch(true);
              setIcon(false);
            }
          },
        })}
      />
      <Tab.Screen
        name="List"
        component={ListStack}
        screenOptions={{}}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={styles.shadowButton}>
              <Ionicons name="clipboard" size={size} color={color} />
            </View>
          ),
          title: "",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

function MainStack() {
  return (
    <MainStackNavigator.Navigator>
      <MainStackNavigator.Group>
        <MainStackNavigator.Screen
          name="Tabs"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <MainStackNavigator.Screen
          name="ApiSetup"
          component={ApiSetup}
          options={{ headerShown: false }}
        />
      </MainStackNavigator.Group>
    </MainStackNavigator.Navigator>
  );
}

const styles = StyleSheet.create({
  record: {
    height: 50,
    width: 50,
    backgroundColor: theme.colors.textPrimary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 30,
  },
  shadowButton: {
    height: 33,
    width: 33,
    backgroundColor: theme.colors.background,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: 48,
    width: 48,
    backgroundColor: theme.colors.mainButton,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    padding: 0,
  },
  add: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.smTitle,
    fontWeight: theme.fontWeights.bold,
  },
});

function Navigation() {
  return (
    <NavigationContainer
      theme={{ colors: { background: theme.colors.background } }}
    >
      <MainStack />
    </NavigationContainer>
  );
}

export default Navigation;
