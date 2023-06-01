import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import StyledText from "../../Custom/StyledText";
import theme from "../../../theme";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CryptoHeader = ({ image, name }) => {
  const navigator = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigator.navigate("ListScreen")}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={24}
            color={theme.colors.textPrimary}
          />
        </TouchableOpacity>
        <StyledText span={true}>{name}</StyledText>
        <View style={styles.buttonContainer}>
          <AntDesign
            name="search1"
            size={20}
            color={theme.colors.textPrimary}
          />
          <Image style={styles.image} source={{ uri: image }} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
  },
  input: {
    backgroundColor: theme.colors.item,
    color: theme.colors.textPrimary,
    height: 45,
    marginTop: 13,
    borderRadius: 10,
    padding: 10,
    fontFamily: theme.fonts.regular,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 40,
    width: 40,
    backgroundColor: theme.colors.shadowText,
    borderRadius: 20,
    marginLeft: 15,
  },
  back: {
    backgroundColor: theme.colors.mainButton,
    height: 37,
    width: 37,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderRadius: 10,
    padding: 0,
    marginRight: 10,
  },
  search: {
    text: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSizes.smTitle,
      fontWeight: theme.fontWeights.bold,
      fontFamily: theme.fonts.inter,
    },
    button: {
      backgroundColor: theme.colors.background,
    },
  },
});

export default CryptoHeader;
