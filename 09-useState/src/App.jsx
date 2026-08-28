import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  const increaseNum = () => {
    setNum(num + 1);
  };

  const decreaseNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  const jumpBy5 = () => {
      setNum(num + 5);
  };

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button style={{display : "block"}} onClick={jumpBy5}>Increase by 5</button>
    </div>
  );
};

export default App;
