import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import theme from "../theme";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const onPress = () => {};

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.shadowButton}>
        <FontAwesome name="home" size={22} color={theme.colors.textPrimary} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <FontAwesome name="plus" size={24} color={theme.colors.textPrimary} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} style={styles.shadowButton}>
        <Ionicons name="clipboard" size={22} color={theme.colors.textPrimary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Footer;
