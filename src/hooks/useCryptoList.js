import { useState, useEffect } from "react";

const useCryptoList = () => {
  const [cryptoList, setCryptoList] = useState(null);

  const fetchList = async () => {
    const response = await globalThis.fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20litecoin%2C%20ripple%2C%20monero&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024h&locale=en"
    );

    const json = await response.json();
    setCryptoList(json);
  };

  useEffect(() => {
    fetchList();
  }, []);

  return { cryptoList };
};

export default useCryptoList;
