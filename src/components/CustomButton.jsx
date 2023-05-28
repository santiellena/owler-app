import React from "react";
import { TouchableOpacity, Text } from "react-native";

const CustomButton = ({ onPress, title, style }) => (
  <TouchableOpacity onPress={onPress} style={style.button}>
    <Text style={style.text}>{title}</Text>
  </TouchableOpacity>
);

export default CustomButton;
