import React from "react";
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

const Alert = ({ description, period }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("OnAlertScreen")}
      style={styles.container}
    >
      <View style={styles.icon}>
        <MaterialCommunityIcons
          name="bell-ring"
          size={19}
          color={theme.colors.textPrimary}
        />
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
              { backgroundColor: theme.colors.icon, width: "30%" })
            }
          />
        </View>
        <View style={styles.progressData}>
          <Text style={styles.progressText}>3/10</Text>
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
