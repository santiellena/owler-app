import AsyncStorage from "../AsyncStorage";
const fetchSecret = async () => {
  const data = await AsyncStorage.getApiSecret();

  // await AsyncStorage.removeValue("INITIAL_DATA_KEY");
  // await AsyncStorage.removeValue("WATCHING_STATUS_KEY");
  // await AsyncStorage.removeValue("POINTER_KEY");
  // await AsyncStorage.removeValue("HOUR_POINTER_KEY");
  // await AsyncStorage.removeValue("API_SECRET_KEY");
  // await AsyncStorage.removeValue("WELCOME_KEY");
  return data;
};
export default fetchSecret;
