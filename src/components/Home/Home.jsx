import React from "react";
import { View } from "react-native";
import Header from "./HomeHeader";
import Navigator from "./HomeNav";
import AlertList from "./AlertList/AlertList";

const Home = () => {
  return (
    <View style={{ paddingVertical: 20, paddingHorizontal: 30 }}>
      <Header />
      <Navigator />
      <AlertList />
    </View>
  );
};

export default Home;
