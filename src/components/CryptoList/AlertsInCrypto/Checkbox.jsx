import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "../../../theme";

function Checkbox({ onChange, checked }) {
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={onChange}
    >
      {checked && <Ionicons name="checkmark" size={24} color="white" />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  checkboxBase: {
    width: 33,
    height: 33,
    borderRadius: 12,
    backgroundColor: theme.colors.icon,
    padding: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    position: "absolute",
  },
  checkboxChecked: {
    backgroundColor: theme.colors.icon,
  },
});

export default Checkbox;
