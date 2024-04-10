import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const clearList = () => {
    setPeople([]);
  };

  const removeSingleItem = (id) => {
    const newList = people.filter((person) => person.id != id);
    setPeople(newList);
  };

  return (
    <>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <button onClick={() => removeSingleItem(id)}>remove item</button>
          </div>
        );
      })}
      <button type="button" onClick={clearList}>
        clear list
      </button>
    </>
  );
};

export default UseStateArray;
