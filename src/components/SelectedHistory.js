import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import useHistory from "../api/getHistory";
import { Row, Col } from "react-grid-system";
import HistoryChart from "./HistoryChart";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SelectHisSelectBar from "./SelectedHisSelectBar";
export default function SelectedHistory() {
  const columns = [
    {
      headerName: "Date",
      field: "date",
      width: 200,
      sortable: true,
      unSortIcon: true,
    },
    {
      headerName: "Open",
      field: "open",
      width: 200,
      sortable: true,
      unSortIcon: true,
    },
    {
      headerName: "High",
      field: "high",
      width: 200,
      resizable: true,
      sortable: true,
      unSortIcon: true,
    },
    {
      headerName: "Low",
      field: "low",
      width: 200,
      sortable: true,
      unSortIcon: true,
    },
    {
      headerName: "Close",
      field: "close",
      width: 200,
      sortable: true,
      unSortIcon: true,
    },
    {
      headerName: "Volume",
      field: "volume",
      width: 200,
      sortable: true,
      unSortIcon: true,
    },
  ];
  const [select, setSelect] = useState("");
  const [startDate, setStartDate] = useState(
    // new Date(new Date().setDate(new Date().getDate() - 1))
    new Date(new Date().setDate(new Date().getDate() - 1))
  );
  const { loading, symbolData, querySymbol } = useHistory(select);
  let allData = symbolData;
  let tempData = allData;
  let filteredData;
  let min;
  let max;
  if (!loading) {
    min = allData[99]["date"];
    max = allData[0]["date"];
    let newStartDate = startDate.toISOString().substring(0, 10);
    //console.log(newStartDate);
    // console.log(max);
    // console.log(newStartDate === max);
    if (newStartDate === max) {
      filteredData = tempData;
      //console.log(filteredData);
    } else {
      filteredData = tempData.filter((data) => {
        //console.log(data.date)
        if (newStartDate <= data.date) {
          return data;
        }
      });
    }
  }
  return (
    <div className="container">
      <div className="ag-theme-balham">
        <h2>Price History</h2>
        <Row justify="between">
          <Col sm={4}>
            <SelectHisSelectBar onSelect={setSelect}  />
          </Col>
          <h4 id="dateDes">Select the date from </h4>
          <Col sm={2.5}>
            <DatePicker
              dateFormat={"yyyy-MM-dd"}
              style={{ marginRight: 50 }}
              float="right"
              className="picker"
              selected={startDate} //when day is clicked
              onChange={(date) => setStartDate(date)} //when value has changed
              // minDate={new Date(symbolData[99]["date"])} //bc the total number of the data is a 100, so the ealiest date should be on array [99]
              //maxDate={new Date(startDate.toISOString().substring(0, 10))}//this is for changing the format of the date
              minDate={new Date(min)}
              //maxDate={new Date(max)}
              maxDate={new Date(new Date().setDate(new Date().getDate() - 1))}
            />
          </Col>
        </Row>
        <AgGridReact
          rowHeight={30}
          className="historyTable"
          columnDefs={columns}
          rowData={filteredData} //symbolData
          pagination={true}
          paginationPageSize={15}
          overlayLoadingTemplate={
            "No data to show at the moment, please select a symbol"
          }
        />
      </div>
      <HistoryChart data={filteredData} />
      {/* passing the data to child (charts) */}
    </div>
  );
}
