import rsi30 from "./controller";
import sendNotification from "../sendNotification";

const sendAlerts = (results) => {
  for (const alert of results) {
    if (alert) {
      const title = `RSI -30: ${alert.symbol1}/${alert.symbol2}`;
      const body = `The parameter was matched ${alert.backtrackOfMatch} candles ago`;
      console.log(alert);
      sendNotification({ title, body });
    } else {
      sendNotification({
        title: "NO MATCHES",
        body: "DATA BODY TRY",
      });
    }
  }
};

const notify = async () => {
  // symbols:[['BTC', 'USDT'], ['ETH', 'USDT'], ['LTC', 'USDT'], ['XRP', 'USDT'], ['XMR', 'USDT']]

  const symbols = [
    ["BTC", "USDT"],
    ["ETH", "USDT"],
    ["LTC", "USDT"],
    ["XRP", "USDT"],
    ["XMR", "USDT"],
  ];

  const response = await rsi30.AllRsiUnder30({
    symbols,
    interval: "4h",
    exchange: "binance",
    period: 14,
    callback: sendAlerts,
  });

  return response;
};

export default notify;
