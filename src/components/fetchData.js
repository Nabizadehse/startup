import { useState, useEffect } from "react";
import HistoryChart from "./chart";
const useFetch = () => {
  /* const for fetchApis */ /* const for fetchApis */ /* const for fetchApis */
  const [coinsData, setCoinsData] = useState(null);
  const [chartsData, setChartsData] = useState(null);
  const [dataIsLoading, setDataIsLoading] = useState(false);
  /* format coin data to less number */
  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };
  useEffect(() => {
    setDataIsLoading(true);
    Promise.all([
      fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20solana%2C%20cardano&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setCoinsData(data);
        }),
      fetch(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1",
        {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setChartsData(formatData(data.prices));
        }),
    ]);
    setDataIsLoading(false);
    /* return () => {
      cleanup;
    }; */
  }, []);
  return (
    <div>
      <HistoryChart data={chartsData} />
    </div>
  );
};

export default useFetch;
