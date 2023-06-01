import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Animated,
  Image,
} from "react-native";
import theme from "../../../theme";
import { useNavigation } from "@react-navigation/native";
import StyledText from "../../Custom/StyledText";
import { MaterialIcons } from "@expo/vector-icons";

const CryptoModal = ({ route }) => {
  const {
    id,
    name,
    image,
    high_24h,
    low_24h,
    total_volume,
    current_price,
    price_change_percentage_24h,
    last_updated,
  } = route.params;
  const navigator = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View onPress={() => navigator.goBack()} style={styles.container}>
        <View style={styles.mainHeader}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigator.goBack()}
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              size={24}
              color={theme.colors.textPrimary}
            />
          </TouchableOpacity>
          <View style={styles.header}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: image }} style={styles.image} />
            </View>
            <View>
              <StyledText smTitle={true}>{name}</StyledText>
            </View>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.info}>
            <StyledText span={true} bold={true}>
              Current Price:
            </StyledText>{" "}
            $ {current_price}
          </Text>
          <Text style={styles.info}>
            <StyledText span={true} bold={true}>
              ATH 24h:
            </StyledText>{" "}
            $ {high_24h}
          </Text>
          <Text style={styles.info}>
            <StyledText span={true} bold={true}>
              ATL 24h:
            </StyledText>{" "}
            $ {low_24h}
          </Text>
          <Text style={styles.info}>
            <StyledText span={true} bold={true}>
              Volume:
            </StyledText>{" "}
            {total_volume}
          </Text>
          <Text style={styles.info}>
            <StyledText span={true} bold={true}>
              Price Change 24h:
            </StyledText>{" "}
            %{price_change_percentage_24h}
          </Text>
          <Text style={styles.info}>
            <StyledText span={true} bold={true}>
              Last Updated:
            </StyledText>{" "}
            {last_updated}
          </Text>
        </View>
        <View style={styles.statusContainer}>
          <View style={styles.progressBar}>
            <Animated.View
              style={
                ([StyleSheet.absoluteFill],
                { backgroundColor: theme.colors.mainButton, width: "100%" })
              }
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: "100%",
    width: "100%",
  },
  mainHeader: {
    flexDirection: "column",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 60,
    padding: 2,
    marginRight: 15,
    backgroundColor: theme.colors.textPrimary,
    borderRadius: 18,
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
  image: {
    width: 55,
    height: 55,
    borderRadius: 3,
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  progressBar: {
    height: 5,
    flexDirection: "row",
    width: "100%",
    backgroundColor: theme.colors.mainButton,
    borderWidth: 3,
    borderRadius: 15,
    marginRight: "3%",
    margiLeft: "3%",
    borderColor: theme.colors.mainButton,
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
    marginLeft: 10,
  },
  container: {
    width: "75%",
    height: "60%",
    backgroundColor: theme.colors.item,
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    marginRight: 20,
    justifyContent: "space-between",
  },
  text: {
    color: theme.colors.textPrimary,
  },
  info: {
    color: theme.colors.textPrimary,
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

export default CryptoModal;
