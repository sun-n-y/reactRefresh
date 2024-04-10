import { useState } from 'react';

const UseStateObject = () => {
  const [name, setName] = useState('peter');
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState('reading books');

  const showJohn = () => {
    setName('john');
    setAge(1000);
    setHobby('scoccer');
  };

  return (
    <>
      <h2>useState object example</h2>
      <h4>{name}</h4>
      <h4>{age}</h4>
      <h4>{hobby}</h4>
      <button onClick={showJohn}>show john</button>
    </>
  );
};

export default UseStateObject;
