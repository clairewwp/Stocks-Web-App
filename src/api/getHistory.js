import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function useHistory(select) {
  const oldData = useParams(); //the symbol from stockTable
  const [querySymbol, setQuerySymbol] = useState([]);
  const [symbolData, setSymbolData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //default nothing

  // if (select != "") {
  //   oldData.symbol = select;
  // }
  //console.log(select);
  //const API_KEY = "64f7926dd8a8e406c726bda3bd4ded89";
  const API_KEY = "6f08724da98893c397f4521d5bacbaae";
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${oldData.symbol}&apikey=${API_KEY}`;
  useEffect(() => {
    if (oldData.symbol != null) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          //console.log(data["Meta Data"]["3. Last Refreshed"])
          //setLatestDate(data["Meta Data"]["3. Last Refreshed"]);
          setQuerySymbol(data["Meta Data"]["2. Symbol"]);
          //let days=Object.keys(data["Time Series (Daily)"])
          //console.log(latestDate)
          setSymbolData(
            Object.keys(data["Time Series (Daily)"]).map((key) => ({
              date: key,
              // Object.keys(data["Time Series (Daily)"]).map((key) => ({
              //date: key.split("-").reverse().join("/"), //change the format of date
              open: parseFloat(
                data["Time Series (Daily)"][key]["1. open"]
              ).toFixed(2), //set decimal place
              high: parseFloat(
                data["Time Series (Daily)"][key]["2. high"]
              ).toFixed(2),
              low: parseFloat(
                data["Time Series (Daily)"][key]["3. low"]
              ).toFixed(2),
              close: parseFloat(
                data["Time Series (Daily)"][key]["4. close"]
              ).toFixed(2),
              volume: Number(
                data["Time Series (Daily)"][key]["5. volume"]
              ).toLocaleString(), //change the integer format with commas inside
              //volume:data["Time Series (Daily)"][key]["5. volume"],
            }))
          ); //setQuerySymbol(data[["Meta Data"]['2. Symbol']])
        })
        .finally(() => {
          setLoading(false);
          setError(error);
          console.log("History api server has been hitted");
        });
    }
    // else{setLoading(true);
    //   }
    // .then(data => setSymbolData(data.map((quote) => ({
    //   date: quote.date,
    //   open: quote.open,
    //   high: quote.high,
    //   low: quote.low,
    //   close: quote.close,
    //   volume: quote.volume,}))))
  }, []);
  
 
  // if (!loading) {
  //   Object.keys(symbolData).map((key) => ({
  //     date: key,
  //     open: symbolData[key]["1. open"],
  //     high: symbolData[key]["2. high"],
  //     low: symbolData[key]["3. low"],
  //     close: symbolData[key]["4. close"],
  //     volume: symbolData[key]["5. volume"],
  //   }));
  //open : Object.keys(symbolData).find(key => console.log(symbolData[key]))
  //}
  return {
    loading,
    symbolData,
    querySymbol,
    error,
   
  };
}
