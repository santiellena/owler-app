import AsyncStorage from "@react-native-async-storage/async-storage";
import alertList from "./alertList";

const INITIAL_DATA_KEY = "INITIAL_DATA_KEY";
const WATCHING_STATUS_KEY = "WATCHING_STATUS_KEY";
const POINTER_KEY = "POINTER_KEY";
const HOUR_POINTER_KEY = "HOUR_POINTER_KEY";
const API_SECRET_KEY = "API_SECRET_KEY";
const WELCOME_KEY = "WELCOME_KEY";

const storeInitialData = async () => {
  try {
    const jsonValue = JSON.stringify(alertList);
    await AsyncStorage.setItem(INITIAL_DATA_KEY, jsonValue);
    await AsyncStorage.setItem(WATCHING_STATUS_KEY, "0");
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

const getMyObject = async (key) => {
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

const getWatchingStatus = async () => {
  const status = await getMyObject(WATCHING_STATUS_KEY);
  return status;
};

const changeWatchingStatus = async (newState) => {
  if (newState) {
    await setObjectValue(WATCHING_STATUS_KEY, "1");
  } else {
    await setObjectValue(WATCHING_STATUS_KEY, "0");
  }
};

const getPointer = async () => {
  const pointer = await getMyObject(POINTER_KEY);
  if (pointer == null) {
    await setPointer(0);
    return 0;
  }
  return parseInt(pointer);
};

const setPointer = async (newValue) => {
  await setObjectValue(POINTER_KEY, newValue);
};

const resetPointer = async () => {
  await setObjectValue(POINTER_KEY, 0);
};

const getHourPointer = async () => {
  const hourPointer = await getMyObject(HOUR_POINTER_KEY);
  if (hourPointer == null) {
    await setHourPointer(HOUR_POINTER_KEY, 1);
    return 1;
  }
  return parseInt(hourPointer);
};

const setHourPointer = async (newHourPointer) => {
  await setObjectValue(HOUR_POINTER_KEY, newHourPointer);
};

const changeCryptoAlertStatus = async (newValue, idAlert, idCrypto) => {
  const alertList = await getAlertList();
  const newList = alertList.map((alert) => {
    if (alert.id == idAlert) {
      for (let i = 0; i < alert.cryptoList.length; i++) {
        if (idCrypto == alert.cryptoList[i][1]) {
          alert.cryptoList[i][2] = newValue;
        }
      }
    }
    return alert;
  });
  await setObjectValue(INITIAL_DATA_KEY, newList);
};

const setApiSecret = async (secret) => {
  await setObjectValue(API_SECRET_KEY, secret);
};

const getApiSecret = async () => {
  return await getMyObject(API_SECRET_KEY);
};

const updateApiSecret = async (newSecret) => {
  await setObjectValue(API_SECRET_KEY, newSecret);
};

const getWelcome = async () => {
  return await getMyObject(WELCOME_KEY);
};

const setWelcome = async (newValue) => {
  await setObjectValue(WELCOME_KEY, newValue);
};

export default {
  getInitialData,
  storeInitialData,
  getAlertList,
  getAlert,
  changeStatusCryptoFromAlert,
  removeValue,
  getWatchingStatus,
  changeWatchingStatus,
  getPointer,
  setPointer,
  resetPointer,
  getHourPointer,
  setHourPointer,
  changeCryptoAlertStatus,
  setApiSecret,
  getApiSecret,
  updateApiSecret,
  getWelcome,
  setWelcome,
};
