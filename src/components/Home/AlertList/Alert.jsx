import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Animated,
} from "react-native";
import theme from "../../../theme";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import StyledText from "../../Custom/StyledText";

const getAmountCryptoActive = (cryptoList) => {
  let counter = 0;
  for (const crypto of cryptoList) {
    if (crypto[2] == true) {
      counter++;
    }
  }
  return counter;
};

const getWidthCryptoActive = (cryptoList) => {
  const amountCryptoActive = getAmountCryptoActive(cryptoList);
  return parseInt((amountCryptoActive * 100) / cryptoList.length);
};

const Alert = ({ description, period, active, id, cryptoList }) => {
  const navigation = useNavigation();
  const [amountCryptoActive, setAmountCryptoActive] = useState(
    getAmountCryptoActive(cryptoList)
  );
  const [widthCryptoActive, setWidthCryptoActive] = useState(
    getWidthCryptoActive(cryptoList)
  );
  let containerStyle = [];
  if (!active) {
    containerStyle.push(styles.container);
    containerStyle.push(styles.disabled);
  } else containerStyle.push(styles.container);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("OnAlertScreen", {
          description,
          id,
        })
      }
      style={containerStyle}
      disabled={!active}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name="bell-ring"
            size={19}
            color={theme.colors.textPrimary}
          />
        </View>
        {!active && (
          <StyledText small={true} danger={true}>
            Disabled
          </StyledText>
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{period} Period</Text>
        <Text style={styles.text}>{description}</Text>
      </View>
      <View style={styles.statusContainer}>
        <View style={styles.progressBar}>
          <Animated.View
            style={
              ([StyleSheet.absoluteFill],
              {
                backgroundColor: theme.colors.icon,
                width: `${widthCryptoActive}%`,
              })
            }
          />
        </View>
        <View style={styles.progressData}>
          <Text
            style={styles.progressText}
          >{`${amountCryptoActive}/${cryptoList.length}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  statusContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  disabled: {
    backgroundColor: theme.colors.blured,
  },
  progressBar: {
    height: 5,
    flexDirection: "row",
    width: "70%",
    backgroundColor: theme.colors.bar,
    borderWidth: 0,
    borderRadius: 10,
    marginRight: "3%",
    margiLeft: "3%",
  },
  progressData: {
    backgroundColor: theme.colors.icon,
    width: "25%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  progressText: {
    color: theme.colors.textPrimary,
    fontSize: 11,
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  container: {
    width: 168,
    height: 160,
    backgroundColor: theme.colors.item,
    padding: 10,
    borderRadius: 15,
    marginBottom: 20,
    marginRight: 20,
    justifyContent: "space-between",
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
    padding: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Alert;
