import config from "../../network/config";
const { taapiSecret, taapiUrl } = config;

const getRsi = async ({ symbol1, symbol2, exchange, interval, period }) => {
  const response = await globalThis.fetch(
    `${taapiUrl}/rsi?secret=${taapiSecret}&exchange=${exchange}&symbol=${symbol1}/${symbol2}&interval=${interval}&backtracks=19&period=${period}`
  );
  const json = await response.json();
  return json;
};

const getMarketValues = async ({ symbol, interval, startTime, endTime }) => {
  const response = await globalThis.fetch(
    `https://data-api.binance.vision/api/v3/klines?symbol=${symbol}&interval=${interval}&startTime=${startTime}&endTime=${endTime}`
  );
  const json = await response.json();
  return json;
};

export default { getRsi, getMarketValues };
