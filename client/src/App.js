import React from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import Panel from "./components/panel";
import { Web3Provider } from "./contexts/Web3Context";

import Evidence from "./components/Evidence";

function App() {
  return (
    <Web3Provider>
      <div className="App">
        <Router>
          <Evidence path="/" default />
          {/* <Panel path="/call" /> */}
        </Router>
      </div>
    </Web3Provider>
  );
}

export default App;
