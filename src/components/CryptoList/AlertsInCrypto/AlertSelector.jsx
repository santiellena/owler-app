import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import theme from "../../../theme";
import StyledText from "../../Custom/StyledText";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Checkbox from "./Checkbox";
import AsyncStorage from "../../../AsyncStorage";

const removeCryptoFromAlert = async ({
  description,
  idCrypto,
  setChecked,
  checked,
}) => {
  setChecked(!checked);
  await AsyncStorage.changeStatusCryptoFromAlert({
    idCrypto,
    alertDescription: description,
  });
};

const AlertSelector = ({ description, period, active, selected, idCrypto }) => {
  const [checked, setChecked] = useState(selected);

  return (
    <TouchableOpacity
      style={active ? styles.mainContainer : styles.inactive}
      disabled={!active}
      onPress={async () =>
        await removeCryptoFromAlert({
          description,
          idCrypto,
          setChecked,
          checked,
        })
      }
    >
      <View style={styles.container}>
        <View style={styles.icon}>
          {active ? (
            <Checkbox
              onChange={async () =>
                await removeCryptoFromAlert({
                  description,
                  idCrypto,
                  setChecked,
                  checked,
                })
              }
              checked={checked}
              active={active}
            />
          ) : (
            <View style={styles.inactiveCheckbox}>
              <Entypo name="cross" size={24} color={theme.colors.textDanger} />
            </View>
          )}
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
        {active ? (
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color={theme.colors.textPrimary}
          />
        ) : (
          <StyledText danger={true} small={true}>
            Disabled
          </StyledText>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  inactiveCheckbox: {
    width: 33,
    height: 33,
    borderRadius: 12,
    backgroundColor: theme.colors.item,
    padding: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    position: "absolute",
  },
  checkbox: {
    margin: 2,
  },
  inactive: {
    height: 63,
    width: 372,
    padding: 13,
    backgroundColor: theme.colors.inactive,
    borderRadius: 15,
    marginTop: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
