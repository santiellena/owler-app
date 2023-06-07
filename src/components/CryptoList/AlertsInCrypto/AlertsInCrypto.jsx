import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CryptoHeader from "./CryptoHeader";
import CryptoNav from "./CryptoNav";
import AlertSelector from "./AlertSelector";
import theme from "../../../theme";
import useAlertList from "../../../hooks/useAlertList";

const Crypto = ({ route }) => {
  const { alertList } = useAlertList();
  return (
    <View style={{ paddingVertical: 20, paddingHorizontal: 30 }}>
      <CryptoHeader image={route.params.image} name={route.params.name} />
      <CryptoNav />
      <FlatList
        data={alertList}
        style={styles.container}
        numColumns={1}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <AlertSelector
            description={item.description}
            period={item.period}
            active={item.active}
            selected={item.cryptoList.find((e) => e[0] == route.params.id)[3]}
            idCrypto={route.params.id}
          />
        )}
      />
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

export default Crypto;
