import React, { useState } from "react";
import "./SearchBar.css";

//import getStock from "../api/getStock";

export default function SearchBar(props) {
  const [innerSearch, setInnerSearch] = useState("");
  const handleSearch = (e) => {
  // setInnerSearch(e.target.value);
  props.onChange(e.target.value); 

    // originally I put onSubmit, that's why it never work dynamically, 
    // as it should be onChange, which should be the same as below like 
    // line 23 as well as line 147 in StockTable
  };
  //console.log(innerSearch); //for testing
  //console.log(select);//testing
  return (
    <div>
      <input
        areia-aria-labelledby="search-button"
        className="search"
        id="search"
        type="text"
        //value={innerSearch}
        placeholder="Search by symbol"
        onChange={handleSearch}
      />
      {/* <button
        id="search-button"
        type="button"
        onClick={() => props.onSubmit(innerSearch)}
      >
        Search
      </button> */}
    </div>
  );
}
