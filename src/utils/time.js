// const cero = Date.UTC(2023, 5, 3, 0, 0, 0); Returns date in unix time format

const getUnixTimeOfLast4hCandle = () => {
  const date = new Date();
  // const minute = date.getUTCMinutes();
  const hour = date.getUTCHours();
  const day = date.getUTCDate();
  const month = date.getUTCMonth();
  const year = date.getUTCFullYear();

  let recentUnixTime, recentHour;
  if (hour == 0) {
    recentUnixTime = Date.UTC(year, month, day, 0, 0, 0);
    recentHour = 0;
  } else if (hour < 4) {
    recentUnixTime = Date.UTC(year, month, day, 0, 0, 0);
    recentHour = 0;
  } else if (hour == 4) {
    recentUnixTime = Date.UTC(year, month, day, 4, 0, 0);
    recentHour = 4;
  } else if (hour < 8) {
    recentUnixTime = Date.UTC(year, month, day, 4, 0, 0);
    recentHour = 4;
  } else if (hour == 8) {
    recentUnixTime = Date.UTC(year, month, day, 8, 0, 0);
    recentHour = 8;
  } else if (hour < 12) {
    recentUnixTime = Date.UTC(year, month, day, 8, 0, 0);
    recentHour = 8;
  } else if (hour == 12) {
    recentUnixTime = Date.UTC(year, month, day, 12, 0, 0);
    recentHour = 12;
  } else if (hour < 16) {
    recentUnixTime = Date.UTC(year, month, day, 12, 0, 0);
    recentHour = 12;
  } else if (hour == 16) {
    recentUnixTime = Date.UTC(year, month, day, 16, 0, 0);
    recentHour = 16;
  } else if (hour < 20) {
    recentUnixTime = Date.UTC(year, month, day, 16, 0, 0);
    recentHour = 16;
  } else if (hour == 20) {
    recentUnixTime = Date.UTC(year, month, day, 20, 0, 0);
    recentHour = 20;
  } else if (hour < 24) {
    recentUnixTime = Date.UTC(year, month, day, 20, 0, 0);
    recentHour = 20;
  }

  return { recentUnixTime, year, month, day, recentHour };
};

const getUnixTime18Candles4hAgo = () => {
  const monthsList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const { recentUnixTime, year, month, day, recentHour } =
    getUnixTimeOfLast4hCandle();
  if (year % 4 == 0 && year % 100 != 0) {
    monthsList[1] = 29;
  }
  let unixTime18Candles4hAgo;
  if (day <= 4) {
    unixTime18Candles4hAgo = Date.UTC(year, month, day - 3, recentHour, 0, 0);
  } else {
    if (day == 3) {
      if (month >= 1) {
        unixTime18Candles4hAgo = Date.UTC(
          year,
          month - 1,
          monthsList[month - 1],
          recentHour
        );
      } else {
        unixTime18Candles4hAgo = Date.UTC(
          year - 1,
          11,
          monthsList[11],
          recentHour
        );
      }
    } else {
      if (month >= 1) {
        unixTime18Candles4hAgo = Date.UTC(
          year,
          month - 1,
          monthsList[month - 1] - day,
          recentHour
        );
      } else {
        unixTime18Candles4hAgo = Date.UTC(
          year - 1,
          11,
          monthsList[11] - day,
          recentHour,
          0,
          0
        );
      }
    }
  }

  return { recentUnixTime, unixTime18Candles4hAgo };
};

export default { getUnixTime18Candles4hAgo };
