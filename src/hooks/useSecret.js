import { useState, useEffect } from "react";
import AsyncStorage from "../AsyncStorage";

const useSecret = () => {
  const [secret, setSecret] = useState(null);

  const fetchSecret = async () => {
    const data = await AsyncStorage.getApiSecret();
    setSecret(data);
    // await AsyncStorage.removeValue("INITIAL_DATA_KEY");
    // await AsyncStorage.removeValue("WATCHING_STATUS_KEY");
    // await AsyncStorage.removeValue("POINTER_KEY");
    // await AsyncStorage.removeValue("HOUR_POINTER_KEY");
    // await AsyncStorage.removeValue("API_SECRET_KEY");
    // await AsyncStorage.removeValue("WELCOME_KEY");
  };
  useEffect(() => {
    fetchSecret();
  }, []);

  return { secret };
};

export default useSecret;
