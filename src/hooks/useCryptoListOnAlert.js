import { useState, useEffect } from "react";
import AsyncStorage from "../AsyncStorage";

const useCryptoListOnAlert = (id) => {
  const [cryptoListOnAlert, setCryptoListOnAlert] = useState(null);
  const [cryptoListOnActiveAlert, setCryptoListOnActiveAlert] = useState(null);

  const fetchList = async () => {
    let finalOfUrl = ``;
    const alertList = await AsyncStorage.getAlertList();
    let selectedAlert = [];

    for (const alert of alertList) {
      if (alert.id == id) {
        selectedAlert = alert;
        break;
      }
    }
    for (let i = 0; i < selectedAlert.cryptoList.length; i++) {
      if (selectedAlert.cryptoList[i][3]) {
        finalOfUrl = `%2C%20${selectedAlert.cryptoList[i][0]}`.concat(
          finalOfUrl
        );
      }
    }
    const response = await globalThis.fetch(
      `https://api.coingecko.com/api/v3/coins/markets?order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024h&locale=en&vs_currency=usd&ids=${finalOfUrl}`
    );

    const json = await response.json();

    const pivot = [];
    for (const crypto of selectedAlert.cryptoList) {
      const activeCrypto = json.find((e) => e.id == crypto[0] && crypto[2]);
      if (activeCrypto) {
        activeCrypto.active = true;
        pivot.push(activeCrypto);
      }
    }

    setCryptoListOnActiveAlert(pivot);
    setCryptoListOnAlert(json);
  };

  useEffect(() => {
    fetchList();
  }, []);

  return { cryptoListOnAlert, cryptoListOnActiveAlert };
};

export default useCryptoListOnAlert;
