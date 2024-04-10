import { useState } from 'react';

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h4>You clicked {count}</h4>
      <button type="button" className="btn" onClick={handleClick}>
        increase
      </button>
    </>
  );
};

export default UseStateBasics;
