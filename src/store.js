const coinsList = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    current_price: 27818,
    market_cap: 539532593843,
    market_cap_rank: 1,
    fully_diluted_valuation: 584378434976,
    total_volume: 13005557622,
    high_24h: 28044,
    low_24h: 27590,
    price_change_24h: 155.47,
    price_change_percentage_24h: 0.56201,
    market_cap_change_24h: 3158214618,
    market_cap_change_percentage_24h: 0.58881,
    circulating_supply: 19388437,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 69045,
    ath_change_percentage: -59.75089,
    ath_date: "2021-11-10T14:24:11.849Z",
    atl: 67.81,
    atl_change_percentage: 40882.62407,
    atl_date: "2013-07-06T00:00:00.000Z",
    roi: null,
    last_updated: "2023-05-30T21:37:22.247Z",
    price_change_percentage_24h_in_currency: 0.5620146203253156,
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    current_price: 1911.14,
    market_cap: 229786575734,
    market_cap_rank: 2,
    fully_diluted_valuation: 229786575734,
    total_volume: 6114882008,
    high_24h: 1917.13,
    low_24h: 1886.28,
    price_change_24h: 20.6,
    price_change_percentage_24h: 1.08967,
    market_cap_change_24h: 2392995485,
    market_cap_change_percentage_24h: 1.05236,
    circulating_supply: 120251525.508632,
    total_supply: 120251525.508632,
    max_supply: null,
    ath: 4878.26,
    ath_change_percentage: -60.92697,
    ath_date: "2021-11-10T14:24:19.604Z",
    atl: 0.432979,
    atl_change_percentage: 440125.746,
    atl_date: "2015-10-20T00:00:00.000Z",
    roi: {
      times: 90.84373499936375,
      currency: "btc",
      percentage: 9084.373499936375,
    },
    last_updated: "2023-05-30T21:37:19.354Z",
    price_change_percentage_24h_in_currency: 1.0896735822616739,
  },
  {
    id: "binancecoin",
    symbol: "bnb",
    name: "BNB",
    image:
      "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",
    current_price: 312.77,
    market_cap: 49400754423,
    market_cap_rank: 4,
    fully_diluted_valuation: 62577640595,
    total_volume: 549931993,
    high_24h: 314.3,
    low_24h: 310.7,
    price_change_24h: 1.67,
    price_change_percentage_24h: 0.53528,
    market_cap_change_24h: 252155686,
    market_cap_change_percentage_24h: 0.51305,
    circulating_supply: 157886280,
    total_supply: 157900174,
    max_supply: 200000000,
    ath: 686.31,
    ath_change_percentage: -54.47658,
    ath_date: "2021-05-10T07:24:17.097Z",
    atl: 0.0398177,
    atl_change_percentage: 784551.77302,
    atl_date: "2017-10-19T00:00:00.000Z",
    roi: null,
    last_updated: "2023-05-30T21:37:22.644Z",
    price_change_percentage_24h_in_currency: 0.5352777853553986,
  },
  {
    id: "ripple",
    symbol: "xrp",
    name: "XRP",
    image:
      "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
    current_price: 0.5172,
    market_cap: 26913290247,
    market_cap_rank: 6,
    fully_diluted_valuation: 51772868827,
    total_volume: 2323340456,
    high_24h: 0.524623,
    low_24h: 0.489275,
    price_change_24h: 0.02792474,
    price_change_percentage_24h: 5.70737,
    market_cap_change_24h: 1560327404,
    market_cap_change_percentage_24h: 6.15442,
    circulating_supply: 51983386003,
    total_supply: 99988920499,
    max_supply: 100000000000,
    ath: 3.4,
    ath_change_percentage: -84.60046,
    ath_date: "2018-01-07T00:00:00.000Z",
    atl: 0.00268621,
    atl_change_percentage: 19382.69734,
    atl_date: "2014-05-22T00:00:00.000Z",
    roi: null,
    last_updated: "2023-05-30T21:37:22.916Z",
    price_change_percentage_24h_in_currency: 5.707368785572764,
  },
  {
    id: "cardano",
    symbol: "ada",
    name: "Cardano",
    image:
      "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",
    current_price: 0.377889,
    market_cap: 13259584989,
    market_cap_rank: 7,
    fully_diluted_valuation: 17026136963,
    total_volume: 201414615,
    high_24h: 0.383291,
    low_24h: 0.375314,
    price_change_24h: -0.001467616517565829,
    price_change_percentage_24h: -0.38687,
    market_cap_change_24h: -27495209.474578857,
    market_cap_change_percentage_24h: -0.20693,
    circulating_supply: 35045020830.3234,
    total_supply: 45000000000,
    max_supply: 45000000000,
    ath: 3.09,
    ath_change_percentage: -87.75145,
    ath_date: "2021-09-02T06:00:10.474Z",
    atl: 0.01925275,
    atl_change_percentage: 1863.88539,
    atl_date: "2020-03-13T02:22:55.044Z",
    roi: null,
    last_updated: "2023-05-30T21:37:19.829Z",
    price_change_percentage_24h_in_currency: -0.3868694192985247,
  },
  {
    id: "solana",
    symbol: "sol",
    name: "Solana",
    image:
      "https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422",
    current_price: 21.32,
    market_cap: 8464339222,
    market_cap_rank: 10,
    fully_diluted_valuation: 11717718491,
    total_volume: 411522589,
    high_24h: 21.37,
    low_24h: 20.48,
    price_change_24h: 0.767082,
    price_change_percentage_24h: 3.73225,
    market_cap_change_24h: 319056790,
    market_cap_change_percentage_24h: 3.91707,
    circulating_supply: 396461346.01457,
    total_supply: 548846439.561995,
    max_supply: null,
    ath: 259.96,
    ath_change_percentage: -91.79481,
    ath_date: "2021-11-06T21:54:35.825Z",
    atl: 0.500801,
    atl_change_percentage: 4159.2055,
    atl_date: "2020-05-11T19:35:23.449Z",
    roi: null,
    last_updated: "2023-05-30T21:37:23.179Z",
    price_change_percentage_24h_in_currency: 3.732245041954047,
  },
  {
    id: "tron",
    symbol: "trx",
    name: "TRON",
    image:
      "https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1547035066",
    current_price: 0.076593,
    market_cap: 6916618219,
    market_cap_rank: 12,
    fully_diluted_valuation: 6916635999,
    total_volume: 321729791,
    high_24h: 0.077023,
    low_24h: 0.075821,
    price_change_24h: 0.0002015,
    price_change_percentage_24h: 0.26377,
    market_cap_change_24h: 23965337,
    market_cap_change_percentage_24h: 0.34769,
    circulating_supply: 90241823011.6148,
    total_supply: 90242054990.1132,
    max_supply: null,
    ath: 0.231673,
    ath_change_percentage: -66.95823,
    ath_date: "2018-01-05T00:00:00.000Z",
    atl: 0.00180434,
    atl_change_percentage: 4142.47762,
    atl_date: "2017-11-12T00:00:00.000Z",
    roi: {
      times: 39.312039761590114,
      currency: "usd",
      percentage: 3931.2039761590117,
    },
    last_updated: "2023-05-30T21:37:19.781Z",
    price_change_percentage_24h_in_currency: 0.2637694150616089,
  },
  {
    id: "litecoin",
    symbol: "ltc",
    name: "Litecoin",
    image:
      "https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580",
    current_price: 92.18,
    market_cap: 6733085766,
    market_cap_rank: 14,
    fully_diluted_valuation: 7743749133,
    total_volume: 473029811,
    high_24h: 93.18,
    low_24h: 90.69,
    price_change_24h: 0.980246,
    price_change_percentage_24h: 1.0748,
    market_cap_change_24h: 76154410,
    market_cap_change_percentage_24h: 1.14399,
    circulating_supply: 73036870.7334713,
    total_supply: 84000000,
    max_supply: 84000000,
    ath: 410.26,
    ath_change_percentage: -77.58756,
    ath_date: "2021-05-10T03:13:07.904Z",
    atl: 1.15,
    atl_change_percentage: 7903.6436,
    atl_date: "2015-01-14T00:00:00.000Z",
    roi: null,
    last_updated: "2023-05-30T21:37:23.334Z",
    price_change_percentage_24h_in_currency: 1.0747950725444015,
  },
  {
    id: "eos",
    symbol: "eos",
    name: "EOS",
    image:
      "https://assets.coingecko.com/coins/images/738/large/eos-eos-logo.png?1547034481",
    current_price: 0.91274,
    market_cap: 1010189836,
    market_cap_rank: 46,
    fully_diluted_valuation: null,
    total_volume: 113754395,
    high_24h: 0.918936,
    low_24h: 0.892691,
    price_change_24h: 0.0126471,
    price_change_percentage_24h: 1.40509,
    market_cap_change_24h: 13114652,
    market_cap_change_percentage_24h: 1.31531,
    circulating_supply: 1107352840.183,
    total_supply: null,
    max_supply: null,
    ath: 22.71,
    ath_change_percentage: -95.97956,
    ath_date: "2018-04-29T07:50:33.540Z",
    atl: 0.5024,
    atl_change_percentage: 81.74622,
    atl_date: "2017-10-23T00:00:00.000Z",
    roi: {
      times: -0.07803999148279556,
      currency: "usd",
      percentage: -7.803999148279556,
    },
    last_updated: "2023-05-30T21:37:19.464Z",
    price_change_percentage_24h_in_currency: 1.4050873571779814,
  },
  {
    id: "fantom",
    symbol: "ftm",
    name: "Fantom",
    image:
      "https://assets.coingecko.com/coins/images/4001/large/Fantom_round.png?1669652346",
    current_price: 0.329509,
    market_cap: 919016283,
    market_cap_rank: 53,
    fully_diluted_valuation: 1045825825,
    total_volume: 124080637,
    high_24h: 0.335682,
    low_24h: 0.325598,
    price_change_24h: -0.005452061264974051,
    price_change_percentage_24h: -1.62767,
    market_cap_change_24h: -15845554.844716191,
    market_cap_change_percentage_24h: -1.69496,
    circulating_supply: 2790021653.51977,
    total_supply: 3175000000,
    max_supply: 3175000000,
    ath: 3.46,
    ath_change_percentage: -90.49589,
    ath_date: "2021-10-28T05:19:39.845Z",
    atl: 0.00190227,
    atl_change_percentage: 17179.6997,
    atl_date: "2020-03-13T02:25:38.280Z",
    roi: {
      times: 9.9836214750871,
      currency: "usd",
      percentage: 998.36214750871,
    },
    last_updated: "2023-05-30T21:37:24.893Z",
    price_change_percentage_24h_in_currency: -1.6276718955882994,
  },
];

export default coinsList;