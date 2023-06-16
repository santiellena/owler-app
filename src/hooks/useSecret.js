import { useState, useEffect } from "react";
import AsyncStorage from "../AsyncStorage";

const useSecret = () => {
  const [secret, setSecret] = useState(null);

  const fetchSecret = async () => {
    const data = await AsyncStorage.getApiSecret();
    setSecret(data);
  };
  useEffect(() => {
    fetchSecret();
  }, []);

  return { secret };
};

export default useSecret;
