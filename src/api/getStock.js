import { useEffect, useState } from "react";
async function getStock() {
  const API_KEY = "64f7926dd8a8e406c726bda3bd4ded89";
  //const API_KEY = "6f08724da98893c397f4521d5bacbaae";
  const url = `https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=${API_KEY}`;
  let res = await fetch(url);
  console.log("server has been requested");
  let data = await res.json();
  return data.map((stocks) => ({
    //filterData
    symbol: stocks.symbol,
    name: stocks.name,
    sector: stocks.sector,
  })); //or return data is fine too
  // let filterData = data.filter((stocks) => {
  //   if (search === ""&& (select === ""|| select==='null')) {
  //     return stocks;
  //   } else if (stocks.sector === select && select!=='null') {
  //     console.log(select);
  //     return stocks;
  // data.map((stocks) => ({
  // symbol: stocks.symbol,
  // name: stocks.name,
  // sector: stocks.sector,
  // }));
  //     } else if (
  //       stocks.symbol.toLowerCase().includes(search.toLowerCase()) &&
  //       (select=== 'null'||select ==='')
  //     ) {
  //       return stocks;
  //     }
  //   });

  //   return filterData.map((stocks) => ({//filterData
  //     symbol: stocks.symbol,
  //     name: stocks.name,
  //     sector: stocks.sector,
  //   }));
}

export default function UseStocks() {
  const [loading, setLoading] = useState(true);
  const [rowData, setRowData] = useState([]);
  //const {rowData, setRowData} = useContext(StocksContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setRowData(await getStock());
        setLoading(false);
      } catch (err) {
        setError(error);
        setLoading(false);
      }
    })();
  }, [error]); //error
   //for testing
  return {
    loading,
    rowData,
    error, //changed the {} to (), so the saveData works in StockTable, otherwise, it wont work
  };
}
