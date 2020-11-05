import React from "react";
import "./styles.css";

import { IDCheck } from "./comps/ID";
import { Sign } from "./comps/Sign";

const App = () => {
  return (
    <div className="App">
      <h2>ID check</h2>
      <IDCheck></IDCheck>
      <h2>Adobe Sign</h2>
      <Sign></Sign>
    </div>
  );
};

export default App;
