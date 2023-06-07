import React from "react";
import { View, FlatList } from "react-native";
import AlternativeHeader from "./AlternativeHeader";
import ListNav from "./ListNav";
import useCryptoList from "../../hooks/useCryptoList";
import Coin from "./Coin";
import { useNavigation } from "@react-navigation/native";

const loadCryptoAlerts = (navigation, { image, name, id }) => {
  navigation.navigate("CryptoScreen", {
    image,
    name,
    id,
  });
};

const CryptoList = () => {
  const { cryptoList } = useCryptoList();
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
      <AlternativeHeader title={"Crypto List"} />
      <ListNav />
      <FlatList
        data={cryptoList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Coin
            title={item.name}
            imageUrl={item.image}
            onPress={() =>
              loadCryptoAlerts(navigation, {
                name: item.name,
                image: item.image,
                id: item.id,
              })
            }
          />
        )}
      />
    </View>
  );
};

export default CryptoList;
