import React, { useState } from "react";
import Select from "react-select";
import useHistory from "../api/getHistory";
import UseStocks from "../api/getStock";
import "./SelectBar.css";

export default function SelectHisSelectBar(props) {
  const { rowData } = UseStocks();
  //console.log(rowData.map((s)=> {return s.symbol}))
  const options = rowData.map((s) => {
    return {
      label: s.symbol,
      value: s.symbol,
    };
  });
  //console.log(options)
  let select;
  const handleSelect = (e) => {
      console.log(e)
    if (e == null) {
      select=(null)
      props.onSelect(null);
    } else {
      select=e.value;
      props.onSelect(select);
      console.log(select)
    }
  };
  return (
    <div>
      <Select
        className="selectSymbol"
        id="selectSymbol"
        isClearable
        isSearchable
        placeholder="select a symbol"
        type="text"
        options={options}
        onChange={handleSelect} //4
      />
    </div>
  );
}
