import { useState, useEffect } from "react";
import AsyncStorage from "../AsyncStorage";

const useAlertList = () => {
  const [alertList, setAlertList] = useState(null);

  const fetchList = async () => {
    const response = await AsyncStorage.getAlertList();
    setAlertList(response);
  };

  useEffect(() => {
    fetchList();
  }, []);

  return { alertList };
};

export default useAlertList;
