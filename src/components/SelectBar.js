import React, { useState } from "react";
import Select from "react-select";
import "./SelectBar.css";

const options = [
  //{value: "List all", label: "List all"},
  { value: "Communication Services", label: "Communication Services" },
  { value: "Consumer Cyclical", label: "Consumer Cyclical" },
  { value: "Consumer Defensive", label: "Consumer Defensive" },
  { value: "Financial Services", label: "Financial Services" },
  { value: "Healthcare", label: "Healthcare" },
  { value: "Industrials", label: "Industrials" },
  { value: "Technology", label: "Technology" },
  { value: "Utilities", label: "Utilities" },
];

export default function SelectBar(props) {
  //const options=props.sector;
  
  // const options = props.data.map((s) => {
  //   return {
  //     label: s.sector,
  //    value: s.sector,
  //   };
  // });
  // console.log()
  const [select, setSelect] = useState("");
  const handleSelect = (e) => {
    if (e == null) {
      setSelect("null");
      props.onSelect("null");
    } else {
      setSelect(select);
      props.onSelect(e.value);
    }
  };
  //console.log(select);
  return (
    <div>
      <Select
        className="selectIndustry"
        id="selectIndustry"
        isClearable
        isSearchable
        placeholder="select from industry"
        type="text"
        options={options}
        onChange={handleSelect} //4
      />
    </div>
  );
}

