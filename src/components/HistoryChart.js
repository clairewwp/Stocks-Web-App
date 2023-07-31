import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "./HistoryChart.css";
import useHistory from "../api/getHistory";
import { Chart, registerables } from "chart.js";
import { Row, Col } from "react-grid-system";
Chart.register(...registerables);

export default function HistoryChart(props) {
  const { symbolData, querySymbol } = useHistory(); //as the information from the api is an array of object, if I use [], this cant be iterated, so instead, {} should be used
 let allData = symbolData
  //console.log(props.data);//the props value is passed from Parent (history Table   data={filteredData})
  let label;
  let open;
  let close;
  let high;
  let low;
  if (props.data == null) {//because the initial reneder, nothing exsists in props, so show original data
    label = allData.map((a) => a.date);
    open = allData.map((a) => a.open);
    close = allData.map((a) => a.close);
    high = allData.map((a) => a.high);
    low = allData.map((a) => a.low);
  } else {label = props.data.map((a) => a.date);//and if the pages had been loaded, show filteredData
    open = props.data.map((a) => a.open);
    close = props.data.map((a) => a.close);
    high = props.data.map((a) => a.high);
    low = props.data.map((a) => a.low);
  }
  //console.log(label)
  //console.log('open'+open)
  //console.log('close'+close)
  //console.log('high'+high)
  //console.log('low'+low)
  const data = {
    labels: label,
    datasets: [
      {
        label: "Opening price of " + querySymbol,
        data: open,
        fill: false,
        backgroundColor: "rgb(255, 217, 2)",
        borderColor: "rgb(255, 217, 2)", //'rgb(255, 217, 2)'
      },
      {
        label: "Closing price of " + querySymbol,
        data: close,
        fill: false,
        backgroundColor: "rgb(31, 66, 146)", //"rgb(255, 217, 2)",
        borderColor: "rgb(31, 66, 146)", //'rgb(255, 217, 2)'
      },
      {
        label: "Highest price of " + querySymbol,
        data: high,
        fill: false,
        backgroundColor: "#c95d9b", //"rgb(255, 217, 2)",
        borderColor: "#c95d9b", //'rgb(255, 217, 2)'
      },
      {
        label: "Lowest price of " + querySymbol,
        data: low,
        fill: false,
        backgroundColor: "#1e8266", //"rgb(255, 217, 2)",
        borderColor: "#1e8266", //'rgb(255, 217, 2)'
      },
    ],
  };
  //console.log(querySymbol);
  return (
    <div>
      <Row>
        <Col md={1}></Col>
        <Col
          className="lineChartDiv"
          //   style={{height: "250vh", width: "60vw" }}
        >
          <Line className="lineChart" data={data} />
        </Col>
        <Col md={1}></Col>
      </Row>
    </div>
  );
}
