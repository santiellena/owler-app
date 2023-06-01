import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import Alert from "./Alert";
import StyledText from "../../Custom/StyledText";
import theme from "../../../theme";
import { useNavigation } from "@react-navigation/native";
import alertList from "../../../alertList";

const AlertList = () => {
  const navigator = useNavigation();
  return (
    <View>
      <StyledText smTitle={true} style={{ marginTop: 20, marginBottom: 10 }}>
        Alerts
      </StyledText>
      <FlatList
        data={alertList}
        style={styles.container}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Alert description={item.description} period={item.period} />
        )}
      />

      <TouchableOpacity
        style={styles.create}
        onPress={() => navigator.navigate("CreateAlertScreen")}
      >
        <Text style={styles.text}>Create Alert</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.span,
    fontWeight: theme.fontWeights.normal,
  },
  create: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    height: 53,
    width: 355,
    borderRadius: 18,
    backgroundColor: theme.colors.mainButton,
  },
});

export default AlertList;
