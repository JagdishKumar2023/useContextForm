// App.js
import React from "react";
import { ChartGpt } from "./component/ChartGpt";
import { ContextApi } from "./component/ContextApi";

function App() {
  return (
    <FormContext.Provider>
      <ChartGpt />
      <ContextApi />
    </FormContext.Provider>
  );
}

export default App;
