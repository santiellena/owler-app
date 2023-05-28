import React from "react";
import { View, FlatList } from "react-native";
import Header from "./AlternativeHeader";
import Navigator from "./OnAlertNav";
import data from "../store";
import Coin from "./Coin";

const loadAlertModal = () => {};

const OnAlert = () => {
  return (
    <View>
      <Header />
      <Navigator />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Coin
            title={item.name}
            onPress={loadAlertModal}
            imageUrl={item.image}
            alert={true}
          />
        )}
        style={{ flexDirection: "row", alignSelf: "center" }}
      />
    </View>
  );
};

export default OnAlert;
