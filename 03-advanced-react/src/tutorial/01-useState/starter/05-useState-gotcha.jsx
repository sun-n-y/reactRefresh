import { useState } from 'react';

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setTimeout(() => {
      setCount((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };

  return (
    <>
      <h2>useState "gotcha"</h2>
      <h1>{count}</h1>
      <button onClick={increase}>plus 1</button>
    </>
  );
};

export default UseStateGotcha;
