const alertList = [
  {
    id: 0,
    description: "RSI Min. 30",
    period: 14,
    cryptoList: ["bitcoin", "ethereum"],
    active: true,
  },
  {
    id: 1,
    description: "RSI Max. 70",
    period: 14,
    cryptoList: ["bitcoin", "ethereum"],
    active: true,
  },
  {
    id: 2,
    description: "RSI Min. 30",
    period: 21,
    cryptoList: ["bitcoin", "ethereum"],
    active: false,
  },
  {
    id: 3,
    description: "RSI Max. 70",
    period: 21,
    cryptoList: ["bitcoin", "ethereum"],
    active: false,
  },
];

export default alertList;
