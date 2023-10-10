// Answers to requests received from network, using store functionality
import store from "./store.js";
import time from "../../utils/time.js";

const joinData = async ({ symbol1, symbol2, exchange, interval, period }) => {
  const { unixTime18Candles4hAgo: startTime, recentUnixTime: endTime } =
    time.getUnixTime18Candles4hAgo();
  const rsiData = await store.getRsi({
    symbol1,
    symbol2,
    exchange,
    interval,
    period,
  });
  rsiData.reverse();
  const symbol = symbol1 + symbol2;
  const marketData = await store.getMarketValues({
    symbol,
    interval,
    startTime,
    endTime,
  });
  const joinedData = [];
  for (let i = 0; i < rsiData.length; i++) {
    const item = {
      rsiValue: rsiData[i].value,
      backtrack: rsiData[i].backtrack,
      lowPrice: marketData[i][3],
    };
    joinedData.push(item);
  }

  return joinedData;
};

const RsiUnder30 = async ({ symbol1, symbol2, exchange, interval, period }) => {
  const data = await joinData({
    symbol1,
    symbol2,
    exchange,
    interval,
    period,
  });

  let backtrackOfMatch;
  let condition1,
    condition2,
    condition3 = false;
  for (let i = 0; i < data.length - 4; i++) {
    if (data.rsiValue <= 30) {
      condition1 = true;
      if (data[i].rsiValue <= data[17].rsiValue) {
        condition2 = true;
        if (data[i].lowPrice > data[17].lowPrice) {
          condition3 = true;
          backtrackOfMatch = data[i].backtrack - 1;
        }
      }
    }
  }

  if (condition1 && condition2 && condition3) {
    return { symbol1, symbol2, backtrackOfMatch, flag: true };
  } else {
    return { symbol1, symbol2, flag: false };
  }
};

const AllRsiUnder30 = async ({
  symbols,
  interval,
  exchange,
  period,
  callback,
}) => {
  // symbols:[['BTC', 'USDT'], ['ETH', 'USDT'], ['LTC', 'USDT'], ['XRP', 'USDT'], ['XMR', 'USDT']]
  const results = [];
  let counter = 0;
  const searchInterval = setInterval(async () => {
    if (counter == symbols.length) {
      console.log("TASK HAS FINISHED");
      clearInterval(searchInterval);
      callback(results);
    } else {
      const resultOfPair = await RsiUnder30({
        symbol1: symbols[counter][0],
        symbol2: symbols[counter][1],
        interval,
        period,
        exchange,
      });
      results.push(resultOfPair);
      counter += 1;
    }
  }, 20000);
};

export default { RsiUnder30, AllRsiUnder30 };
