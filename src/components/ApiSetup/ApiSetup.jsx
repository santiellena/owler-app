import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from "react-native";
// import { TextInput } from "react-native-paper";
import theme from "../../theme";
import StyledText from "../Custom/StyledText";
let ScreenHeight = Dimensions.get("window").height;
import config from "../../network/config";
import AsyncStorage from "../../AsyncStorage";
import { useNavigation } from "@react-navigation/native";
import useSecret from "../../hooks/useSecret";

const ApiSetup = ({ route }) => {
  const [secretValue, setSecret] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const navigation = useNavigation();
  const { secret } = useSecret();

  const checkSecret = (secretValue, setLoading, setError) => {
    globalThis
      .fetch(
        `${config.taapiUrl}/rsi?secret=${secretValue}&exchange=binance&symbol=BTC/USDT&interval=4h`
      )
      .then(async (response) => {
        if (response.status == 200) {
          setError(false);
          await AsyncStorage.setApiSecret(secretValue);
          await AsyncStorage.setWelcome(false);

          navigation.navigate("HomeScreen", { welcome: false });
        } else if (response.status == 401) {
          setError(true);
        }

        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (secret != null) {
      navigation.navigate("HomeScreen", { welcome: false });
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/images/office1.png")}
          style={styles.image}
        />
      </View>
      <View style={{ width: "85%" }}>
        <StyledText title={true}>
          track your assets, take control of your finance
        </StyledText>
      </View>
      <View style={styles.inputContainer}>
        <StyledText small={true} danger={true} style={styles.labelError}>
          {isError && "Your secret is incorrect..."}
        </StyledText>
        <TextInput
          autoCorrect={false}
          placeholder="Your TAAPI secret..."
          style={[styles.input, isError && styles.inputError]}
          maxLength={200}
          placeholderTextColor={theme.colors.textPrimary}
          onChangeText={(e) => setSecret(e)}
          secureTextEntry={true}
          onSubmitEditing={() => {
            setLoading(true);
            checkSecret(secretValue, setLoading, setError);
          }}
          error={isError}
          activeUnderlineColor={theme.colors.mainButton}
        />
      </View>
      <TouchableOpacity
        style={styles.add}
        onPress={() => {
          setLoading(true);
          checkSecret(secretValue, setLoading, setError);
        }}
      >
        {isLoading && !isError ? (
          <ActivityIndicator size={"large"} color={theme.colors.textPrimary} />
        ) : (
          <StyledText span={true}>Go!</StyledText>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.background,
    height: ScreenHeight,
    flexDirection: "column",
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "40%",
    width: "100%",
    backgroundColor: theme.colors.background,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  labelError: {
    margin: 0,
  },
  input: {
    backgroundColor: theme.colors.item,
    color: theme.colors.textPrimary,
    height: 55,
    borderRadius: 10,
    padding: 10,
    fontFamily: theme.fonts.regular,
    width: "100%",
  },
  inputContainer: {
    width: "90%",
    marginTop: 20,
  },
  add: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    height: 53,
    width: "90%",
    borderRadius: 18,
    backgroundColor: theme.colors.mainButton,
    marginTop: 10,
  },
  inputError: {
    borderBottomColor: theme.colors.textDanger,
    borderBottomWidth: 3,
    fontFamily: theme.fonts.regular,
  },
});

export default ApiSetup;
