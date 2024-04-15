import { people } from '../../../data';
import avatar from '../../../assets/default-avatar.svg';

const Person = () => {
  return (
    <>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
            <h4>nickname:{person.nickName || avatar}</h4>
            <img
              src={person.images?.[0]?.small.url || {}}
              alt=""
              style={{ width: '50px' }}
            />
          </div>
        );
      })}
    </>
  );
};

export default Person;
