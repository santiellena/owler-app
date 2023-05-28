import React from "react";
import { View, FlatList } from "react-native";
import AlternativeHeader from "./AlternativeHeader";
import ListNav from "./ListNav";
import data from "../store";
import Coin from "./Coin";

const CryptoList = () => {
  return (
    <View style={{ flexDirection: "column" }}>
      <AlternativeHeader title={"Crypto List"} />
      <ListNav />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Coin title={item.name} imageUrl={item.image} />
        )}
        style={{ flexDirection: "row", alignSelf: "center" }}
      />
    </View>
  );
};

export default CryptoList;
