import React, { useState } from "react";
import { Button, Badge } from "reactstrap";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "./StockTable.css";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import SelectBar from "./SelectBar";
import UseStocks from "../api/getStock";
import { Row, Col } from "react-grid-system";
export default function StockTable() {
  const navigate = useNavigate();
  const columns = [
    {
      headerName: "Symbol",
      field: "symbol",
      width: 400,
      sortable: true,
      unSortIcon: true,
      resizable: true,
    },
    {
      headerName: "Name",
      field: "name",
      width: 400,
      sortable: true,
      unSortIcon: true,
      resizable: true,
    },
    {
      headerName: "Industry",
      field: "sector",
      width: 700,
      resizable: true,
      sortable: true,
  // const options = [
//   //{value: "List all", label: "List all"},
//   { value: "Communication Services", label: "Communication Services" },
//   { value: "Consumer Cyclical", label: "Consumer Cyclical" },
//   { value: "Consumer Defensive", label: "Consumer Defensive" },
//   { value: "Financial Services", label: "Financial Services" },
//   { value: "Healthcare", label: "Healthcare" },
//   { value: "Industrials", label: "Industrials" },
//   { value: "Technology", label: "Technology" },
//   { value: "Utilities", label: "Utilities" },
// ];    sortable: true,
      unSortIcon: true,
    },
  ];
  const [symbol, setSymbol] = useState("");
  const refreshPage = () => window.location.reload();
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  const { loading, rowData, error } = UseStocks();
  //--const savedData = UseStocks(search, select);
  //const loading = UseStocks();
  //const error = UseStocks();
  //console.log(error)
  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader">Loading....</div>
      </div>
    );
  }else if(error) {
    return <div className="loader-container">
    <div className="loader">Error....{error.message}</div>
  </div>;
  }
  let savedData = rowData; //savedData is the data saved from api
  let filterSearchData;
  //console.log(savedData)
  // if(search ===""){//if there is a input in search
  //   if(select==='List all'){
  //}
  // }
  if (search === "") {
    //if search is empty
    if (select === "" || select === "null") {
      //and select is also empty or list all
      filterSearchData = savedData; //store savedData to filterSearchData and display directly
    } else {
      //search is empty but with select, only show match with select
      filterSearchData = savedData.filter((data) => {
        if (data.sector === select && select !== "null") {
          return data;
        }
      });
    }
  } else {
    //search is being used
    filterSearchData = savedData.filter((data) => {
      if (
        //if the input of search matches the symbol, and select is empty
        data.symbol.toLowerCase().includes(search.toLowerCase())
      ) {
        return data;
      }
    });
    //console.log(filterSearchData);
    filterSearchData = filterSearchData.filter((data) => {
      if (select === "" || select === "null") {
       // console.log(filterSearchData);
        return data;
      } else {
        if (data.sector === select) {
         // console.log(data.sector);
          //console.log(select);
          return data;
        }
      }
    });
  }

  // if (search === "" && (select === "" || select === "List all")) {
  //   filterSearchData = savedData; //if both search and select are empty
  // } else if (search !== "") {
  //   //search input
  //   filterSearchData = savedData.filter((data) => {
  //     if (
  //       data.symbol.toLowerCase().includes(search.toLowerCase()) &&
  //       (select === "null" || select === "")
  //     ) {
  //       return data;
  //     } else if (data.sector === select && select !== "null") {
  //       return data;
  //     }
  //   });
  // }
  // function compSector(savedData, select) {
  //   let result = false;
  //   savedData.map((d) => {
  //     if (d.sector === select) {
  //       result = true;
  //       return result;
  //     } else {
  //       return result;
  //     }
  //   });
  // }

  //--const rowData = filterSearchData;
  //console.log(savedData); for
  const toHistory = (e) => {
    setSymbol(e.data.symbol);
    //  console.log(e.data);
    navigate(`/history/${e.data.symbol}`, { state: { data: e.data } });
  };

  //const alert=(e)=>{console.log('ok')};
  return (
    <div className="container">
      <div className="ag-theme-balham">
        <h2>Stock Prices</h2>
        <Row justify="between">
          <Col sm={6} id="stockRow">
            <Badge className="badge">{filterSearchData.length}</Badge>
            <div className="stockTitle"> stocks are being displayed!</div>
          </Col>
          <Col></Col>
        </Row>
        <Row id="header">
          <Col md={4}>
            <SearchBar onChange={setSearch} /*onSubmit */ />
          </Col>
          <Col md={4} offset={{ md: 4 }}>
            <SelectBar onSelect={setSelect} data={savedData} />
          </Col>
        </Row>
        {/* <NavLink  to="/history" > */}

        <AgGridReact
          rowHeight={30}
          className="stockTable"
          columnDefs={columns}
          rowData={filterSearchData}
          rowSelection={"single"}
          onRowClicked={toHistory}
          pagination={true}
          paginationPageSize={15}
        />
        {/* </NavLink> */}
        <div className="gap">
          <Button className="mt-3" onClick={refreshPage}>
            Refresh the page
          </Button>
        </div>
      </div>
    </div>
  );
}
