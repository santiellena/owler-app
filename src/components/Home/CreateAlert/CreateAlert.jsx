import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import CreateAlertHeader from "./CreateAlertHeader";
import theme from "../../../theme";
import StyledText from "../../Custom/StyledText";
import { useNavigation } from "@react-navigation/native";

const CreateAlert = () => {
  const navigator = useNavigation();
  return (
    <View style={{ paddingVertical: 20, paddingHorizontal: 30 }}>
      <CreateAlertHeader />
      <View style={styles.development}>
        <StyledText span={true}>
          Unfortunately, this functionality is not yet available...
        </StyledText>
      </View>
      <TouchableOpacity style={styles.back} onPress={() => navigator.goBack()}>
        <Text style={styles.text}>Go Back!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  development: {
    backgroundColor: theme.colors.item,
    width: "100%",
    height: "30%",
    borderRadius: 15,
    marginTop: 15,
    padding: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  back: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    height: 53,
    width: "100%",
    borderRadius: 18,
    backgroundColor: theme.colors.mainButton,
    marginTop: 10,
  },
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.span,
    fontWeight: theme.fontWeights.normal,
  },
});

export default CreateAlert;
