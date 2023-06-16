import rsi30 from "./controller";
import sendNotification from "../sendNotification";
import time from "../../utils/time";
import AsyncStorage from "../../AsyncStorage";

const notify = async () => {
  const symbols = [
    ["BTC", "USDT"],
    ["ETH", "USDT"],
    ["LTC", "USDT"],
    ["XRP", "USDT"],
    ["XMR", "USDT"],
  ];

  let pointer = await AsyncStorage.getPointer();
  const hourPointer = await AsyncStorage.getHourPointer();

  if (hourPointer != time.getUnixTimeOfLast4hCandle().recentUnixTime) {
    const alert = await rsi30.RsiUnder30({
      symbol1: symbols[pointer][0],
      symbol2: symbols[pointer][1],
      interval: "4h",
      exchange: "binance",
      period: "14",
    });

    if (alert.flag) {
      const title = `RSI -30: ${alert.symbol1}/${alert.symbol2}`;
      const body = `The parameter was matched ${alert.backtrackOfMatch} candles ago`;
      await AsyncStorage.changeStatusCryptoFromAlert(true, 0, alert.symbol1);
      sendNotification({ title, body });
      await AsyncStorage.changeCryptoAlertStatus(true, 0, alert.symbol1);
    } else {
      await AsyncStorage.changeCryptoAlertStatus(false, 0, alert.symbol1);
    }
    pointer++;

    if (pointer == 5) {
      await AsyncStorage.resetPointer();
      await AsyncStorage.setHourPointer(
        time.getUnixTimeOfLast4hCandle().recentUnixTime
      );
    } else await AsyncStorage.setPointer(pointer);
    return alert;
  } else {
    return { candleChecked: true };
  }
};

export default notify;
