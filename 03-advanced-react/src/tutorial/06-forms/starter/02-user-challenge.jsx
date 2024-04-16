import { useState } from 'react';
import { data } from '../../../data.js';

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      id: Math.floor(Math.random() * 100 + 10),
      name: name,
    };

    setList([...list, newPerson]);
    console.log(newPerson);
  };

  const removePerson = (id) => {
    const newArray = list.filter((person) => person.id !== id);
    setList(newArray);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <div className="nameList">
        {list.map((person) => {
          return (
            <div key={person.id}>
              <button onClick={() => removePerson(person.id)}>remove</button>
              <span>{person.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default UserChallenge;
