// import React, { useEffect, useState } from "react";

// async function getQuote() {
//   //const API_KEY = "64f7926dd8a8e406c726bda3bd4ded89";
//   const API_KEY = "6f08724da98893c397f4521d5bacbaae";
//   //const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AALPL&apikey=${API_KEY}`;
//   const url = `https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?apikey=${API_KEY}`;
  
//   let res = await fetch(url);
//   console.log("Quote info has been requested from api");
//   let data = await res.json();
//   let symbol=data.symbol
//   console.log(symbol)
//   let newData=data["historical"];
//   console.log(newData["1. open"])
//     return newData;
// }
// export default function useQuote() {
//   const [loading, setLoading] = useState(true);
//   const [rowData, setRowData] = useState([]);
//   console.log(rowData)
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     (async () => {
//       try {
//         setRowData(await getQuote());
//         setLoading(false);
//       } catch (err) {
//         setError(error);
//         setLoading(false);
//       }
//     })();
//   }, [error]);
//   return {
//     loading,
//     rowData,
//     error,
//   };
// }
