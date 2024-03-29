const alertList = [
  {
    id: 0,
    description: "RSI Min. 30",
    period: 14,
    cryptoList: [
      ["bitcoin", "BTC", false, true],
      ["ethereum", "ETH", false, true],
      ["litecoin", "LTC", false, true],
      ["monero", "XMR", false, true],
      ["ripple", "XRP", false, true],
    ],
    active: true,
  },
  {
    id: 1,
    description: "RSI Max. 70",
    period: 14,
    cryptoList: [
      ["bitcoin", "BTC", true, true],
      ["ethereum", "ETH", true, true],
      ["litecoin", "LTC", true, true],
      ["monero", "XMR", true, true],
      ["ripple", "XRP", true, true],
    ],
    active: false,
  },
  {
    id: 2,
    description: "RSI Min. 30",
    period: 21,
    cryptoList: [
      ["bitcoin", "BTC", true, true],
      ["ethereum", "ETH", true, true],
      ["litecoin", "LTC", true, true],
      ["monero", "XMR", true, true],
      ["ripple", "XRP", true, true],
    ],
    active: false,
  },
  {
    id: 3,
    description: "RSI Max. 70",
    period: 21,
    cryptoList: [
      ["bitcoin", "BTC", true, true],
      ["ethereum", "ETH", true, true],
      ["litecoin", "LTC", true, true],
      ["monero", "XMR", true, true],
      ["ripple", "XRP", true, true],
    ],
    active: false,
  },
];

export default alertList;
