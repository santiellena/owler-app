import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import StyledText from "./StyledText";
import theme from "../theme";
import { MaterialIcons } from "@expo/vector-icons";

let coinStyle;

const Coin = ({ title, imageUrl, alert, onPress }) => {
  if (alert) {
    coinStyle = [
      {
        borderWidth: 0.3,
        borderColor: theme.colors.alert,
      },
      styles.mainContainer,
    ];
  } else coinStyle = styles.mainContainer;
  return (
    <TouchableOpacity onPress={onPress} style={coinStyle}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
        <StyledText span={true}>{title}</StyledText>
      </View>
      <View style={styles.arrow}>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          color={theme.colors.textPrimary}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 63,
    width: 372,
    padding: 13,
    backgroundColor: theme.colors.item,
    borderRadius: 15,
    marginTop: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    flexDirection: "row",
    backgroundColor: theme.colors.item,
    alignItems: "center",
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 33,
    width: 33,
    padding: 2,
    marginRight: 15,
    backgroundColor: theme.colors.textPrimary,
    borderRadius: 10,
  },
  image: {
    width: 27,
    height: 27,
    borderRadius: 3,
  },
  arrow: {
    marginRight: 10,
  },
});

export default Coin;
