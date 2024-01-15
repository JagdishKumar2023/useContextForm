import React, { useContext } from "react";
import { ConterContext } from "./CounterProvider";

const ContextUse = () => {
  const ConterContext = useContext(ConterContext);

  return (
    <div>
      <button onClick={() => ConterContext.setCount(ConterContext + 1)}>
        Increment
      </button>
      <button onClick={() => ConterContext.setCount(ConterContext - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default ContextUse;
