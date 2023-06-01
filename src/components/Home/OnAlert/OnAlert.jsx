import React from "react";
import { View, FlatList } from "react-native";
import Header from "./OnAlertHeader";
import Navigator from "./OnAlertNav";
import data from "../../../store";
import Coin from "../../CryptoList/Coin";
import { useNavigation } from "@react-navigation/native";

const loadCryptoInfo = (
  navigation,
  {
    id,
    name,
    image,
    high_24h,
    low_24h,
    total_volume,
    current_price,
    price_change_percentage_24h,
    last_updated,
  }
) => {
  navigation.navigate("CryptoModalScreen", {
    id,
    name,
    image,
    high_24h,
    low_24h,
    total_volume,
    current_price,
    price_change_percentage_24h,
    last_updated,
  });
};

const OnAlert = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingVertical: 20,
        paddingHorizontal: 30,
        flex: 1,
        flexGrow: 1,
      }}
    >
      <Header title={"RSI 30"} />
      <Navigator />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Coin
            title={item.name}
            onPress={() =>
              loadCryptoInfo(navigation, {
                id: item.id,
                image: item.image,
                name: item.name,
                current_price: item.current_price,
                high_24h: item.high_24h,
                low_24h: item.low_24h,
                total_volume: item.total_volume,
                price_change_percentage_24h:
                  item.price_change_percentage_24h.toFixed(2),
                last_updated: item.last_updated,
              })
            }
            imageUrl={item.image}
            alert={true}
            id={item.id}
          />
        )}
      />
    </View>
  );
};

export default OnAlert;
