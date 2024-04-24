import { useState } from 'react';
import { data } from '../../../../data';
import List from './List';
import AddPerson from './addPerson';

const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data);

  const addPerson = (name) => {
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name };
    setPeople([...people, newPerson]);
  };

  return (
    <section>
      <AddPerson addPerson={addPerson} />
      <List people={people} />
    </section>
  );
};
export default LowerStateChallenge;
