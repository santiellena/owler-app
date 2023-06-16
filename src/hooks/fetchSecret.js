import AsyncStorage from "../AsyncStorage";
const fetchSecret = async () => {
  const data = await AsyncStorage.getApiSecret();
  return data;
};
export default fetchSecret;
