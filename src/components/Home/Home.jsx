import React, { useEffect } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Header from "./HomeHeader";
import Navigator from "./HomeNav";
import AlertList from "./AlertList/AlertList";
import StyledText from "../Custom/StyledText";
import { Modal } from "../Custom/Modal";
import AsyncStorage from "../../AsyncStorage";
import theme from "../../theme";
import fetchSecret from "../../hooks/fetchSecret";
import { useNavigation } from "@react-navigation/native";

const Home = ({ route }) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const navigation = useNavigation();
  const fetchWelcome = async () => {
    const welcomeValue = await AsyncStorage.getWelcome();
    setIsModalVisible(!welcomeValue);
  };

  if (route.params) {
    if (route.params.welcome == false) {
      fetchWelcome();
    }
  }

  useEffect(() => {
    fetchSecret().then((secret) => {
      if (!secret) {
        navigation.navigate("ApiSetup", { homeKey: route.key });
      } else {
        fetchWelcome();
      }
    });
  }, []);

  return (
    <View style={{ paddingVertical: 20, paddingHorizontal: 30 }}>
      <Modal isVisible={isModalVisible}>
        <Modal.Container>
          <View style={styles.modal}>
            <Modal.Header title="Welcome!" />
            <Modal.Body>
              <StyledText span={true} style={{ textAlign: "center" }}>
                There is not yet a guide on how to use this app, good luck!
              </StyledText>
            </Modal.Body>
            <Modal.Footer>
              <View style={styles.button}>
                <TouchableOpacity
                  style={styles.thanks}
                  onPress={async (e) => {
                    e.preventDefault();
                    await AsyncStorage.setWelcome(true);
                    setIsModalVisible(false);
                  }}
                >
                  <StyledText span={true}>Start</StyledText>
                </TouchableOpacity>
              </View>
            </Modal.Footer>
          </View>
        </Modal.Container>
      </Modal>
      <Header />
      <Navigator />
      <AlertList />
    </View>
  );
};

const styles = StyleSheet.create({
  thanks: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    height: 53,
    width: "85%",
    borderRadius: 18,
    backgroundColor: theme.colors.mainButton,
    marginTop: 10,
  },
});

export default Home;
