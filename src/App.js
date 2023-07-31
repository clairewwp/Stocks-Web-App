import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PriceHistory from "./pages/PriceHistory";
import Stocks from "./pages/Stocks";
import { Navigate } from "react-router-dom";
import History from "./pages/History";
//import Redirect from "./components/Redirect";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home exact />} />
      <Route path="/stock" element={<Stocks />} />
      {/* <Route path="/quote" element={<Quote />} /> */}
      <Route path="/history/:symbol" element={<PriceHistory />} />
      <Route path="/history" element={<History />}/>
       { /* <Route path="/history/:symbol" element={<PriceHistory />} />
      </Route> */}
      {/* <Route path = "/history/:unknown" element={<Redirect/>}/> */}
      <Route path="*" element={<Navigate to ="/"/>}/>
  
                   
    </Routes>
  );
}

export default App;
