import AsyncStorage from "@react-native-async-storage/async-storage";
import alertList from "./alertList";

const INITIAL_DATA_KEY = "INITIAL_DATA_KEY";

const storeInitialData = async () => {
  try {
    const jsonValue = JSON.stringify(alertList);
    await AsyncStorage.setItem(INITIAL_DATA_KEY, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const getInitialData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(INITIAL_DATA_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

getMyObject = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

const setObjectValue = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const removeValue = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(e);
  }

  console.log("Done.");
};

const getAlertList = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(INITIAL_DATA_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

const getAlert = async (id) => {
  try {
    const jsonValue = await AsyncStorage.getItem(INITIAL_DATA_KEY);
    if (jsonValue) {
      const list = JSON.parse(jsonValue);
      const alert = list.find((e) => e.id == id);
      return alert ? alert : null;
    } else return null;
  } catch (e) {
    console.log(e);
  }
};

const changeStatusCryptoFromAlert = async ({ idCrypto, alertDescription }) => {
  const alertListCopy = await getAlertList();
  for (let i = 0; i < alertListCopy.length; i++) {
    if (alertListCopy[i].description == alertDescription) {
      for (let j = 0; j < alertListCopy[i].cryptoList.length; j++) {
        if (alertListCopy[i].cryptoList[j][0] == idCrypto) {
          alertListCopy[i].cryptoList[j][3] =
            !alertListCopy[i].cryptoList[j][3];
        }
      }
    }
  }

  await removeValue(INITIAL_DATA_KEY);
  await setObjectValue(INITIAL_DATA_KEY, alertListCopy);
};

export default {
  getInitialData,
  storeInitialData,
  getAlertList,
  getAlert,
  changeStatusCryptoFromAlert,
  removeValue,
};
