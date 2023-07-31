// import React, { useState } from "react";
// import { AgGridReact } from "ag-grid-react";
// import { Container, Row, Col } from "react-grid-system";
// import "ag-grid-community/dist/styles/ag-grid.css";
// import "ag-grid-community/dist/styles/ag-theme-balham.css";
// import SearchBar from "./SearchBar";
// import useQuote from "../api/getQuote";
// export default function QuoteTable() {
//   const columns = [
//     {
//       headerName: "Symbol",
//       field: "symbol",
//       width: 200,
//       sortable: true,
//       unSortIcon: true,
//     },
//     {
//       headerName: "Price",
//       field: "price",
//       width: 200,
//       sortable: true,
//       unSortIcon: true,
//     },
//     {
//       headerName: "DayLow",
//       field: "dayLow",
//       width: 200,
//       sortable: true,
//       unSortIcon: true,
//     },
//     {
//       headerName: "DayHigh",
//       field: "dayHigh",
//       width: 200,
//       sortable: true,
//       unSortIcon: true,
//     },
//     {
//       headerName: "Price Average",
//       field: "priceAvg50",
//       width: 200,
//       sortable: true,
//       unSortIcon: true,
//     },
//     {
//       headerName: "Previous Close",
//       field: "previousClose",
//       width: 200,
//       sortable: true,
//       unSortIcon: true,
//     },
//     {
//       headerName: "Time",
//       field: "timestamp",
//       width: 200,
//       sortable: true,
//       unSortIcon: true,
//     },
//   ];
//   const [search, setSearch] = useState("");
//   const [select, setSelect] = useState("");
//   const { loading, rowData } = useQuote();
//   if(!loading){
//     console.log(rowData)
//   }
//   return (
//     <div className="container">
//       <div className="ag-theme-balham">
//         <h1>Stock Quote</h1>
//         <Container style={{ padding: 0 }}>
//           <Row>
//             <Col sm={6}>
//               <SearchBar onSubmit={setSearch} />
//             </Col>
//           </Row>
//         </Container>
//         <AgGridReact
//           className="table"
//           columnDefs={columns}
//           rowData={rowData}
//           pagination={true}
//           paginationPageSize={15}
//         />
//       </div>
//     </div>
//   );
// }
