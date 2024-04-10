import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 25,
    hobby: 'soccer',
  });

  const showJohn = () => {
    setPerson({ name: 'john', age: 100, hobby: 'scream at computer' });
  };

  return (
    <>
      <h2>useState object example</h2>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>{person.hobby}</h4>
      <button onClick={showJohn}>show john</button>
    </>
  );
};

export default UseStateObject;
