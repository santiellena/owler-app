import React from "react";
import { View } from "react-native";
import Header from "./HomeHeader";
import Navigator from "./HomeNav";
import AlertList from "./AlertList";

const Home = () => {
  return (
    <View>
      <Header />
      <Navigator />
      <AlertList />
    </View>
  );
};

export default Home;
