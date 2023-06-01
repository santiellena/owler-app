import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import theme from "../../../theme";
import StyledText from "../../Custom/StyledText";
import { MaterialIcons } from "@expo/vector-icons";
import Checkbox from "./Checkbox";

const AlertSelector = ({ description, period, idCrypto }) => {
  const [checked, setChecked] = useState(false);

  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => setChecked(!checked)}
    >
      <View style={styles.container}>
        <View style={styles.icon}>
          <Checkbox onChange={() => setChecked(!checked)} checked={checked} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <StyledText span={true} style={{ marginRight: 8 }}>
            {description}
          </StyledText>
          <StyledText small={true} shadowText={true} style={{ marginRight: 8 }}>
            {period} Period
          </StyledText>
        </View>
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
  checkbox: {
    margin: 2,
  },
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
  text: {
    color: theme.colors.textPrimary,
  },
  label: {
    color: theme.colors.label,
  },
  icon: {
    width: 33,
    height: 33,
    borderRadius: 12,
    backgroundColor: theme.colors.icon,
    borderColor: theme.colors.textPrimary,
    borderWidth: 1,
    marginRight: 15,
  },
});

export default AlertSelector;
