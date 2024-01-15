import { useContext } from "react";
import "./App.css";
import ContextUse from "./ContextBAsic/ContextUse";
import { ConterContext } from "./ContextBAsic/CounterProvider";

function App() {
  const counterState = useContext(ConterContext);

  console.log("Context", counterState);

  return (
    <div className="App">
      <h1>Count is {counterState.count}</h1>
      <ContextUse />
      <ContextUse />
      <ContextUse />
      <ContextUse />
    </div>
  );
}

export default App;
