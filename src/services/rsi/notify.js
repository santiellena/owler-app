import rsi30 from "./controller";
import sendNotification from "../sendNotification";
import time from "../../utils/time";
import AsyncStorage from "../../AsyncStorage";

// const sendAlerts = (results) => {
//   for (const alert of results) {
//     if (alert) {
//       const title = `RSI -30: ${alert.symbol1}/${alert.symbol2}`;
//       const body = `The parameter was matched ${alert.backtrackOfMatch} candles ago`;
//       console.log(alert);
//       sendNotification({ title, body });
//     } else {
//       sendNotification({
//         title: "NO MATCHES",
//         body: "DATA BODY TRY",
//       });
//     }
//   }
// };

const notify = async () => {
  // symbols:[['BTC', 'USDT'], ['ETH', 'USDT'], ['LTC', 'USDT'], ['XRP', 'USDT'], ['XMR', 'USDT']]
  const symbols = [
    ["BTC", "USDT"],
    ["ETH", "USDT"],
    ["LTC", "USDT"],
    ["XRP", "USDT"],
    ["XMR", "USDT"],
  ];

  let pointer = await AsyncStorage.getPointer();
  console.log("Not updated pointer: ", pointer);
  const hourPointer = await AsyncStorage.getHourPointer();

  // const response = await rsi30.AllRsiUnder30({
  //   symbols,
  //   interval: "4h",
  //   exchange: "binance",
  //   period: 14,
  //   callback: sendAlerts,
  // });

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
      sendNotification({ title, body });

      //Update active alerts on alerts list
    } else {
      sendNotification({
        title: `RSI -30: ${alert.symbol1}/${alert.symbol2}`,
        body: "The parameter didn't match",
      });
      pointer++;
      console.log("Updated pointer: ", pointer);
      await AsyncStorage.setPointer(pointer++);
      if (pointer == 5) {
        await AsyncStorage.resetPointer();
        await AsyncStorage.setHourPointer(
          time.getUnixTimeOfLast4hCandle().recentUnixTime
        );
      }
      return alert;
    }
  } else {
    return { candleChecked: true };
  }
};

export default notify;
